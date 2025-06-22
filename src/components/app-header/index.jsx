import React, { memo } from "react";
import { AppHeaderWrapper } from "./style";
import HeaderLeft from "./component/header-left";
import HeaderCenter from "./component/header-center";
import HeaderRight from "./component/header-right";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";

const AppHeader = memo(() => {
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
                <HeaderLeft />
                <HeaderCenter />
                <HeaderRight />
            </div>
        </AppHeaderWrapper>
    );
});

export default AppHeader;
