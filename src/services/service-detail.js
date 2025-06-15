import serviceRequest from "./service-request";


export function getServiceDetail(id) {
    return serviceRequest.get(`/service/${id}`);
}
