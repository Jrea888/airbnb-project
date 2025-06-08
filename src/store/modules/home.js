import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getHomeGoodPriceData,
    getHomeHotRecommendData,
    getHomeHighScoreData,
    getHomeDiscountHotData,
    getToGoInspirationData,
    getHomePlusInfoData
} from '@/services'

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

export const fetchHomeToGoInspiration = createAsyncThunk('home/fetchToGoInspiration', async (payload, { dispatch }) => {
    const result = await getToGoInspirationData()
    dispatch(changeToGoInspirationInfoAction(result))
})

export const fetchHomePlusInfo = createAsyncThunk('home/fetchPlusInfo', async (payload, { dispatch }) => {
    const result = await getHomePlusInfoData()
    dispatch(changePlusInfoAction(result))
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},
        recommendInfo: {},
        highScoreInfo: {},
        discountHotInfo: {},
        toGoInspirationInfo: {},
        plusInfo: {}
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
        },
        changeToGoInspirationInfoAction(state, {payload}) {
            state.toGoInspirationInfo = payload
        },
        changePlusInfoAction(state, {payload}) {
            state.plusInfo = payload
        }
    },
});

export const {
    changeGoodPriceInfoAction,
    changeRecommendInfoAction,
    changeHighScoreInfoAction,
    changeDiscountHotInfoAction,
    changeToGoInspirationInfoAction,
    changePlusInfoAction
} = homeSlice.actions;
export default homeSlice.reducer;