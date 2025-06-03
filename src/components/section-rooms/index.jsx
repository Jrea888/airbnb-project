import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionRoomsWrapper } from "./style";

const SectionRooms = memo((props) => {
    const { list } = props;

    return (
        <SectionRoomsWrapper>
            <div>SectionRooms</div>
        </SectionRoomsWrapper>
    );
});

SectionRooms.propTypes = {
    list: PropTypes.array,
};
export default SectionRooms;
