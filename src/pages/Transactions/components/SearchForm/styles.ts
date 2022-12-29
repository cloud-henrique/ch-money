import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    background: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme["gray-300"]};
    flex: 1;
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }
  }

  button {
    align-items: center;
    border: 1px solid ${({ theme }) => theme["green-300"]};
    color: ${({ theme }) => theme["green-300"]};
    display: flex;
    font-weight: bold;
    gap: 0.75rem;
    padding: 1rem;
    transition: all 0.2s;

    &:not(:disabled):hover {
      background: ${({ theme }) => theme["green-500"]};
      border-color: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme.white};
    }
  }
`;
