import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import { DiscountHotSectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";
import SectionTabs from "@/components/section-tabs";

const DiscountHotSection = memo((props) => {
    const { infoData } = props;

    const initialName = Object.keys(infoData.dest_list)[0]
    const [name, setName] = useState(initialName)
    const tabNames = infoData.dest_address.map(v => v.name)

    const tabClickHandle = useCallback((name) => {
        setName(name)
    }, [])

    return (
        <DiscountHotSectionWrapper>
            <SectionHeader
                title={infoData.title}
                subTitle={infoData.subtitle ?? ""}
            />
            <SectionTabs tabNames={tabNames} tabItemClick={tabClickHandle} />
            <SectionRooms roomList={infoData.dest_list?.[name]} column={3} />
            <SectionFooter title={name} />
        </DiscountHotSectionWrapper>
    );
});

DiscountHotSection.propTypes = {
    infoData: PropTypes.object,
};
export default DiscountHotSection;
