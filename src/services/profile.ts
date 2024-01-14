import { http } from '@/utils/http'
import type { ProfileDetail, ProfileParams } from '@/types/member'

/**
 * 获取个人信息
 */
export const getMemberProfile = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

export const putMemberProfile = (data: ProfileParams) => {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
