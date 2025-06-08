import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { isEmptyObject } from "@/utils";
import { fetchHomeGoodPrice, fetchHomeRecommend, fetchHomeHighScore, fetchHomeDiscountHot, fetchHomeToGoInspiration, fetchHomePlusInfo} from "@/store/modules/home";

import {HomeWrapper} from './style'
import CategoryInfo from "./component/category-info";
import HomeBanner from "./component/home-banner";
import GoodPriceSection from "./sections/good-price-section";
import RecommendSection from "./sections/recommend-section";
import HighScoreSection from "./sections/high-score-section";
import DiscountHotSection from "./sections/discount-hot-section";
import ToGoInspiration from "./sections/to-go-inspiration-section";
import PlusInfoSection from "./sections/plus-info-section";

const HomePage = memo(() => {
    // 发送网络数据
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchHomeDiscountHot());
        dispatch(fetchHomeRecommend());
        dispatch(fetchHomeToGoInspiration());
        dispatch(fetchHomeHighScore());
        dispatch(fetchHomeGoodPrice());
        dispatch(fetchHomePlusInfo());
    }, [dispatch]);

    // 获取store中的数据
    const {goodPriceInfo, recommendInfo, highScoreInfo, discountHotInfo, toGoInspirationInfo, plusInfo} = useSelector((state) => {
        return {
            goodPriceInfo: state.home.goodPriceInfo,
            recommendInfo: state.home.recommendInfo,
            highScoreInfo: state.home.highScoreInfo,
            discountHotInfo: state.home.discountHotInfo,
            toGoInspirationInfo: state.home.toGoInspirationInfo,
            plusInfo: state.home.plusInfo
        };
    }, shallowEqual);

    return (
        <HomeWrapper>
            <HomeBanner />

            <div className="home-content">
                {/* 折扣热门房源 */}
                {isEmptyObject(discountHotInfo) && <DiscountHotSection infoData={discountHotInfo} />}
                {/* 推荐房间 */}
                {isEmptyObject(recommendInfo) && <RecommendSection infoData={recommendInfo} />}
                {/* 去旅游灵感 */}
                {isEmptyObject(toGoInspirationInfo) && <ToGoInspiration infoData={toGoInspirationInfo} />}
                {/* 高价房源信息 */}
                {isEmptyObject(goodPriceInfo) && <GoodPriceSection infoData={goodPriceInfo} />}
                {/* 高分好评房源 */}
                {isEmptyObject(highScoreInfo) && <HighScoreSection infoData={highScoreInfo} />}
                {/* Plus房源信息 */}
                {isEmptyObject(plusInfo) && <PlusInfoSection infoData={plusInfo} />}
            </div>

            {/* 分类信息 */}
            <CategoryInfo />
        </HomeWrapper>
    );
});

export default HomePage;
