import React, { memo } from "react";
import { HeaderCenterWrapper } from "./style";
import IconSearch from "@/assets/svg/icon_search";

const HeaderCenter = memo(() => {
    return (
        <HeaderCenterWrapper>
            {/* 搜索框区域 */}
            <div className="search-areas">
                <div className="little-search">
                    <div className="search-content">
                        <div className="local btn">
                            <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/4aae4ed7-5939-4e76-b100-e69440ebeae4.png?im_w=240" alt="" />
                            <span>任何地方</span>
                        </div>
                        <div className="line"></div>
                        <div className="btn">
                            <span>任何时间</span>
                        </div>
                        <div className="line"></div>
                        <div className="btn">
                            <span>添加人数</span>
                        </div>
                    </div>
                    <div className="icon-search">
                        <div className="image-icon">
                            <IconSearch with="12" height="12" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 详细搜索区域 */}
            {/* <div className="areas">
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
            </div> */}
        </HeaderCenterWrapper>
    );
});

export default HeaderCenter;
