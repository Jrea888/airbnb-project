import { createSlice } from "@reduxjs/toolkit";

const headerSplice = createSlice({
    name: 'header',
    initialState: {
        config: {
            isFixed: false
        }
    },
    reducers: {
        changeConfigHeader(state, { payload }) {
            console.log(payload, '-----payload')
            state.config = payload
        }
    }
})

export const { changeConfigHeader } = headerSplice.actions
export default headerSplice.reducer
