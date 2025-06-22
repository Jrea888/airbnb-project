import styled from "styled-components";

export const DetailPictureWrapper = styled.div`
    position: relative;

    .header-title {
        margin: 16px 0;
        display: flex;
        flex-direction: column;
        gap: 8px;

        span {
            font-size: 14px;
            font-weight: 700;
            color: ${props => props.color};
        }
    }

    .header-picture {
        display: flex;
        gap: 8px;
        background-color: #fff;
        border-radius: 12px;
        overflow: hidden;
        height: 800px;

        &:hover {
            .mask-cover {
                opacity: 1 !important;
            }

            .item:hover {
                .mask-cover {
                    opacity: 0 !important;
                }
            }
        }

        .right {
            display: grid;
            gap: 8px;
            grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
        }

        .left, .right {
            flex: 1;

            .item {
                position: relative;
                cursor: pointer;
                height: 100%;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    transition:  transform 200ms ease;
                }

                .mask-cover {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 1;
                    background-color: rgba(0,0,0,.2);
                    opacity: 0;
                    transition: opacity 200ms ease;
                }

                &:hover {
                    img {
                        transform: scale(1.1);
                    }
                }
            }
        }
    }

    .show-btn {
        position: absolute;
        bottom: 54px;
        right: 24px;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap:8px;
        background-color: #fff;
        border-radius: 6px;
        padding: 8px 16px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        color: ${props => props.theme.text.secondaryColor};
    }
`;
