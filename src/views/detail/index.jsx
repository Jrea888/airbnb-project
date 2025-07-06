import React, { memo, useEffect } from "react";
import { DetailWrapper } from "./style";
import DetailPictures from "./component/detail-pictures";
import { useDispatch } from "react-redux";
import { changeConfigHeader } from "@/store/modules/header";

const DetailPage = memo(() => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeConfigHeader({ isFixed: false, topAlpha: false }));
    }, [dispatch]);

    return (
        <DetailWrapper>
            <DetailPictures></DetailPictures>
        </DetailWrapper>
    );
});

export default DetailPage;
