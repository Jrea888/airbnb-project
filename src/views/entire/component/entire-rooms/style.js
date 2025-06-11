import styled from "styled-components";

export const EntireRoomsWrapper = styled.div`
    margin-top: 30px;

    .title {
        font-size: 20px;
        font-weight: 700;
        color: ${props => props.theme.text.secondaryColor};
    }

    .room-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 16px;
        margin: 16px 0 30px 0;

        .entire-room-item {
            width: 19.32%;
            flex-shrink: 0;
        }
    }
`;
