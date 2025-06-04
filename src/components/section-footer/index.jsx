import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon_more_arrow'

const SectionFooter = memo((props) => {
    const { title } = props

    let titleText = '显示全部'

    if (title) {
        titleText = `显示更多${title}房源`
    }

    return (
        <SectionFooterWrapper color={title ? '#008489' : '#484848'}>
            <div className="info">
                <span className='text'>{titleText}</span>
                <IconMoreArrow />
            </div>
      </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
    title: PropTypes.string
}
export default SectionFooter