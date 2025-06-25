import styled from "styled-components";


export const SearchTabWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    .tab-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        font-size: 18px;
        color: ${props => props.theme.text.secondaryColor};
        border-bottom: 2px solid transparent;

        &:hover,
        &.active {
            color: ${props => props.theme.color.primaryColor};
            border-bottom: 2px solid ${props => props.theme.color.primaryColor};
        }
    }
`
