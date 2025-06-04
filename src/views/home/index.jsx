import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { isEmptyObject } from "@/utils";
import { fetchHomeGoodPrice, fetchHomeRecommend, fetchHomeHighScore, fetchHomeDiscountHot} from "@/store/modules/home";

import {HomeWrapper} from './style'
import CategoryInfo from "./component/category-info";
import HomeBanner from "./component/home-banner";
import GoodPriceSection from "./sections/good-price-section";
import RecommendSection from "./sections/recommend-section";
import HighScoreSection from "./sections/high-score-section";
import DiscountHotSection from "./sections/discount-hot-section";

const HomePage = memo(() => {
    // 发送网络数据
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchHomeGoodPrice());
        dispatch(fetchHomeRecommend());
        dispatch(fetchHomeHighScore());
        dispatch(fetchHomeDiscountHot());
    }, [dispatch]);

    // 获取store中的数据
    const {goodPriceInfo, recommendInfo, highScoreInfo, discountHotInfo} = useSelector((state) => {
        return {
            goodPriceInfo: state.home.goodPriceInfo,
            recommendInfo: state.home.recommendInfo,
            highScoreInfo: state.home.highScoreInfo,
            discountHotInfo: state.home.discountHotInfo,
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

                {/* 高价房源信息 */}
                {isEmptyObject(goodPriceInfo) && <GoodPriceSection infoData={goodPriceInfo} />}
                {/* 高分好评房源 */}
                {isEmptyObject(highScoreInfo) && <HighScoreSection infoData={highScoreInfo} />}
            </div>

            {/* 分类信息 */}
            <CategoryInfo />
        </HomeWrapper>
    );
});

export default HomePage;
