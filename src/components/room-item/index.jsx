import PropTypes from "prop-types";
import React, { memo } from "react";
import {Rating} from '@mui/material'

import { RoomItemWrapper } from "./style";

const RoomItem = memo((props) => {
    const { itemData} = props;

    return (
        <RoomItemWrapper color={itemData?.verify_info?.text_color || "#39576a"}>
            <div className="cover">
                <img src={itemData.picture_url} alt="" />
            </div>
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
    itemData: PropTypes.object
};
export default RoomItem;
