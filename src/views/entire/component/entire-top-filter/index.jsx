import React, { memo, useState } from "react";
import classNames from 'classnames'
import { EntireTopFilterWrapper } from "./style";

import filterData from '@/assets/data/filter_data.json'

const EntireTopFilter = memo((props) => {
    const [selectList, setSelectList] = useState([]);

    const filterItemHandle = (item) => {
        const newItemList = [...selectList]

        if (newItemList.includes(item)) {
            // 移除
            const itemIndex = newItemList.findIndex(v => v === item)
            newItemList.splice(itemIndex, 1)
        } else {
            // 添加
            newItemList.push(item)
        }
        console.log(newItemList, '----newItemList')
        setSelectList(newItemList)
    }

    return (
        <EntireTopFilterWrapper>
            <div className="filter">
                {
                    filterData.map(item => {
                        return (
                            <div className={classNames('item', {active: selectList.includes(item)})} onClick={() => filterItemHandle(item)} key={item}>{item}</div>
                        )
                    })
                }
            </div>
        </EntireTopFilterWrapper>
    );
});

EntireTopFilter.propTypes = {};

export default EntireTopFilter;
