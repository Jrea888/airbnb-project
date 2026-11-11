import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import { RecommendSectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";
import SectionTabs from "@/components/section-tabs";
import { useRoomStaticDetailClick } from "@/hooks";

const RecommendSection = memo((props) => {
    const { infoData } = props;
    // 首页只做跳转，详情内容用静态数据
    const roomItemClickHandle = useRoomStaticDetailClick();

    const initialName = Object.keys(infoData.dest_list)[0]
    const [name, setName] = useState(initialName)
    const tabNames = infoData.dest_address.map(v => v.name)

    const  tabClickHandle = useCallback((name) => {
        setName(name)
    }, [])

    return (
        <RecommendSectionWrapper>
            <SectionHeader
                title={infoData.title}
                subTitle={infoData.subtitle ?? ""}
            />
            <SectionTabs tabNames={tabNames} tabItemClick={tabClickHandle} />
            <SectionRooms
                roomList={infoData.dest_list?.[name]}
                column={3}
                itemClick={roomItemClickHandle}
            />
            <SectionFooter title={name} />
        </RecommendSectionWrapper>
    );
});

RecommendSection.propTypes = {
    infoData: PropTypes.object,
};
export default RecommendSection;
