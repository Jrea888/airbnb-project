import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getHomeGoodPriceData} from '@/services'

export const fetchHomeGoodPrice = createAsyncThunk('home/fetchGoodPrice', async (payload, { dispatch }) => {
    const result = await getHomeGoodPriceData()
    dispatch(changeGoodPriceInfoAction(result))
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        message: "hello world",
        goodPriceInfo: {}
    },
    reducers: {
        changeGoodPriceInfoAction(state, {payload}) {
            state.goodPriceInfo = payload
        }
    },
});

export const {changeGoodPriceInfoAction} = homeSlice.actions;
export default homeSlice.reducer;