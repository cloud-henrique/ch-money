import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
  width: 100%;
`;

export const NewTransactionButton = styled.button`
  background: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  height: 50px;
  padding: 0 1.25rem;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme["green-700"]};
  }
`;
