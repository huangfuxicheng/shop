import { http } from '@/utils/http'
import type { LoginResult } from '@/types/member'

type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}

/**
 * 小程序登录
 * @param data 请求参数
 */
export const login = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}
/**
 * 小程序登录_内测版
 * @param phoneNumber 手机号
 * @constructor
 */
export const SimpleLogin = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    }
  })
}
