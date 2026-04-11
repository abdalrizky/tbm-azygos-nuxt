import type { OrganizationApiItem, OrganizationChartNode } from '~/types/organization'

export function mapOrganizationItemToChartNode(item: OrganizationApiItem): OrganizationChartNode {
  return {
    id: item.id,
    parentId: item.parent_id ?? '',
    nama: item.name,
    jabatan: item.position,
    imageUrl: item.display_photo_url ?? '',
  }
}

export async function getOrganizationStructure(): Promise<OrganizationChartNode[]> {
  const data = await $fetch<OrganizationApiItem[]>('/api/organization')

  let nodes = data.map(mapOrganizationItemToChartNode)

  // Find Ketua Umum
  const ketuaUmum = nodes.find(n => n.jabatan.toLowerCase().includes('ketua umum'))

  if (ketuaUmum) {
    let sektumNode = nodes.find(n => n.jabatan.toLowerCase().includes('sekretaris umum'))
    let bendumNode = nodes.find(n => n.jabatan.toLowerCase().includes('bendahara umum'))

    const combinedHubId = 'hub_sektum_bendum_' + ketuaUmum.id;
    let hasDivisiUnderKetua = false;

    // Filter out the original Sektum and Bendum so they don't render individually
    nodes = nodes.filter(n => n.id !== sektumNode?.id && n.id !== bendumNode?.id);

    nodes.forEach(node => {
      const jabatanLower = node.jabatan.toLowerCase();
      if (jabatanLower.includes('kepala divisi') || jabatanLower.includes('ketua divisi')) {
        // Reroute divisi reporting to the combined hub
        if (node.parentId === ketuaUmum.id) {
          node.parentId = combinedHubId;
          hasDivisiUnderKetua = true;
        }
      }
    });

    if (sektumNode || bendumNode || hasDivisiUnderKetua) {
      nodes.push({
        id: combinedHubId,
        parentId: ketuaUmum.id,
        nama: '',
        jabatan: '',
        imageUrl: '',
        _isSektumBendumHub: true,
        sektumData: sektumNode,
        bendumData: bendumNode
      });
    }
  }

  return nodes
}
