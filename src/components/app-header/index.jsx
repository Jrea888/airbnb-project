import React, { memo, useState } from "react";
import { AppHeaderWrapper, SearchAreaWrapper } from "./style";
import HeaderLeft from "./component/header-left";
import HeaderCenter from "./component/header-center";
import HeaderRight from "./component/header-right";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";

const AppHeader = memo(() => {
    const [isSearch, setIsSearch] = useState(true)
    const {config} = useSelector((state) => {
        return {
            config: state.header.config
        }
    }, shallowEqual)
    const {isFixed} = config
    console.log(config.isFixed, '-----isFixed')

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
