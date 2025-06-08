import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
    position: relative;
    width: 480px;

    .scroll {
        overflow: hidden;

        .scroll-content {
            display: flex;
            align-items: center;
            gap: 16px;
            transition: transform 200ms ease;
        }
    }

    .control {
        position: absolute;
        top: 50%;
        z-index: 9;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        cursor: pointer;
        border-radius: 50%;
        border: 1px solid #d8d8d8;
        background-color: #fff;
        box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);

        &.left-arrow {
            left: 0;
            transform: translate(-50%, -50%);
        }

        &.right-arrow {
            right: 0;
            transform: translate(50%, -50%);
        }
    }
`