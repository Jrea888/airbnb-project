import styled from "styled-components";

export const HeaderRightWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .btns {
        display: flex;
        align-items: center;

        .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            cursor: pointer;
            border-radius: 20px;
            background-color: #F2F2F2;
            transition: transform 0.2s ease;

            &:first-child {
                margin-right: 12px;
            }

            &:hover {
                transform: scale(calc(42 / 40));
            }
        }
    }
`;