import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon_more_arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
    const { title } = props

    let titleText = '显示全部'
    if (title) {
        titleText = `显示更多${title}房源`
    }

    const navigate = useNavigate()
    const moreDetailPage = () => {
        navigate('/entire')
    }

    return (
        <SectionFooterWrapper color={title ? '#008489' : '#484848'}>
            <div className="info" onClick={e => moreDetailPage()}>
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