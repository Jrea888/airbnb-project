import React, { memo } from "react";
import { EntireRoomsWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";

const EntireRooms = memo((props) => {
    // 从Reduce中获取数据
    const {roomList, totalCount, isLoading} = useSelector((state) => {
        return {
            roomList: state.entire.roomList,
            totalCount: state.entire.totalCount,
            currentPage: state.entire.currentPage,
            isLoading: state.entire.isLoading,
        }
    }, shallowEqual)

    return (
        <EntireRoomsWrapper>
            <div className="title">{totalCount}多处住处</div>
            <div className="room-list">
                {
                    roomList.map(v => {
                        return (
                            <div className="entire-room-item"  key={v._id}>
                                <RoomItem itemData={v} />
                            </div>
                        )
                    })
                }
            </div>
            {/* 加载loading */}
            {isLoading &&  <div className="mask"></div>}
        </EntireRoomsWrapper>
    );
});

EntireRooms.propTypes = {};

export default EntireRooms;
