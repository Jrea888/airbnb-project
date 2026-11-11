import React, { memo, useEffect, useRef, useState } from "react";
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
    const prevY = useRef(scrollY)

    // 搜索框展开后，滚动距离超过 30px 自动收起。
    // 原实现把这段判断直接写在组件函数体里（渲染期 setState + 渲染期修改 ref），
    // 在 StrictMode 双次渲染 / 并发渲染下行为不可靠，因此挪进 effect。
    useEffect(() => {
        // 未展开时持续记录当前位置，作为展开后的比较基准
        if (!isSearch) {
            prevY.current = scrollY
            return
        }

        if (Math.abs(scrollY - prevY.current) > 30) {
            setIsSearch(false)
        }
    }, [scrollY, isSearch])

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
