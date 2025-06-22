import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99;
    display: flex;
    flex-direction: column;
    background-color: #333;

    .top {
        position: relative;
        height: 86px;

        .close-btn {
            position: absolute;
            right: 24px;
            top: 16px;
            cursor: pointer;
        }
    }

    .slider {
        position: relative;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        .control {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 24px;
            right: 24px;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .base {
                cursor: pointer;
                color: #fff;
            }

            .left-btn {}

            .right-btn {}
        }

        .picture {
            position: relative;
            width: 100%;
            height: 100%;
            max-width: 105vh;
            overflow: hidden;

            img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                height: 100%;
                margin: 0 auto;
                user-select: none;
            }

            .image-enter {
                transform: translateX(${props => props.isNext ? '100%' : '-100%'});
                opacity: 0;
            }

            .image-enter-active {
                transform: translateX(0);
                opacity: 1;
                transition: all 200ms ease;
            }
        }
    }

    .preview {
        height: 120px;
        margin-top: 10px;
        display: flex;
        justify-content: center;

        .info {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            .desc {
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #fff;
                font-size: 12px;
                margin-bottom: 8px;

                .right {
                    display: flex;
                    gap: 6px;
                    align-items: center;
                    cursor: pointer;
                }
            }

            .list {
                display: flex;
                max-width: 105vh;
                height: ${props => props.showList ? '80px' : '0px'};
                transition: height 0.3s ease;

                .item {
                    margin-right: 16px;
                    cursor: pointer;

                    img {
                        height: 80px;
                        opacity: 0.6;
                    }

                    &.active {
                        img {
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
`;

