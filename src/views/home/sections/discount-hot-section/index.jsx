import PropTypes from "prop-types";
import React, { memo } from "react";
import { DiscountHotSectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

const DiscountHotSection = memo((props) => {
    const { infoData } = props;

    return (
        <DiscountHotSectionWrapper>
            <SectionHeader
                title={infoData.title}
                subTitle={infoData.subtitle ?? ""}
            />
            <SectionRooms roomList={infoData.dest_list?.["佛山"]} column={3} />
            <SectionFooter title={"佛山"} />
        </DiscountHotSectionWrapper>
    );
});

DiscountHotSection.propTypes = {
    infoData: PropTypes.object,
};
export default DiscountHotSection;
