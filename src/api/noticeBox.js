import request from '@/utils/request';
import axios from 'axios'

export function getNoticeBox(){
    return request({
        url: 'client/article/find_one_by_id/1',
        method: 'Get'
    })
}