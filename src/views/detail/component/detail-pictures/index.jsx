import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { DetailPictureWrapper } from "./style";
import IconRectPoint from "@/assets/svg/icon_rect_point";
import PictureBrowser from "@/base-ui/pirture-browser";

const DetailPictures = memo((props) => {
    const [showAllPictures, setShowAllPictures] = useState(false)
    const { detailInfo } = useSelector((state) => {
        return {
            detailInfo: state.detail.detailInfo,
        };
    }, shallowEqual);

    return (
        <DetailPictureWrapper color={detailInfo?.verify_info?.text_color || "#39576a"}>
            <div className="header-title">
                <h2>{detailInfo.name}</h2>
                <span>{detailInfo?.verify_info?.messages.join(" · ")}</span>
            </div>

            <div className="header-picture">
                <div className="left">
                    <div className="item">
                        <img src={detailInfo?.picture_urls?.[0]} alt="" />
                        <div className="mask-cover"></div>
                    </div>
                </div>
                <div className="right">
                    {
                        detailInfo?.picture_urls?.slice(1, 5).map(item => {
                            return (
                                <div className="item" key={item}>
                                    <img src={item} alt="" />
                                    <div className="mask-cover"></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* 照片墙 */}
            <div className="show-btn" onClick={e => setShowAllPictures(true)}>
                <IconRectPoint />
                <span>显示所有照片</span>
            </div>
            {
                showAllPictures && (
                    <PictureBrowser
                        pictureList={detailInfo?.picture_urls}
                        closeClick={e => setShowAllPictures(false)}
                    />
                )
            }
        </DetailPictureWrapper>
    );
});

DetailPictures.propTypes = {};

export default DetailPictures;
