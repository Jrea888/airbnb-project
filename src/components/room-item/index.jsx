import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { Rating } from '@mui/material';
import { Carousel } from 'antd';
import classNames from "classnames";

import { RoomItemWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon_arrow_left";
import IconArrowRight from "@/assets/svg/icon_arrow_right";
import Indictor from "@/base-ui/indicator";

const RoomItem = memo((props) => {
    const { itemData, itemClick } = props;
    const [selectIndex, setSelectIndex] = useState(0);
    const sliderRef = useRef();

    // 轮播图按钮点击
    function controlClickHandle(isRight = true, event) {
        isRight ? sliderRef.current.next() : sliderRef.current.prev();

        // 处理轮播图指示器，计算最新索引
        let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
        const urlsLength = itemData.picture_urls.length
        if (newIndex < 0) {
            newIndex = urlsLength - 1;
        }
        if (newIndex > urlsLength - 1) {
            newIndex = 0;
        }
        setSelectIndex(newIndex);

        // 阻止冒泡，防止点击按钮时触发轮播图点击事件
        event.stopPropagation();
    }

    function roomItemClickHandle() {
        if (itemClick) {
            itemClick(itemData)
        }
    }

    const pictureElement = (
         <div className="cover">
            <img src={itemData.picture_url} alt="" />
        </div>
    )

    const sliderElement = (
        <div className="slider">
            {/*按钮区域 */}
            <div className="control">
                <div className="left icon-btns" onClick={e => controlClickHandle(false, e)}>
                    <IconArrowLeft width="30" height="30" />
                </div>
                <div className="right icon-btns" onClick={e => controlClickHandle(true, e)}>
                    <IconArrowRight width="30" height="30" />
                </div>
            </div>
            {/* 指示器（小点） */}
            <div className="indicator">
                <Indictor selectIndex={selectIndex}>
                    {
                        itemData.picture_urls?.map((item, index) => {
                            return <div key={item} className={classNames('dot', {active: index === selectIndex})}></div>
                        })
                    }
                </Indictor>
            </div>
            {/* 轮播图 */}
            <Carousel dots={false} ref={sliderRef}>
                {
                    itemData?.picture_urls?.map(item => {
                        return (
                            <div className="cover" key={item}>
                                <img src={item} alt="" />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )

    return (
        <RoomItemWrapper color={itemData?.verify_info?.text_color || "#39576a"} onClick={roomItemClickHandle}>
            {
                 !itemData.picture_urls ? pictureElement : sliderElement
            }
            <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
            <div className="name">{itemData.name}</div>
            <div className="price">¥{itemData.price} / 晚</div>
            <div className="bottom">
                <Rating
                    readOnly
                    precision={0.1}
                    value={itemData.star_rating ?? 5}
                    sx={{fontSize: "12px", color: "#00848A", marginRight: "-1px"}}
                />
                <span className="counter">{itemData.reviews_count}</span>
                {
                    itemData.bottom_info && <span className="extra">{itemData.bottom_info?.content}</span>
                }
            </div>
        </RoomItemWrapper>
    );
});

RoomItem.propTypes = {
    itemClick: PropTypes.func,
    itemData: PropTypes.object
};
export default RoomItem;
