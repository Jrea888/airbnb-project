import React, { memo } from "react";

import footerData from '@/assets/data/footer.json'
import { CategoryInfoWrapper } from "./style";

const CategoryInfo = memo(() => {
    return (
        <CategoryInfoWrapper className="category-info">
            <div className="info-content">
                <div className="title">{footerData.title}</div>
                <div className="content">
                    <div className="top">
                        <span>{footerData.category.name}</span>
                    </div>
                    <div className="bottom-list">
                        {footerData.category.list.map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    <span>{item}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </CategoryInfoWrapper>
    );
});

export default CategoryInfo;
