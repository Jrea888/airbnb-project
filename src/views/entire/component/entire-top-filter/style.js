import styled from "styled-components";

export const EntireTopFilterWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 54px;
    margin-top: 96px;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;

    .filter {
        display: flex;
        gap: 12px;

        .item {
            cursor: pointer;
            color: #484848;
            padding: 6px 12px;
            border-radius: 4px;
            border: 1px solid #dce0e0;

            &.active {
                background-color: #f2f2f2;
                color: #008489;
                border: 1px solid #008489;
            }
        }
    }
`;
