// 添加拦截器：
// 拦截request请求
// 拦载uploadFile文件上传
// TODO:
// 1,非http开头需拼接地址
// 2,请求超时
// 3,添加小程序端请求头标识
// 4. 添加token请求头标识
import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
const httpInterceptor = {
  invoke(options: any) {
    if (!options.url.startWith('http')) {
      options.url = baseURL + options.url
    }
    options.timeout = 10000
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    const member = useMemberStore()
    const token = member.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
