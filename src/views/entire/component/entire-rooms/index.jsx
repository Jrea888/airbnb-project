import React, { memo } from "react";
import { EntireRoomsWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";
import { useRoomItemClick } from "@/hooks";

const EntireRooms = memo((props) => {
    // 从Reduce中获取数据
    const { roomList, totalCount, isLoading } = useSelector((state) => {
        return {
            roomList: state.entire.roomList,
            totalCount: state.entire.totalCount,
            currentPage: state.entire.currentPage,
            isLoading: state.entire.isLoading,
        }
    }, shallowEqual)

    // 点击房源 → 写入 detail 并跳转 /detail（与首页各 section 共用同一套逻辑）
    const roomItemClickHandle = useRoomItemClick()

    return (
        <EntireRoomsWrapper>
            <div className="title">{totalCount}多处住处</div>
            <div className="room-list">
                {
                    roomList.map(v => {
                        return (
                            <div className="entire-room-item" key={v._id}>
                                <RoomItem itemData={v} itemClick={roomItemClickHandle} />
                            </div>
                        )
                    })
                }
            </div>
            {/* 加载loading */}
            {isLoading && <div className="mask"></div>}
        </EntireRoomsWrapper>
    );
});

EntireRooms.propTypes = {};

export default EntireRooms;
