import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 100%;
    height: auto;

    > .home-content {
        height: auto;
        margin: 0 auto;
        margin-top: 30px;
        ${props => props.theme.mixin.mediaWidth}
    }
`
