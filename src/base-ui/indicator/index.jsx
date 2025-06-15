import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indictor = memo((props) => {
    const { selectIndex } = props
    const contentRef = useRef()

    useEffect(() => {
        const selectedItemElement = contentRef.current.children[selectIndex]
        // 1.获取数据距离
        const selectedItemOffsetLeft = selectedItemElement.offsetLeft
        const selectedItemClientWidth = selectedItemElement.clientWidth
        console.log(selectedItemOffsetLeft, selectedItemClientWidth)
        // 2.获取容器距离
        const contentWidth = contentRef.current.clientWidth
        const contentScrollWidth = contentRef.current.scrollWidth

        const selectedDistance = selectedItemOffsetLeft + selectedItemClientWidth * 0.5
        const contentHalfWidth = contentWidth * 0.5
        // 3.计算出当前selectIndex需要滚动的距离
        let distance = selectedDistance - contentHalfWidth

        // 4.特殊条件判断
        if (distance < 0) {
            // 左边的特殊处理
            distance = 0
        }
        const totalDistance = contentScrollWidth - contentWidth
        if (distance > totalDistance) {
            // 右边的特殊处理
            distance = totalDistance
        }

        // 5.滚动到指定位置：往左边移动是负数，往右边移动是正数
        contentRef.current.style.transform = `translate(${-distance}px)`
    }, [selectIndex])

    return (
        <IndicatorWrapper>
            <div className='indicator-content' ref={contentRef}>
                {
                    props.children
                }
            </div>
      </IndicatorWrapper>
  )
})

Indictor.propTypes = {
    selectIndex: PropTypes.number
}

export default Indictor