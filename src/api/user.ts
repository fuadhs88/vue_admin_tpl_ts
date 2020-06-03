import request from '@/utils/request'

export function login(params :object) {
  return request.post('/api/v1/user/login', params)
}

export function getInfo(params :object) {
  return request.post('/api/v1/getUserInfo',params)
}

