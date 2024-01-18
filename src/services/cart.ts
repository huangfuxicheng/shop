import { http } from '@/utils/http'

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
