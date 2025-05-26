import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${({theme}) => theme.colors["gray-100"]};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
`;

export const CountdownContainer = styled.div`
    font-family: "Roboto Mono", monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${({theme}) => theme.colors["gray-100"]};
    display: flex;
    gap: 1rem;

    span {
        background: ${({theme}) => theme.colors["gray-700"]};
        padding: 2rem 1rem;
        border-radius: 8px;
    }
`;

export const CountdownSeparator = styled.div`
    padding: 2rem 0;
    color: ${({theme}) => theme.colors["green-500"]};
    width: 4rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StartButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
    font-weight: bold;
    background: ${({theme}) => theme.colors["green-500"]};
    color: ${({theme}) => theme.colors["gray-100"]};
    cursor: pointer;

    &:not(:disabled):hover {
        background-color: ${({theme}) => theme.colors["green-700"]};
        transition: background-color 0.2s;
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`;


const inputBase = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${({theme}) => theme.colors["gray-500"]};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${({theme}) => theme.colors["gray-100"]};

    &::placeholder {
        color: ${({theme}) => theme.colors["gray-500"]}
    }

    &:focus {
        box-shadow: none;
        border-color: ${({theme}) => theme.colors["green-500"]}
    }
`;


export const TaskInput = styled(inputBase)`
    flex: 1;
    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`;

export const MinutesInput =  styled(inputBase)`
    width: 4rem;
`;