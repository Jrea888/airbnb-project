import React, { memo } from "react";
import Pagination from '@mui/material/Pagination'
import { EntirePaginationWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {fetchEntireRoomListAction} from '@/store/modules/entire/actionsCreators'
import { PAGE_SIZE } from "@/constants";

const EntirePagination = memo((props) => {
    const { totalCount, currentPage } = useSelector((state) => {
        return {
            totalCount: state.entire.totalCount,
            currentPage: state.entire.currentPage,
        }
    }, shallowEqual)

    // 每页条数统一取常量，避免和请求里的 offset 计算脱钩
    const totalPage = Math.ceil(totalCount / PAGE_SIZE) // 总页数
    const startCount = currentPage * PAGE_SIZE + 1 // 起始条数
    const endCount = Math.min((currentPage + 1) * PAGE_SIZE, totalCount) // 结束条数（最后一页不超出总数）

    const dispatch = useDispatch()
    function pageChangeHandle(event, pageCount) {
        // 每次翻页滚动到顶部
        window.scrollTo(0, 0)
        // 发送请求，获取数据
        dispatch(fetchEntireRoomListAction(pageCount - 1))
    }

    return (
        <EntirePaginationWrapper>
            {
                totalCount > PAGE_SIZE && (
                    <div className="bottom-info">
                        <Pagination count={totalPage} onChange={pageChangeHandle} />
                        <div className="desc">
                            <span>第 {startCount} - {endCount} 个房源，共 {totalCount} 条</span>
                        </div>
                    </div>
                )
            }
        </EntirePaginationWrapper>
    );
});

export default EntirePagination;
