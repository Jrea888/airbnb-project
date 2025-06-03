import styled from "styled-components";

export const CategoryInfoWrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: #f7f7f7;

    .info-content {
        width: ${(props) => props.theme.width.width_1920};
        margin: 0 auto;
        padding: 48px 0;
        box-sizing: border-box;

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
