import styled from "styled-components";

export const PlusInfoSectionWrapper = styled.div`
    margin-top: 30px;

    .rooms-list {
        display: flex;

        .room-item {
            width: 400px;
        }

        .scroll-content {
            display: grid;
            gap: 16px;
            align-items: flex-start;
            grid-auto-flow: column; /* 强制单行排列 */
        }
    }
`;
