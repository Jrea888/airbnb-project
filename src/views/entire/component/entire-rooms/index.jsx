import React, { memo, useCallback } from "react";
import { EntireRoomsWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";
import { useNavigate } from "react-router-dom";
import { changeDetailInfoAction } from "@/store/modules/detail";

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

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const roomItemClickHandle = useCallback((itemData) => {
        dispatch(changeDetailInfoAction(itemData))
        navigate('/detail')
    }, [navigate, dispatch])

    return (
        <EntireRoomsWrapper>
            <div className="title">{totalCount}多处住处</div>
            <div className="room-list">
                {
                    roomList.map(v => {
                        return (
                            <div className="entire-room-item"  key={v._id}>
                                <RoomItem itemData={v} itemClick={roomItemClickHandle} />
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
