import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomItemWrapper } from "./style";

const RoomItem = memo((props) => {
    return (
        <RoomItemWrapper>
            <div>RoomItem</div>
        </RoomItemWrapper>
    );
});

RoomItem.propTypes = {};
export default RoomItem;
