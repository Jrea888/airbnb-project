import React, { memo, useRef, useState } from "react";
import { CSSTransition } from 'react-transition-group';
import IconSearch from "@/assets/svg/icon_search";
import SearchTitles from '@/assets/data/search_titles'
import SearchTabs from "./component/search-tab";
import SearchSections from "./component/search-sections";
import { HeaderCenterWrapper } from "./style";

const HeaderCenter = memo((props) => {
    const { isSearch, searchClick } = props
    const [currentTabIndex, setCurrentTabIndex] = useState(0)
    const searchAreasRef = useRef(null)
    const searchDetailRef = useRef(null)
    const titles = SearchTitles.map(v => v.title)

    const searchClickHandle = () => {
        searchClick && searchClick()
    }

    return (
        <HeaderCenterWrapper>
            {/* 搜索框区域 */}
            <CSSTransition
                in={!isSearch}
                timeout={250}
                classNames="fade-areas"
                unmountOnExit={true}
                nodeRef={searchAreasRef}
            >
                <div ref={searchAreasRef} className="search-areas" onClick={searchClickHandle}>
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
                                <IconSearch width="12" height="12" />
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={isSearch}
                timeout={250}
                classNames="fade-detail"
                unmountOnExit={true}
                nodeRef={searchDetailRef}
            >
                <div ref={searchDetailRef} className="search-detail">
                    <SearchTabs titles={titles} tabClick={setCurrentTabIndex} />
                    <SearchSections currentIndex={currentTabIndex} searchInfos={SearchTitles[currentTabIndex].searchInfos} />
                </div>
            </CSSTransition>
        </HeaderCenterWrapper>
    );
});

export default HeaderCenter;
