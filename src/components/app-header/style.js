import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
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
