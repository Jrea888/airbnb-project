import PropTypes from "prop-types";
import React, { memo } from "react";
import { HighScoreSectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";
import { useRoomStaticDetailClick } from "@/hooks";

const HighScoreSection = memo((props) => {
    const { infoData } = props;
    // 首页只做跳转，详情内容用静态数据
    const roomItemClickHandle = useRoomStaticDetailClick();

    return (
        <HighScoreSectionWrapper>
            <SectionHeader
                title={infoData.title}
                subTitle={infoData.subtitle ?? ""}
            />
            <SectionRooms roomList={infoData.list} itemClick={roomItemClickHandle} />
            <SectionFooter />
        </HighScoreSectionWrapper>
    );
});

HighScoreSection.propTypes = {
    infoData: PropTypes.object,
};
export default HighScoreSection;
