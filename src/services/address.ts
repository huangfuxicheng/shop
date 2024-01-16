///member/address

import { http } from '@/utils/http'
import type { AddressParams } from '@/types/address'

/**
 * 添加收货地址
 * @param data 请求参数
 */
export const postMemberAddress = (data: AddressParams) => {
  return http({
    method: 'GET',
    url: '/member/address',
    data,
  })
}

