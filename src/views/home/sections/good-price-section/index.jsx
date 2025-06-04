import PropTypes from "prop-types";
import React, { memo } from "react";
import { GoodPriceSectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

const GoodPriceSection = memo((props) => {
    const { infoData } = props;
    return (
        <GoodPriceSectionWrapper>
            <SectionHeader
                title={infoData.title}
                subTitle={infoData.subtitle ?? ""}
            />
            <SectionRooms roomList={infoData.list} />
            <SectionFooter />
        </GoodPriceSectionWrapper>
    );
});

GoodPriceSection.propTypes = {
    infoData: PropTypes.object,
};
export default GoodPriceSection;
