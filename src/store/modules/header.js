import { createSlice } from "@reduxjs/toolkit";

const headerSplice = createSlice({
    name: "header",
    initialState: {
        config: {
            isFixed: false,
            topAlpha: false,
        },
    },
    reducers: {
        changeConfigHeader(state, { payload }) {
            state.config = payload;
        },
    },
    // 如需监听其他 slice 的 action（跨 slice 响应），必须使用 builder 回调写法，不能再用对象写法：
    // extraReducers: (builder) => {
    //     builder.addCase(fetchSomething.fulfilled, (state, { payload }) => {
    //         state.xxx = payload;
    //     });
    // },
});

export const { changeConfigHeader } = headerSplice.actions;
export default headerSplice.reducer;
