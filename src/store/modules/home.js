import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getHomeGoodPriceData, getHomeHotRecommendData, getHomeHighScoreData, getHomeDiscountHotData} from '@/services'

export const fetchHomeGoodPrice = createAsyncThunk('home/fetchGoodPrice', async (payload, { dispatch }) => {
    const result = await getHomeGoodPriceData()
    dispatch(changeGoodPriceInfoAction(result))
})

export const fetchHomeRecommend = createAsyncThunk('home/fetchRecommend', async (payload, { dispatch }) => {
    const result = await getHomeHotRecommendData()
    dispatch(changeRecommendInfoAction(result))
})

export const fetchHomeHighScore = createAsyncThunk('home/fetchHighScore', async (payload, { dispatch }) => {
    const result = await getHomeHighScoreData()
    dispatch(changeHighScoreInfoAction(result))
})

export const fetchHomeDiscountHot = createAsyncThunk('home/fetchDiscountHot', async (payload, { dispatch }) => {
    const result = await getHomeDiscountHotData()
    dispatch(changeDiscountHotInfoAction(result))
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},
        recommendInfo: {},
        highScoreInfo: {},
        discountHotInfo: {}
    },
    reducers: {
        changeGoodPriceInfoAction(state, {payload}) {
            state.goodPriceInfo = payload
        },
        changeRecommendInfoAction(state, {payload}) {
            state.recommendInfo = payload
        },
        changeHighScoreInfoAction(state, {payload}) {
            state.highScoreInfo = payload
        },
        changeDiscountHotInfoAction(state, {payload}) {
            state.discountHotInfo = payload
        }
    },
});

export const {changeGoodPriceInfoAction, changeRecommendInfoAction, changeHighScoreInfoAction, changeDiscountHotInfoAction} = homeSlice.actions;
export default homeSlice.reducer;