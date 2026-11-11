import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionRoomsWrapper } from "./style";
import RoomItem from "../room-item";

const SectionRooms = memo((props) => {
    const { roomList = [], column = 4, itemClick } = props;

    return (
        <SectionRoomsWrapper column={column}>
            {
                roomList.slice(0, 8).map(item => {
                    return <RoomItem key={item.id} itemData={item} itemClick={itemClick} />;
                })
            }
        </SectionRoomsWrapper>
    );
});

SectionRooms.propTypes = {
    column: PropTypes.number,
    roomList: PropTypes.array,
    itemClick: PropTypes.func,
};
export default SectionRooms;
