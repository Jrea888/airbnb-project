import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionHeaderWrapper } from "./style";

const SectionHeader = memo((props) => {
    const { title, subTitle } = props;

    return (
        <SectionHeaderWrapper>
            <div className="title">{title}</div>
            {!!subTitle && <div className="sub-title">{subTitle}</div>}
        </SectionHeaderWrapper>
    );
});

SectionHeader.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
};
export default SectionHeader;
