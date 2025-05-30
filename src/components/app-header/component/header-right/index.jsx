import React, { memo } from "react";
import { HeaderRightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";

const HeaderRight = memo(() => {
    return (
        <HeaderRightWrapper>
            <div className="btns">
                <div className="btn">
                    <IconGlobal />
                </div>
                <div className="btn">
                    <IconMenu />
                </div>
            </div>
        </HeaderRightWrapper>
    );
});

export default HeaderRight;
