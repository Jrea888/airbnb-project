import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
    height: 96px;
    padding: 0 48px;
    background: linear-gradient(180deg, #ffffff 39.9%, #f8f8f8 100%);

    .header-content {
        display: flex;
        align-items: center;
        width: ${props => props.theme.width.width_1920};
        margin: 0 auto;
    }
`;
