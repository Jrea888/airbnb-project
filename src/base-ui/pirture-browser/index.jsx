import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { PictureBrowserWrapper } from "./style";
import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon_arrow_left";
import IconArrowRight from "@/assets/svg/icon_arrow_right";
import Indicator from "../indicator";
import IconTriangleArrowBottom from "@/assets/svg/icon-triangle-arrow-bottom";
import IconTriangleArrowTop from "@/assets/svg/icon-triangle-arrow-top";

const PictureBrowser = memo((props) => {
    const { pictureList, closeClick } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isNext, setIsNext] = useState(true);
    const [showList, setShowList] = useState(true)
    const imageNodeRef = useRef(null)

    // 当显示图片浏览器时，滚动条消失
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    function closeHandle() {
        if (closeClick) {
            closeClick();
        }
    }

    const controlClickHandle = (isNext = true) => {
        let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
        if (newIndex < 0) {
            newIndex = pictureList.length - 1;
        }

        if (newIndex > pictureList.length -1) {
            newIndex = 0;
        }

        setCurrentIndex(newIndex);
        console.log(newIndex)
        setIsNext(isNext);
    };

    const imgItemClickHandle = (index) => {
        setCurrentIndex(index);
        setIsNext(index > currentIndex);
    };

    return (
        <PictureBrowserWrapper isNext={isNext} showList={showList}>
            <div className="top">
                <div className="close-btn" onClick={closeHandle}>
                    <IconClose />
                </div>
            </div>
            <div className="slider">
                <div className="control">
                    <div
                        className="left-btn base"
                        onClick={(e) => controlClickHandle(false)}
                    >
                        <IconArrowLeft width={77} height={77} />
                    </div>
                    <div
                        className="right-btn base"
                        onClick={(e) => controlClickHandle(true)}
                    >
                        <IconArrowRight width={77} height={77} />
                    </div>
                </div>
                <div className="picture">
                    <SwitchTransition mode="in-out">
                        <CSSTransition
                            timeout={200}
                            classNames="image"
                            key={pictureList[currentIndex]}
                            nodeRef={imageNodeRef}
                        >
                            <img ref={imageNodeRef} src={pictureList[currentIndex]} alt="" />
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
            <div className="preview">
                <div className="info">
                    <div className="desc">
                        <div className="left">
                            {currentIndex + 1}/{pictureList.length} room
                            apartment 图片{currentIndex + 1}
                        </div>
                        <div className="right" onClick={e => setShowList(!showList)}>
                            <span>
                                {showList ? "隐藏" : "显示"}照片列表
                            </span>
                            {showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
                        </div>
                    </div>
                    <div className="list">
                        <Indicator selectIndex={currentIndex}>
                            {pictureList.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={classNames("item", {
                                            active: index === currentIndex,
                                        })}
                                        onClick={(e) =>
                                            imgItemClickHandle(index)
                                        }
                                    >
                                        <img src={item} alt="" />
                                    </div>
                                );
                            })}
                        </Indicator>
                    </div>
                </div>
            </div>
        </PictureBrowserWrapper>
    );
});

PictureBrowser.propTypes = {
    pictureList: PropTypes.array,
};

export default PictureBrowser;
