import styled from "styled-components";

export const IndicatorWrapper = styled.div`
    overflow: hidden;

    .indicator-content {
        display: flex;
        align-items: center;
        transition: transform 0.2s ease;

        > * {
           flex-shrink: 0;
        }
    }
`;
