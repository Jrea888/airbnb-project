import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classnames from 'classnames'
import { SectionTabsWrapper } from './style'
import ScrollView from '@/base-ui/scrool-view'

const SectionTabs = memo((props) => {
    const { tabNames = [], tabItemClick } = props
    const [currentIndex, setCurrentIndex] = useState(0)

    function tabItemClickHandle(name, index) {
        setCurrentIndex(index)
        tabItemClick && tabItemClick(name, index)
    }

    return (
        <SectionTabsWrapper>
            <ScrollView>
                {
                    tabNames.map((tabName, index) => (
                        <div
                            key={index}
                            className={classnames('tab-item', {active: currentIndex === index})}
                            onClick={e => tabItemClickHandle(tabName, index)}
                        >
                            {tabName}
                        </div>
                    ))
                }
            </ScrollView>
      </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
    tabNames: PropTypes.array
}

export default SectionTabs