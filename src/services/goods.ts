import { http } from '@/utils/http'

/**
 * 商品详情
 * @param id 商品id
 * @author <a href="middlings@qq.com" rel="nofollow">middlings</a>
 */
export const getGoodsById = (id: string) => {
  return http({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    }
  })
}
