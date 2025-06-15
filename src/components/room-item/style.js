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
        color: ${props => props.color};
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

    .slider {
        position: relative;
        cursor: pointer;

        .control {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: none;
            z-index: 1;
            color: #fff;

            .icon-btns {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 84px;
                height: 100%;
            }

            .left {
                background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25)) 100%;
            }

            .right {
                background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25)) 100%;
            }

        }

        &:hover .control {
            display: flex;
            justify-content: space-between;
        }

        .indicator {
            position: absolute;
            bottom: 10px;
            left: 0;
            right: 0;
            margin: 0 auto;
            z-index: 2;
            width: 37%;
            padding: 0 4px;
            box-sizing: border-box;

            .dot {
                width: 8px;
                height: 8px;
                margin: 0 6px;
                border-radius: 50%;
                background-color: #fff;
                transition: width 0.3s ease, height 0.3s ease;

                &.active {
                    width: 10px;
                    height: 10px;
                }

                &:first-child {
                    margin-left: 0;
                }
            }
        }
    }
`;
