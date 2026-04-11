export interface OrganizationApiItem {
  id: string
  parent_id: string | null
  name: string
  position: string
  display_photo_url: string | null
}

export interface OrganizationChartNode {
  id: string
  parentId: string
  nama: string
  jabatan: string
  imageUrl: string
  sektumData?: any
  bendumData?: any
  _isHidden?: boolean
  _isSektumBendumHub?: boolean
}
