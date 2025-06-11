import * as actionTypes from "./constants";

const initialState = {
    roomList: [],
    totalCount: 0,
    currentPage: 0,
};

// 接收消息，修改state中的数据
function reduce(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOTAL_COUNT:
            return { ...state, totalCount: action.totalCount };
        case actionTypes.CHANGE_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case actionTypes.GET_ROOM_LIST:
            return {...state, roomList: action.roomList };
        default:
            return state;
    }
}

export default reduce;
