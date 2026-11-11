import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
    changeDetailInfoAction,
    resetDetailInfoAction,
} from "@/store/modules/detail";

/**
 * 点击房源卡片 → 把当前房源写进 detail slice，再跳转到 /detail
 *
 * 适用于列表项本身就是"完整房源对象"的场景（/entire 列表）。
 */
export function useRoomItemClick() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return useCallback(
        (itemData) => {
            if (!itemData) return;
            dispatch(changeDetailInfoAction(itemData));
            navigate("/detail");
        },
        [dispatch, navigate]
    );
}

/**
 * 点击房源卡片 → 跳转到 /detail，但详情内容使用内置的静态数据
 *
 * 首页各 section 的数据只有列表字段（picture_url 封面、没有图集和详情描述），
 * 直接用会渲染出空白详情页，所以这里先把 detail 复位成静态示例数据再跳转。
 */
export function useRoomStaticDetailClick() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return useCallback(() => {
        dispatch(resetDetailInfoAction());
        navigate("/detail");
    }, [dispatch, navigate]);
}

export default useRoomItemClick;
