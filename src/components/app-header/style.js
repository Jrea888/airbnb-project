import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
    }

    display: flex;
    align-items: center;
    height: 96px;
    padding: 0 48px;
    background: linear-gradient(180deg, #ffffff 39.9%, #f8f8f8 100%);

    .header-content {
        display: flex;
        align-items: center;
        margin: 0 auto;
        ${props => props.theme.mixin.mediaWidth}
    }
`;
