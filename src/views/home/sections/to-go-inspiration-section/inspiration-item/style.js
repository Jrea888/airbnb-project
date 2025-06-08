import styled from "styled-components";

export const InspirationItemWrapper = styled.div`
    flex-shrink: 0;

    .item-info {
        position: relative;
        border-radius: 4px;
        overflow: hidden;

        .cover {
            width: 100%;
        }

        .bg-cover {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 60%;
            background-image: linear-gradient(
                -180deg,
                rgba(0, 0, 0, 0) 3%,
                rgb(0, 0, 0) 100%
            );
        }
    }

    .info {
        position: absolute;
        left: 8px;
        right: 8px;
        bottom: 0;
        z-index: 9;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        box-sizing: border-box;
        padding: 0 16px 66px;

        .city {
            font-size: 18px;
            font-weight: 600;
        }

        .price {
            font-size: 14px;
            margin-top: 6px;
        }
    }
`;
