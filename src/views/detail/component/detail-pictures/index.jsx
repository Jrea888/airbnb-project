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

    // detailInfo 可能是空对象（例如直接访问 /detail 且 store 没有数据），
    // 这里统一兜底，避免 verify_info / picture_urls 缺失时在渲染期抛错
    const pictureUrls = detailInfo?.picture_urls ?? []
    const headerMessages = detailInfo?.verify_info?.messages ?? []

    return (
        <DetailPictureWrapper color={detailInfo?.verify_info?.text_color || "#39576a"}>
            <div className="header-title">
                <h2>{detailInfo?.name}</h2>
                <span>{headerMessages.join(" · ")}</span>
            </div>

            <div className="header-picture">
                <div className="left">
                    <div className="item">
                        <img src={pictureUrls[0]} alt="" />
                        <div className="mask-cover"></div>
                    </div>
                </div>
                <div className="right">
                    {
                        pictureUrls.slice(1, 5).map(item => {
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
            {pictureUrls.length > 0 && (
                <div className="show-btn" onClick={e => setShowAllPictures(true)}>
                    <IconRectPoint />
                    <span>显示所有照片</span>
                </div>
            )}
            {
                showAllPictures && (
                    <PictureBrowser
                        pictureList={pictureUrls}
                        closeClick={e => setShowAllPictures(false)}
                    />
                )
            }
        </DetailPictureWrapper>
    );
});

export default DetailPictures;
