import { http } from '@/utils/http'
import type { CartItem } from '@/types/cart'

/**
 * 加入购物车
 * @param data 请求参数
 */
export const postMemberCart = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}

/**
 * 获取购物车列表
 */
export const getMemberCart = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}
