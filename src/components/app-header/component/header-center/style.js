import styled from "styled-components";

export const HeaderCenterWrapper = styled.div`
    position: relative;
    flex: 1;
    height: 46px;

    .search-areas {
        width: 345px;
        height: 46px;
        margin: 0 auto;
        border-radius: 40px;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 2px,
            rgba(0, 0, 0, 0.05) 0px 4px 12px;

        .little-search {
            display: inline-flex;
            border: 1px solid #ddd;
            height: 100%;
            cursor: pointer;
            border-radius: 40px;
            ${(props) => props.theme.mixin.boxShadow}

            .search-content {
                display: inline-grid;
                align-items: center;
                grid-template-columns: minmax(0, min-content) min-content minmax(
                        0,
                        min-content
                    ) min-content minmax(0, min-content);
                width: 306px;

                .line {
                    width: 1px;
                    height: 24px;
                    background-color: #ddd;
                }

                .btn {
                    width: 90px;
                    height: 48px;
                    line-height: 48px;
                    font-size: 14px;
                    font-weight: 500;
                    text-align: center;
                    white-space: nowrap;
                    font-family: ${(props) => props.theme.font.fontFamily};

                    &:first-child {
                        width: 130px;
                    }
                }

                .local {
                    display: flex;
                    align-items: center;

                    img {
                        width: 48px;
                        height: 48px;
                        margin-inline-start: 8px;
                    }
                }
            }

            .icon-search {
                width: 39px;
                color: #fff;
                padding: 7px 7px 7px 0;
                box-sizing: border-box;

                .image-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    border-radius: 24px;
                    background-color: ${(props) =>
                        props.theme.color.primaryColor};
                }
            }
        }

        .btn {
            width: 90px;
            height: 48px;
            line-height: 48px;
            font-size: 14px;
            font-weight: 500;
            text-align: center;
            white-space: nowrap;
            font-family: ${(props) => props.theme.font.fontFamily};
        }
    }

    .search-detail {
        position: relative;
        transform-origin: 50% 0;
        will-change: transform, opacity;
        display: flex;
        flex-direction: column;
    }

    /* 动画 */
    .fade-detail-exit {
        transform: scale(1.0) translateY(0);
        opacity: 1;
    }

    .fade-detail-exit-active {
        transition: all 250ms ease;
        transform: scale(0.35, 0.727273) translateY(-58px);
        opacity: 0;
    }

    .fade-detail-enter {
        transform: scale(0.35, 0.727273) translateY(-58px);
        opacity: 0;
    }

    .fade-detail-enter-active {
        transition: all 250ms ease;
        transform: scale(1.0) translateY(0);
        opacity: 1;
    }

    .fade-areas-enter {
        transform: scale(2.85714, 1.375) translateY(58px);
        opacity: 0;
    }

    .fade-areas-enter-active {
        transition: all 250ms ease;
        transform: scale(1.0) translateY(0);
        opacity: 1;
    }

    .fade-areas-exit {
        opacity: 0;
        display: none;
    }
`;
