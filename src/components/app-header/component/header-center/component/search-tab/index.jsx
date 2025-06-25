import PropTypes from "prop-types";
import React, { memo } from "react";
import classNames from 'classnames'
import { SearchTabWrapper } from "./style";
import { useState } from "react";

const SearchTabs = memo((props) => {
    const {titles, tabClick} = props;
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <SearchTabWrapper>
            {
                titles.map((title, index) => {
                    return (
                        <div
                            key={index}
                            className={classNames('tab-item', { active: currentIndex === index })}
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
};

export default SearchTabs;
