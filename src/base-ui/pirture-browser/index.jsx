import PropTypes from "prop-types";
import React, { memo } from "react";
import { PictureBrowserWrapper } from "./style";
import IconClose from "@/assets/svg/icon-close";

const PictureBrowser = memo((props) => {
    const { pictureList, closeClick } = props;

    function closeHandle() {
        if (closeClick) {
            closeClick();
        }
    }

    return (
        <PictureBrowserWrapper>
            <div className="top">
                <div className="close-btn" onClick={closeHandle}>
                    <IconClose />
                </div>
            </div>
            <h1>图片浏览器</h1>
        </PictureBrowserWrapper>
    );
});

PictureBrowser.propTypes = {
    pictureList: PropTypes.array,
};

export default PictureBrowser;
