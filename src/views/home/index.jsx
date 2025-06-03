import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeGoodPrice } from "@/store/modules/home";

import {HomeWrapper} from './style'
import CategoryInfo from "./component/category-info";
import HomeBanner from "./component/home-banner";
import SectionHeader from "@/components/section-header";

const HomePage = memo(() => {
    // 发送网络数据
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchHomeGoodPrice());
    }, [dispatch]);

    // 获取store中的数据
    const { goodPriceInfo } = useSelector((state) => {
        return {
            goodPriceInfo: state.home.goodPriceInfo,
        };
    });

    return (
        <HomeWrapper>
            <HomeBanner />

            <div className="home-content">
                <SectionHeader title={goodPriceInfo.title} />
            </div>

            {/* 分类信息 */}
            <CategoryInfo />
        </HomeWrapper>
    );
});

export default HomePage;
