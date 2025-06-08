import styled from "styled-components";


export const SectionTabsWrapper = styled.div`
    margin-bottom: 16px;

    .tab-item {
        flex-shrink: 0;
        flex-basis: 120px;
        padding: 14px 16px;
        box-sizing: border-box;
        border: 1px solid #d8d8d8;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
        font-size: 16px;
        white-space: nowrap;
        transition: background-color 200ms ease;

        &.active,
        &:hover  {
            color: #fff;
            background-color: ${props => props.theme.color.secondaryColor};
            border-color: ${props => props.theme.color.secondaryColor};
        }

    }
`