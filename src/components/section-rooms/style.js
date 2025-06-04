import styled from "styled-components";

export const SectionRoomsWrapper = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(${props => props.column}, minmax(200px, 1fr));
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;
