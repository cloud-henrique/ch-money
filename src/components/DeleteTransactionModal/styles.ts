import styled from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.75);
  height: 100vh;
  inset: 0;
  position: fixed;
  width: 100vw;
`

export const Content = styled(Dialog.Content)`
  background: ${({ theme }) => theme['gray-800']};
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
      background: ${({ theme }) => theme['gray-900']};
      color: ${({ theme }) => theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme['gray-500']};
      }
    }

    button[type='submit'] {
      background: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      font-weight: bold;
      height: 58px;
      margin-top: 1.5rem;
      padding: 0 1.25rem;
      transition: all 0.2s;

      &:not(:disabled):hover {
        background: ${({ theme }) => theme['green-700']};
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  color: ${({ theme }) => theme['gray-500']};
  line-height: 0;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
`
