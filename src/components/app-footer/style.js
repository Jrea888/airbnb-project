import styled from "styled-components";

export const AppFooterWrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: #f7f7f7;

    .footer-list {
        margin: 0 auto;
        padding: 48px 0;
        box-sizing: border-box;

        display: grid;
        column-gap: 16px;
        grid-template-columns: repeat(16, minmax(0, 1fr));
        ${props => props.theme.mixin.mediaWidth}

        .footer-column {
            grid-column: span 5;
            font-size: 14px;
            color: ${(props) => props.theme.text.secondaryColor};

            .title {
                font-weight: 500;
                font-family: ${(props) => props.theme.font.fontFamily};
                margin-bottom: 16px;
            }

            .list {
                display: grid;
                gap: 16px;

                .item {
                    .text {
                        cursor: pointer;
                        font-weight: 400;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }

    .footer-info {
        margin: 0 auto;
        padding: 24px 0;
        box-sizing: border-box;
        border-top: 1px solid ${(props) => props.theme.hover.color};
        ${props => props.theme.mixin.mediaWidth}

        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            color: ${(props) => props.theme.text.secondaryColor};

            .left {
                .dot {
                    margin: 0 8px;
                }
            }

            .right {
                display: flex;
                align-items: center;
                font-family: ${(props) => props.theme.font.fontFamily};

                .btn {
                    height: 20px;
                    line-height: 20px;
                    cursor: pointer;
                    padding: 6px 8px;
                    font-weight: 500;
                    transition: box-shadow 0.2s cubic-bezier(0.2,0,0,1), transform 0.1s cubic-bezier(0.2,0,0,1);

                    &:hover {
                        border-radius: 8px;
                        background-color: ${(props) => props.theme.hover.color};
                        transform: scaleX(calc((var(128.953125, 100) + 2) / var(128.953125, 100))) scaleY(calc((var(30, 102) + 2) / var(30, 100)));
                    }

                    &:first-child {
                        margin-right: 4px;
                    }

                    .scale {
                        transition: transform 0.1s cubic-bezier(0.2,0,0,1);
                        will-change: transform;

                        &:hover {
                            transform: scaleX(calc(1 / calc((var(128.953125, 100) + 2) / var(128.953125, 100)))) scaleY(calc(1 / calc((var(30, 102) + 2) / var(30, 100))));
                        }
                    }

                    .icon-text {
                        display: inline-flex;
                        gap: 8px;
                        align-items: center;

                        svg {
                            margin-top: 2px;
                        }
                    }
                }

                .icon-btns {
                    display: inline-flex;
                    gap: 24px;
                    margin-left: 4px;
                }

                .icon-btn {
                    position: relative;
                    display: inline-flex;
                    cursor: pointer;

                    svg {
                        position: relative;
                        z-index: 2;
                    }

                    &:first-child {
                        margin-left: 8px;
                    }

                    &:hover {
                        &::before {
                            position: absolute;
                            content: "";
                            z-index: 0;
                            left: 50%;
                            right: 50%;
                            width: 32px;
                            height: 32px;
                            border-radius: 50%;
                            transform: translate(-50%, -25%);
                            background-color: ${(props) =>
                                props.theme.hover.color};
                        }
                    }
                }
            }
        }

        .middle-line {
            margin-top: 8px;
            padding-top: 8px;
            border-top: 1px solid rgb(221, 221, 221);
        }

        .bottom {
            display: flex;
            align-items: center;
            font-size: 12px;
            margin-bottom: 8px;
            color: rgb(106, 106, 106);

            .span-link {
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }

            .dot {
                margin: 0 4px;
            }
        }
    }
`;
