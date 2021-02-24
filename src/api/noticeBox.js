import request from '@/utils/request';
import axios from 'axios'

export function getNoticeBox(){
    return request({
        url: '/client/article/1',
        method: 'Get'
    })
}