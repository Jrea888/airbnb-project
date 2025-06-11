import serviceRequest from './service-request'

export async function getEntireRoomList(offset = 0, size = 20) {
    const result  = await serviceRequest.get({url: `entire/list`, params: {offset, size}})
    return result
}