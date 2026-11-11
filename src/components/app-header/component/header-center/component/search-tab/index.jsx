import PropTypes from "prop-types";
import React, { memo } from "react";
import classNames from 'classnames'
import { SearchTabWrapper } from "./style";
import { useState } from "react";

const SearchTabs = memo((props) => {
    const {titles = [], tabClick} = props;
    const [currentIndex, setCurrentIndex] = useState(0);

    // 切换标签：原实现没有给标签项绑定点击事件，tabClick / setCurrentIndex 都没人调用，
    // 导致点击「房源 / 体验 / 服务」无反应，面板永远停在第一个标签
    function tabItemClickHandle(index) {
        if (index === currentIndex) {
            return;
        }
        setCurrentIndex(index);
        tabClick && tabClick(index);
    }

    return (
        <SearchTabWrapper>
            {
                titles.map((title, index) => {
                    return (
                        <div
                            key={index}
                            className={classNames('tab-item', { active: currentIndex === index })}
                            onClick={() => tabItemClickHandle(index)}
                        >
                            {title}
                        </div>
                    )
                })
            }
        </SearchTabWrapper>
    )
});

SearchTabs.propTypes = {
    titles: PropTypes.array,
    tabClick: PropTypes.func,
};

export default SearchTabs;
