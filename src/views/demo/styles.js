import styled from "styled-components";

export const DemoWrapper = styled.div`
.content {
    display: flex;
    flex-direction: column;

    .carousel-list {
       width: 340px;

       .item {
            padding: 6px 12px;
            margin: 12px 6px;
            box-sizing: border-box;
            background-color: #ccc;
            border-radius: 4px;

            &:first-child {
                margin-left: 0;
            }
        }
    }
}
`