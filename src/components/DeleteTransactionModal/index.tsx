import { X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import { CloseButton, Content, Overlay } from './styles'

export function DeleteTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Dialog.Title>Excluir transação</Dialog.Title>
      <CloseButton>
        <X size={24} />
      </CloseButton>

      <Content>
        <p>Deseja realmente excluir essa transação?</p>
      </Content>
    </Dialog.Portal>
  )
}
