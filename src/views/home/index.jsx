import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeGoodPrice } from "@/store/modules/home";

import {HomeWrapper} from './style'
import CategoryInfo from "./component/category-info";

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
            <div className="home-content">
                <h2>HomePage - {goodPriceInfo.title}</h2>
            </div>

            {/* 分类信息 */}
            <CategoryInfo />
        </HomeWrapper>
    );
});

export default HomePage;
