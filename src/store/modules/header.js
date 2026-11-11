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
    extraReducers: {},
    middleware: {},
});

export const { changeConfigHeader } = headerSplice.actions;
export default headerSplice.reducer;
