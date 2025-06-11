import React, { memo } from "react";
import Pagination from '@mui/material/Pagination'
import { EntirePaginationWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {fetchEntireRoomListAction} from '@/store/modules/entire/actionsCreators'

const EntirePagination = memo((props) => {
    const { totalCount, currentPage } = useSelector((state) => {
        return {
            totalCount: state.entire.totalCount,
            currentPage: state.entire.currentPage,
        }
    }, shallowEqual)

    // 计算总页数
    const totalPage = Math.ceil(totalCount / 20) // 总页数
    const startCount = currentPage * 20 + 1 // 起始条数
    const endCount = (currentPage + 1) * 20 // 结束条数

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
                totalCount > 20 && (
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

EntirePagination.propTypes = {};

export default EntirePagination;
