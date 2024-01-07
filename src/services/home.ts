import { http } from '@/utils/http'
import type { BannerItem, CategoryItem } from '@/types/home'

export const getHomeBanner = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

export const getHomeCategory = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
