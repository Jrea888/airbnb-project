import React, { memo } from "react";
import { AppHeaderWrapper } from "./style";
import HeaderLeft from "./component/header-left";
import HeaderCenter from "./component/header-center";
import HeaderRight from "./component/header-right";

const AppHeader = memo(() => {
    return (
        <AppHeaderWrapper>
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
        </AppHeaderWrapper>
    );
});

export default AppHeader;
