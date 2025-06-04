import PropTypes from "prop-types";
import React, { memo } from "react";
import { HighScoreSectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

const HighScoreSection = memo((props) => {
    const { infoData } = props;

    return (
        <HighScoreSectionWrapper>
            <SectionHeader
                title={infoData.title}
                subTitle={infoData.subtitle ?? ""}
            />
            <SectionRooms roomList={infoData.list} />
            <SectionFooter />
        </HighScoreSectionWrapper>
    );
});

HighScoreSection.propTypes = {
    infoData: PropTypes.object,
};
export default HighScoreSection;
