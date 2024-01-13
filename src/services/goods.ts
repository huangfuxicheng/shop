import { http } from '@/utils/http'
import type { GoodsResult } from '@/types/goods'

/**
 * 商品详情
 * @param id 商品id
 * @author <a href="middlings@qq.com" rel="nofollow">middlings</a>
 */
export const getGoodsById = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    }
  })
}
