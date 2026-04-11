<template>
  <div>
    <div ref="chartContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import { OrgChart } from 'd3-org-chart'
import * as d3 from 'd3'
import type { OrganizationChartNode } from '~/types/organization'

const props = defineProps({
  data: {
    type: Array as () => OrganizationChartNode[],
    required: true,
  },
})

const chartContainer = ref<HTMLDivElement | null>(null)
let chart: OrgChart | null = null

/**
 * Returns the accent border color based on the node's hierarchy level.
 * Root node gets a green accent; all others use a neutral border.
 */
function getNodeBorderColor(nodeData: OrganizationChartNode) {
  return nodeData.parentId === '' ? '#10b981' : '#e5e7eb'
}

/**
 * Generates the HTML string for a single org chart node card.
 * Avatar is displayed above the name in a centered column layout.
 */
function createSingleCardHtml(nodeData: OrganizationChartNode) {
  if (!nodeData) return '';
  const borderColor = getNodeBorderColor(nodeData)

  return `
    <div style="
      font-family: sans-serif;
      background-color: white;
      border: 2px solid ${borderColor};
      border-radius: 12px;
      padding: 14px;
      height: 100%;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
      box-sizing: border-box;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 8px;
    ">
      <div style="
        width: 100px;
        height: 100px;
        min-height: 100px;
        border-radius: 50%;
        background-color: #f3f4f6;
        border: 2px solid #d1d5db;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        overflow: hidden;
      ">
        ${nodeData.imageUrl ? `
          <img
            src="${nodeData.imageUrl}"
            alt="${nodeData.nama}"
            style="width: 100%; height: 100%; object-fit: cover;"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
          />
          <svg style="display: none; width: 42px; height: 42px; color: #9ca3af;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
          </svg>
        ` : `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 42px; height: 42px; color: #9ca3af;">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
          </svg>
        `}
      </div>

      <div style="display: flex; flex-direction: column; gap: 4px; width: 100%; overflow: hidden;">
        <div style="
          font-weight: 700;
          font-size: 15px;
          color: #1f2937;
          line-height: 1.4;
          overflow-wrap: break-word;
          word-break: normal;
        ">
          ${nodeData.nama}
        </div>
        <div style="
          color: #6b7280;
          font-size: 12px;
          line-height: 1.3;
          overflow-wrap: break-word;
        ">
          ${nodeData.jabatan}
        </div>
      </div>
    </div>
  `;
}

function createNodeContent(d: { data: OrganizationChartNode }) {
  if (d.data._isHidden) {
    // Acts as a vertical pipe to connect Ketua Umum to the divisions without breaking the layout
    return `
      <div style="width: 100%; height: 100%; display: flex; justify-content: center;">
        <div style="width: 2px; height: 100%; background-color: #e5e7eb;"></div>
      </div>
    `
  }

  if (d.data._isSektumBendumHub) {
    const hasSektum = !!d.data.sektumData;
    const hasBendum = !!d.data.bendumData;


    return `
      <div style="width: 100%; height: 100%; display: flex; justify-content: space-between; position: relative;">
        <!-- Card kiri (Sekretaris) -->
        <div style="width: 200px; height: 100%; visibility: ${hasSektum ? 'visible' : 'hidden'};">
          ${createSingleCardHtml(d.data.sektumData)}
        </div>

        <!-- Pipa vertikal poros pusat menerus ke Divisi -->
        <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background-color: #e5e7eb; transform: translateX(-50%); z-index: -2;"></div>

        <!-- Garis horizontal menghubungkan Sekretaris & Bendahara ke poros -->
        <div style="position: absolute; left: 100px; right: 100px; top: 40px; height: 2px; background-color: #e5e7eb; transform: translateY(-50%); z-index: -2;"></div>

        <!-- Card kanan (Bendahara) -->
        <div style="width: 200px; height: 100%; visibility: ${hasBendum ? 'visible' : 'hidden'};">
          ${createSingleCardHtml(d.data.bendumData)}
        </div>
      </div>
    `
  }

  return createSingleCardHtml(d.data);
}

/**
 * Constrains D3 zoom panning so the chart can never be dragged
 * completely off-screen. Accesses the zoomBehavior from internal
 * chart state after the chart has fully rendered.
 *
 * translateExtent sets the world bounds in SVG user-space coordinates:
 * - Left/top: -3000/-2000 prevents panning too far in those directions
 * - Right/bottom: 5000/3000 covers the full expanded tree width/height
 */
function applyPanConstraints() {
  if (!chart) {
    return
  }

  const { zoomBehavior, svg } = chart.getChartState()
  if (!zoomBehavior || !svg) return

  zoomBehavior.translateExtent([
    [-3000, -2000],
    [5000, 3000],
  ])
  svg.call(zoomBehavior)
}

async function initializeChart(data: OrganizationChartNode[]) {
  if (!chartContainer.value || data.length === 0) {
    return
  }

  chart = new OrgChart()
    .container(chartContainer.value)
    .data(data)
    .nodeWidth((d) => {
      if (d.data._isHidden) return 2;
      if (d.data._isSektumBendumHub) return 480; // 200 + 200 + spacing
      return 200;
    })
    .nodeHeight(() => 220)
    .childrenMargin(() => 50)
    .siblingsMargin(() => 20)
    .scaleExtent([0.12, 2])
    .linkUpdate(function () {
      d3.select(this)
        .attr('stroke', '#e5e7eb')
        .attr('stroke-width', 2)
    })
    .nodeContent((d) => createNodeContent(d))
    .render()
    .expandAll()

  await nextTick()
  applyPanConstraints()
}

onMounted(async () => {
  await initializeChart(props.data)
})

watch(
  () => props.data,
  async (newData) => {
    if (chart && newData.length > 0) {
      chart.data(newData).render().expandAll()
      await nextTick()
      applyPanConstraints()
      return
    }

    if (!chart && newData.length > 0) {
      await initializeChart(newData)
    }
  },
  { deep: true },
)
</script>

<style scoped>
</style>