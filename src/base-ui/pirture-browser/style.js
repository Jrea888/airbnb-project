import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99;
    display: flex;
    flex-direction: column;
    background-color: #333;

    .top {
        position: relative;
        height: 86px;

        .close-btn {
            position: absolute;
            right: 24px;
            top: 16px;
            cursor: pointer;
        }
    }
`;

