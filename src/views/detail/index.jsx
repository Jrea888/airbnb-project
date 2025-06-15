import React, { memo } from "react";
import { DetailWrapper } from "./style";
import DetailPictures from "./component/detail-pictures";

const DetailPage = memo(() => {
    return (
        <DetailWrapper>
            <DetailPictures></DetailPictures>
        </DetailWrapper>
    );
});

export default DetailPage;
