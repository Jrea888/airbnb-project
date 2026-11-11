import PropTypes from "prop-types";
import React, { memo } from "react";
import { PlusInfoSectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionFooter from "@/components/section-footer";
import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
import { useRoomStaticDetailClick } from "@/hooks";

const PlusInfoSection = memo((props) => {
    const { infoData } = props;
    // 首页只做跳转，详情内容用静态数据
    const roomItemClickHandle = useRoomStaticDetailClick();

    return (
        <PlusInfoSectionWrapper>
            <SectionHeader
                title={infoData.title}
                subTitle={infoData.subtitle}
            />
            <div className="rooms-list">
                <ScrollView scrollWidth={100}>
                    {
                        infoData.list.map(item => {
                            return (
                                <div className="room-item" key={item.id}>
                                    <RoomItem itemData={item} itemClick={roomItemClickHandle} />
                                </div>
                            )
                        })
                    }
                </ScrollView>
            </div>
            <SectionFooter title="Plus" />
        </PlusInfoSectionWrapper>
    );
});

PlusInfoSection.propTypes = {
    infoData: PropTypes.object,
};

export default PlusInfoSection;
