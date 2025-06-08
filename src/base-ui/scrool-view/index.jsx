import React, { memo, useState, useEffect, useRef } from 'react'
import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'

const ScrollView = memo((props) => {
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(false)
    const [currentItemIndex, setCurrentItemIndex] = useState(0)
    const scrollContentRef = useRef(null)
    const totalScrollDistance = useRef(0)

    useEffect(() => {
         // 滚动区域宽度
        const scrollWidth = scrollContentRef.current.scrollWidth
         // 可视区域宽度
        const clientWidth = scrollContentRef.current.clientWidth
         // 总滚动距离
        const totalDistance = scrollWidth - clientWidth
        totalScrollDistance.current = totalDistance

        // 设置左右侧箭头显示
        const isShowRightArrow = totalScrollDistance.current > 0
        setShowRightArrow(isShowRightArrow)
        return () => {
            console.log('scroll-view unmount')
        }
    }, [props.children])

    function arrowClickHandle(isRight) {
        // 设置当前选中项
        const index = isRight ? currentItemIndex + 1 : currentItemIndex - 1
        setCurrentItemIndex(index)

        // 设置当前滚动位置
        const currentItemOffsetLeft = scrollContentRef.current.children[index].offsetLeft
        scrollContentRef.current.style.transform = `translate(-${currentItemOffsetLeft}px)`

        // 设置左右侧箭头显示
        const isShowRightArrow = totalScrollDistance.current > currentItemOffsetLeft
        setShowRightArrow(isShowRightArrow)
        setShowLeftArrow(currentItemOffsetLeft > 0)
    }

    return (
        <ScrollViewWrapper>
            {
                showLeftArrow && (
                    <div className="control left-arrow" onClick={e => arrowClickHandle(false)}>
                        <IconArrowLeft />
                    </div>
                )
            }
            {
                showRightArrow && (
                    <div className="control right-arrow" onClick={e => arrowClickHandle(true)}>
                        <IconArrowRight />
                    </div>
                )
            }

            <div className="scroll">
                <div className="scroll-content" ref={scrollContentRef}>
                    {
                        props.children
                    }
                </div>
            </div>
      </ScrollViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView