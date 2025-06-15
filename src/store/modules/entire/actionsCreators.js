import * as actionTypes from "./constants";
import { getEntireRoomList } from "@/services";

export const changeCurrentPageAction = (currentPage) => ({
    currentPage,
    type: actionTypes.CHANGE_CURRENT_PAGE,
});

export const changeTotalCountAction = (totalCount) => ({
    totalCount,
    type: actionTypes.CHANGE_TOTAL_COUNT,
});

export const changeRoomListAction = (roomList) => ({
    roomList,
    type: actionTypes.GET_ROOM_LIST,
});

export const changeLoadingAction = (isLoading) => ({
    isLoading,
    type: actionTypes.CHANGE_LOADING,
})

export const fetchEntireRoomListAction = (currentPage = 0) => {
    return async (dispatch) => {
        // 设置当前页码
        dispatch(changeCurrentPageAction(currentPage));

        // 获取房间列表
        dispatch(changeLoadingAction(true));
        const result = await getEntireRoomList(currentPage * 20);
        dispatch(changeLoadingAction(false));

        // 设置房间列表
        dispatch(changeRoomListAction(result.list));
        // 设置总条数
        dispatch(changeTotalCountAction(result.totalCount));
    };
};
