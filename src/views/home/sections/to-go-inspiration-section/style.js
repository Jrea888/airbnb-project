import styled from "styled-components";

export const ToGoInspirationWrapper = styled.div`
    margin-top: 30px;

    .inspiration-list {
        display: flex;

        /*
        display: grid;
        grid-auto-flow: column;  关键属性：项按列方向排列（即不换行）
        grid-template-rows: auto; 单行高度自适应
        white-space: nowrap;  兼容旧浏览器
        grid-auto-columns: max-content;  每一项宽度自适应 项宽度由内容决定，不压缩
        gap: 16px;
        overflow: hidden;
       */
    }
`;
