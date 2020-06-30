import request from '@/utils/request'

export function login(params: object) {
  return request.post('/sys/api/v1/user/login', params)
}

export function getInfo(params: object) {
  return request.get('/sys/app/mock/249015/getUserInfo', params)
}
