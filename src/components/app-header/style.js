import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
    }

    .header-content {
        position: relative;
        z-index: 9;
        background: linear-gradient(180deg, #ffffff 39.9%, #f8f8f8 100%);

        .top {
            display: flex;
            align-items: center;
            height: 96px;
            margin: 0 auto;
            padding: 0 48px;
            box-sizing: border-box;
            ${props => props.theme.mixin.mediaWidth}
        }
    }

    .mask-cover {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.4)
    }
`;

export const SearchAreaWrapper = styled.div`
    transition: height 250ms ease;
    height: ${props => props.isSearch ? '128px' : '0'};
`
