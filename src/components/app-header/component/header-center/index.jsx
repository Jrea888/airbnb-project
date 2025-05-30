import React, { memo } from "react";
import { HeaderCenterWrapper } from "./style";
import IconSearch from "@/assets/svg/icon_search";

const HeaderCenter = memo(() => {
    return (
        <HeaderCenterWrapper>
            <div className="areas">
                <div className="area-item">
                    <span className="label">地点</span>
                    <span className="tip">搜索目的地</span>
                </div>
                <div className="line"></div>
                <div className="area-item">
                    <span className="label">入住</span>
                    <span className="tip">添加日期</span>
                </div>
                <div className="line"></div>
                <div className="area-item">
                    <span className="label">退房</span>
                    <span className="tip">添加日期</span>
                </div>
                <div className="line"></div>
                <div className="area-item">
                    <div className="search">
                        <div className="people">
                            <span className="label">人员</span>
                            <span className="tip">添加人数</span>
                        </div>
                        <div className="icon-search">
                            <IconSearch />
                            <span className="text">搜索</span>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderCenterWrapper>
    );
});

export default HeaderCenter;
