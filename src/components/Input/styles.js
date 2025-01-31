import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 5rem;
    background-color: rgb(150, 150, 150);
    display: flex;
    align-items: start;
    justify-content: center;
    font-size: 1rem;
    font-family: "Roboto";
    border-radius: 10%;

    input {
        width: 100%;
        height: 65%;
        padding: 0.5rem;
        background-color: rgb(150, 150, 150);
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        border-radius: 10%;

        font-size: 4rem;
        font-family: "Roboto";
        color: rgb(0, 0, 0);
    }
`;
