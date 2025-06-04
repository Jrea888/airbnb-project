import serviceRequest from "./service-request";

export async function getHomeGoodPriceData() {
    const result = await serviceRequest.get({ url: '/home/goodprice' });
    return result;
}

export async function getHomeHotRecommendData() {
    const result = await serviceRequest.get({ url: '/home/hotrecommenddest' });
    return result;
}

export async function getHomeHighScoreData() {
    const result = await serviceRequest.get({ url: '/home/highscore' });
    return result;
}

export async function getHomeDiscountHotData() {
    const result = await serviceRequest.get({ url: '/home/discount' });
    return result;
}
