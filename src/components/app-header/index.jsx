import React, { memo, useRef, useState } from "react";
import { AppHeaderWrapper, SearchAreaWrapper } from "./style";
import HeaderLeft from "./component/header-left";
import HeaderCenter from "./component/header-center";
import HeaderRight from "./component/header-right";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";
import { useScrollPosition } from "@/hooks";

const AppHeader = memo(() => {
    const [isSearch, setIsSearch] = useState(false)
    const {config} = useSelector((state) => {
        return {
            config: state.header.config
        }
    }, shallowEqual)
    const { isFixed } = config

    const { scrollY } = useScrollPosition()
    const prevY = useRef(0)
    // 如果搜索框没有显示时，则一直记录当前滚动距离
    if (!isSearch) {
        prevY.current = scrollY
    }
    // 如果显示搜索状态下 且当滚动距离大于当前滚动距离的绝对值大于30时，则隐藏搜索框
    if (isSearch && Math.abs(scrollY - prevY.current) > 30) {
        setIsSearch(false)
    }

    return (
        <AppHeaderWrapper className={classNames({fixed: isFixed})}>
            <div className="header-content">
                <div className="top">
                    <HeaderLeft />
                    <HeaderCenter isSearch={isSearch} searchClick={() => setIsSearch(!isSearch)} />
                    <HeaderRight />
                </div>

                <SearchAreaWrapper isSearch={isSearch} />
            </div>

            {isSearch && <div className="mask-cover" onClick={() => setIsSearch(false)}></div>}
        </AppHeaderWrapper>
    );
});

export default AppHeader;
