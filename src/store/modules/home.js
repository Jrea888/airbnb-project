import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        message: "hello world",
    },
    reducers: {},
});

export const {} = homeSlice.actions;
export default homeSlice.reducer;
