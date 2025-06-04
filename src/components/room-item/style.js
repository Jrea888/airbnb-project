import styled from "styled-components";

export const RoomItemWrapper = styled.div`
    width: 100%;

    .cover {
        position: relative;
        padding: 66.66% 0 0 0;
        box-sizing: border-box;
        border-radius: 4px;
        overflow: hidden;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .desc {
        font-weight: 700;
        font-size: 12px;
        margin: 12px 0 6px;
        color: ${props => props.verifyColor};
    }

    .name {
        min-height: 48px;
        line-height: 24px;
        font-size: 16px;
        font-weight: 700;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .price {
        margin: 12px 0;
    }

    .bottom {
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
        color: #484848;

        .counter {
            margin: 0 4px;
        }

        .extra {}
    }
`;
