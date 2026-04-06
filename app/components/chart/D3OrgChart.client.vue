<template>
  <div>
    <div ref="chartContainer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { OrgChart } from 'd3-org-chart'

import * as d3 from 'd3'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const chartContainer = ref(null)
let chart = null

onMounted(() => {
  if (chartContainer.value && props.data.length > 0) {
    chart = new OrgChart()
        .container(chartContainer.value)
        .data(props.data)
        .nodeWidth((d) => 300)
        .nodeHeight((d) => 120)
        .linkUpdate(function (d, i, arr) {
          d3.select(this).attr("stroke", "#e5e7eb")
              .attr("stroke-width", 2);
        })
        .nodeContent(function (d) {
          const borderColor = d.data.parentId === "" ? "#10b981" : "#e5e7eb";

          return `
          <div style='font-family: sans-serif; background-color: white; border: 2px solid ${borderColor}; border-radius: 12px; padding: 15px; height: 100%; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); box-sizing: border-box; display: flex; flex-direction: row; align-items: center; text-align: left;'>

            <div style='width: 55px; height: 55px; border-radius: 50%; background-color: #f3f4f6; border: 2px solid #d1d5db; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' style='width: 35px; height: 35px; color: #9ca3af;'>
                <path fill-rule='evenodd' d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z' clip-rule='evenodd' />
              </svg>
            </div>

            <div style='display: flex; flex-direction: column; overflow: hidden; flex-grow: 1;'>
              <div style='font-weight: bold; font-size: 16px; margin-bottom: 2px; color: #1f2937; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 100%;'>
                ${d.data.nama}
              </div>

              <div style='color: #6b7280; font-size: 13px; line-height: 1.2;'>
                ${d.data.jabatan}
              </div>
            </div>

          </div>
        `;
        });

    chart.render();
    chart.expandAll();

  }
})

watch(() => props.data, (newData) => {
  if (chart && newData.length > 0) {
    chart.data(newData).render().expandAll();

  }
}, { deep: true })
</script>

<style scoped>

</style>