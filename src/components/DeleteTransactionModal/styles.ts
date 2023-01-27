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

  p {
    margin: 2rem 0 1rem 0;
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 2rem;
  }
`

export const CloseButton = styled(Dialog.Close)`
  color: ${({ theme }) => theme['gray-500']};
  line-height: 0;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
`

export const ConfirmButton = styled.button`
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  height: 48px;
  margin-top: 1.5rem;
  padding: 0 1.25rem;
  transition: all 0.2s;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-700']};
  }
`

export const CancelButton = styled(Dialog.Close)`
  background: transparent;
  border: ${({ theme }) => `1px solid ${theme['red-300']}`};
  color: ${({ theme }) => theme['red-300']};
  font-weight: bold;
  height: 48px;
  margin-top: 1.5rem;
  padding: 0 1.25rem;
  transition: all 0.2s;

  &:not(:disabled):hover {
    color: ${({ theme }) => theme['red-500']};
    border: ${({ theme }) => `1px solid ${theme['red-500']}`};
  }
`
