import styled from "styled-components";

export const HeaderCenterWrapper = styled.div`
    flex: 1;

    .areas {
        display: grid;
        gap: 2px;
        grid-template-columns: minmax(0, 2fr) 1px minmax(0, 1fr) 1px minmax(0, 1fr) 1px minmax(0, 2fr);
        width: 850px;
        height: 66px;
        align-items: center;
        text-align: center;
        border-radius: 32px;
        border: 1px solid #ddd;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 2px,
            rgba(0, 0, 0, 0.05) 0px 4px 12px;
        ${(props) => props.theme.mixin.boxShadow};
    }

    .area-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
        cursor: pointer;
        padding-left: 32px;

        &:hover {
            border-radius: 32px;
            background-color: #ebebeb;
        }

        .label {
            font-weight: 500;
            color: ${(props) => props.theme.text.secondaryColor};
            font-size: ${(props) => props.theme.size.fontSize_12};
        }

        .tip {
            margin-top: 4px;
            color: ${(props) => props.theme.text.tertiaryColor};
            font-size: ${(props) => props.theme.size.fontSize_14};
        }

        .search {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            .people {
                display: flex;
                align-items: flex-start;
                flex-direction: column;
            }

            .icon-search {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 80px;
                height: 48px;
                border-radius: 24px;
                background-color: ${(props) => props.theme.color.primaryColor};
                color: #fff;
                margin-right: 10px;

                .text {
                    margin-left: 6px;
                    font-size: ${(props) => props.theme.size.fontSize_16};
                }
            }
        }
    }

    .line {
        height: 32px;
        background-color: #ddd;
        transition: z-index 0s 0.3s; /* 延迟恢复避免闪烁 */
    }
`;
