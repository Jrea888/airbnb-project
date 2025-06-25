import PropTypes from "prop-types";
import React, { memo } from "react";
import IconSearch from "@/assets/svg/icon_search";
import { SearchSectionsWSrapper } from "./style";

const SearchSections = memo((props) => {
    const { searchInfos, currentIndex } = props

    console.log(searchInfos, currentIndex)

    return (
        <SearchSectionsWSrapper>
            <div className="areas">
                {
                    searchInfos.map((item, index) => {
                        return (
                            <>
                                <div className="area-item">
                                    <span className="label">{item.title}</span>
                                    <span className="tip">{item.desc}</span>
                                </div>
                                <div className="line"></div>
                            </>
                        )
                    })
                }
                {
                    (
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
                    )
                }
            </div>
        </SearchSectionsWSrapper>
    );
});

SearchSections.propTypes = {
    searchInfos: PropTypes.array,
    currentIndex: PropTypes.number
};

export default SearchSections;
