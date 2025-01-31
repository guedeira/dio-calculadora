import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(255, 255, 255);

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: rgb(150, 150, 150);
    width: 23rem;
    height: 35rem;
    padding: 0.2rem;
    display: flex-col;
    align-items: center;
    justify-content: center;
    border-radius: 5%;
`;

export const Div = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    gap: 0.5rem;
    align-items: start;
    color: rgba(0, 0, 0, 0.6);
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Column = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
