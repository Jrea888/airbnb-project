import styled from "styled-components";

export const CategoryInfoWrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: #f7f7f7;

    .info-content {
        margin: 0 auto;
        padding: 48px 0;
        box-sizing: border-box;
        ${props => props.theme.mixin.mediaWidth}

        /* @media screen and (min-width: 1080px) and (max-width: 1300px) {
            width: ${(props) => props.theme.width.width_1060};
        }

        @media screen and (min-width: 1200px) and (max-width: 1300px) {
            width: ${(props) => props.theme.width.width_1150};
        }

        @media screen and (min-width: 1300px) and (max-width: 1400px) {
            width: ${(props) => props.theme.width.width_1200};
        }

        @media screen and (min-width: 1400px) and (max-width: 1500px) {
            width: ${(props) => props.theme.width.width_1300};
        }

        @media screen and (min-width: 1500px) and (max-width: 1600px) {
            width: ${(props) => props.theme.width.width_1400};
        }

        @media screen and (min-width: 1600px) and (max-width: 1800px) {
            width: ${(props) => props.theme.width.width_1500};
        }

        @media screen and (min-width: 1800px) and (max-width: 2000px) {
            width: ${(props) => props.theme.width.width_1780};
        }

        @media screen and (min-width: 2000px) and (max-width: 2200px) {
            width: ${(props) => props.theme.width.width_1880};
        } */

        .title {
            font-size: 22px;
            font-weight: 500;
            color: rgb(34, 34, 34);
        }

        .content {
            .top {
                position: relative;
                height: 50px;
                line-height: 50px;
                border-bottom: 1px solid #e1e1e1;

                &::after {
                    position: absolute;
                    content: "";
                    left: 0;
                    bottom: 0;
                    width: 28px;
                    height: 2px;
                    background-color: ${(props) =>
                        props.theme.text.secondaryColor};
                }
            }

            .bottom-list {
                display: grid;
                row-gap: 24px;
                column-gap: 8px;
                grid-template-columns: repeat(6, minmax(0, 1fr));
                font-size: 14px;
                font-weight: 500;
                padding-top: 32px;
                color: ${(props) => props.theme.text.secondaryColor};

                .item {
                    cursor: pointer;
                    font-family: ${(props) => props.theme.font.fontFamily};
                }
            }
        }
    }
`;
