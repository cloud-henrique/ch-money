import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.75);
  height: 100vh;
  inset: 0;
  position: fixed;
  width: 100vw;
`;

export const Content = styled(Dialog.Content)`
  background: ${({ theme }) => theme["gray-800"]};
  border-radius: 6px;
  left: 50%;
  min-width: 32rem;
  padding: 2.5rem 3rem;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    input {
      background: ${({ theme }) => theme["gray-900"]};
      color: ${({ theme }) => theme["gray-300"]};
      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme["gray-500"]};
      }
    }

    button[type="submit"] {
      background: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme.white};
      font-weight: bold;
      height: 58px;
      margin-top: 1.5rem;
      padding: 0 1.25rem;
      transition: all 0.2s;

      &:not(:disabled):hover {
        background: ${({ theme }) => theme["green-700"]};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  color: ${({ theme }) => theme["gray-500"]};
  line-height: 0;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  align-items: center;
  background: ${({ theme }) => theme["gray-700"]};
  color: ${({ theme }) => theme["gray-300"]};
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding: 1rem;
  transition: all 0.2s;

  svg {
    color: ${({ theme, variant }) => variant === "income" ? theme["green-300"] : theme["red-300"]};
  }

  &[data-state="unchecked"]:hover {
    background: ${({ theme }) => theme["gray-600"]};
  }

  &[data-state="checked"] {
    color: ${({ theme }) => theme.white};
    background: ${({ theme, variant }) => variant === "income" ? theme["green-500"] : theme["red-500"]};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`;
