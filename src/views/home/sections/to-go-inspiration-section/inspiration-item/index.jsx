import PropTypes from "prop-types";
import React, { memo } from "react";
import { InspirationItemWrapper } from "./style";

const InspirationItem = memo((props) => {
    const { itemData } = props;

    return (
        <InspirationItemWrapper>
            <div className="item-info">
                <img className="cover" src={itemData.picture_url} alt="" />
                <div className="bg-cover"></div>
                <div className="info">
                    <div className="city">{itemData.city}</div>
                    <div className="price">均价 {itemData.price}</div>
                </div>
            </div>
        </InspirationItemWrapper>
    );
});

InspirationItem.propTypes = {
    itemData: PropTypes.object,
};

export default InspirationItem;
