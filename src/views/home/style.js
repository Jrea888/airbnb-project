import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 100%;
    height: auto;

    .home-content {
        width: ${props => props.theme.width.width_1920};
        height: 800px;
        margin: 0 auto;
    }
`
