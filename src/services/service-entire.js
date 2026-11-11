import serviceRequest from './service-request'
import { PAGE_SIZE } from '@/constants'

export async function getEntireRoomList(offset = 0, size = PAGE_SIZE) {
    const result  = await serviceRequest.get({url: `entire/list`, params: {offset, size}})
    return result
}
