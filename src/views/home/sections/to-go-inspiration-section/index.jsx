import PropTypes from "prop-types";
import React, { memo } from "react";
import { ToGoInspirationWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import InspirationItem from "./inspiration-item";
import ScrollView from "@/base-ui/scroll-view";

const ToGoInspiration = memo((props) => {
    const { infoData } = props;

    return (
        <ToGoInspirationWrapper>
            <SectionHeader
                title={infoData.title}
                subTitle={infoData.subtitle}
            />

            <div className="inspiration-list">
                <ScrollView scrollWidth={100}>
                    {infoData.list.map((item, index) => {
                        return <InspirationItem key={index} itemData={item} />;
                    })}
                </ScrollView>
            </div>
        </ToGoInspirationWrapper>
    );
});

ToGoInspiration.propTypes = {
    infoData: PropTypes.object,
};

export default ToGoInspiration;
