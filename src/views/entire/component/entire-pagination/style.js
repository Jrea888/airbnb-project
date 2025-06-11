import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12px 0;

    .bottom-info {
        display: flex;
        flex-direction: column;
        align-items: center;

        .MuiPaginationItem-icon {
            font-size: 24px;
        }

        .MuiPaginationItem-page {
            margin: 0 9px;

            &:hover {
                text-decoration: underline;
            }
        }


        .Mui-selected {
            color: #fff;
            background-color: ${props => props.theme.text.primaryColor};
        }

        .desc {
            margin: 16px 0 32px;
            font-size: 14px;
            color: ${props => props.theme.text.secondaryColor};
        }
    }
`;
