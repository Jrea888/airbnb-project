import PropTypes from "prop-types";
import React, { memo } from "react";
import { PlusInfoSectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionFooter from "@/components/section-footer";
import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";

const PlusInfoSection = memo((props) => {
    const { infoData } = props;

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
                                    <RoomItem itemData={item} />
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
