import serviceRequest from "./service-request";

/**
 * 房源详情接口
 * 注意：原来写成了 serviceRequest.get(`/service/${id}`)，传的是字符串而不是配置对象，
 * get() 内部 {...config} 展开字符串只会得到一堆字符下标、没有 url，调用必然失败。
 * 另外 detail 页目前的数据来自 store 里的示例数据，等后端就绪后可直接换成这里。
 */
export function getServiceDetail(id) {
    return serviceRequest.get({ url: `/service/${id}` });
}
