import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: 4rem;
    height: 4rem;
    aspect-ratio: 1 / 1;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 2.2rem;
    margin: 0.5rem;
    border: 0.1rem solid #cdcdcd;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0.31rem 0.6rem rgba(0, 0, 0, 0.2),
        0 0.12rem 0.31rem rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.6;
    }

    &:active {
        transform: translateY(0.18rem);
        box-shadow: 0 0.18rem 0.37rem rgba(0, 0, 0, 0.2),
            0 0.062rem 0.18rem rgba(0, 0, 0, 0.1);
    }
`;
