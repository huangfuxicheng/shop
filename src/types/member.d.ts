import { extend } from '@dcloudio/uni-app'

type BaseProfile = {
  /** 用户ID */
  id: number
  /** 头像  */
  avatar: string
  /** 账户名  */
  account: string
  /** 昵称 */
  nickname?: string
}

/** 小程序登录 登录用户信息 */
export type LoginResult = BaseProfile & {
  /** 手机号 */
  mobile: string
  /** 登录凭证 */
  token: string
}

export type ProfileDetail = BaseProfile & {
  birthday: string
  fullLocation: string
  gender: string
  profession: string
}

export type Gender = '男' | '女'
