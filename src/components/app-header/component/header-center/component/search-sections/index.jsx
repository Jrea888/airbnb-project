import PropTypes from "prop-types";
import React, { memo } from "react";
import IconSearch from "@/assets/svg/icon_search";
import { SearchSectionsWSrapper } from "./style";

const SearchSections = memo((props) => {
    const { searchInfos = [], currentIndex } = props

    console.log(searchInfos, currentIndex)

    return (
        <SearchSectionsWSrapper>
            <div className="areas">
                {
                    searchInfos.map((item, index) => {
                        // 原来用 <>...</> 直接包两个兄弟节点，缺 key 会触发 React 警告；
                        // 改为带 key 的 React.Fragment
                        return (
                            <React.Fragment key={index}>
                                <div className="area-item">
                                    <span className="label">{item.title}</span>
                                    <span className="tip">{item.desc}</span>
                                </div>
                                <div className="line"></div>
                            </React.Fragment>
                        )
                    })
                }
                <div className="area-item">
                    <div className="search">
                        <div className="people">
                            <span className="label">人员</span>
                            <span className="tip">添加人数</span>
                        </div>
                        <div className="icon-search">
                            <IconSearch />
                            <span className="text">搜索</span>
                        </div>
                    </div>
                </div>
            </div>
        </SearchSectionsWSrapper>
    );
});

SearchSections.propTypes = {
    searchInfos: PropTypes.array,
    currentIndex: PropTypes.number
};

export default SearchSections;
