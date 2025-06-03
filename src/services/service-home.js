import serviceRequest from "./service-request";

export async function getHomeGoodPriceData() {
    const result = await serviceRequest.get({ url: '/home/goodprice' });
    return result;
}