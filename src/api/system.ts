import request from '@/utils/request'

export function getUser(params: object) {
  return request.get('/sys/admin/getUser', params)
}
export function getMenus(params: object) {
  return request.get('/sys/admin/getMenus', params)
}
