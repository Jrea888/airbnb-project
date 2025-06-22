import React, { memo, useEffect } from "react";
import { EntirePageWrapper } from "./style";
import EntireTopFilter from "./component/entire-top-filter";
import EntireRooms from "./component/entire-rooms";
import EntirePagination from "./component/entire-pagination";
import { useDispatch } from "react-redux";
import { fetchEntireRoomListAction } from "@/store/modules/entire/actionsCreators";
import { changeConfigHeader } from "@/store/modules/header";

const EntirePage = memo(() => {
    // 发送网络请求数据
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEntireRoomListAction())
        dispatch(changeConfigHeader({ isFixed: true }))
    }, [dispatch])

    return (
        <EntirePageWrapper>
            <EntireTopFilter />
            <EntireRooms />
            <EntirePagination />
        </EntirePageWrapper>
    );
});

export default EntirePage;
