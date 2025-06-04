import PropTypes from "prop-types";
import React, { memo } from "react";
import { RecommendSectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

const RecommendSection = memo((props) => {
    const { infoData } = props;
    return (
        <RecommendSectionWrapper>
            <SectionHeader
                title={infoData.title}
                subTitle={infoData.subtitle ?? ""}
            />
            <SectionRooms
                roomList={infoData.dest_list?.["南海千灯湖公园"]}
                column={3}
            />
            <SectionFooter title="南海千灯湖公园" />
        </RecommendSectionWrapper>
    );
});

RecommendSection.propTypes = {
    infoData: PropTypes.object,
};
export default RecommendSection;
