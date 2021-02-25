import request from '@/utils/request'

// 列表
export function getList(dto) {
  return request(({
    url: '/client/article/find_some',
    method: 'post',
    data: dto
  }))
}