import { http } from '@/utils/http'
import type { ProfileDetail } from '@/types/member'

/**
 * 获取个人信息
 */
export const getMemberProfile = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}
