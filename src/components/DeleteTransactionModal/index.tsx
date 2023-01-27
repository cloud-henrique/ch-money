import { X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { useContextSelector } from 'use-context-selector'

import { TransactionsContext } from '../../contexts/TransactionsContext'
import { ConfirmButton, CancelButton, CloseButton, Content, Overlay } from './styles'

interface DeleteTransactionModalProps {
  transactionId: number
}

export function DeleteTransactionModal({ transactionId }: DeleteTransactionModalProps) {
  const deleteTransaction = useContextSelector(TransactionsContext, context => context.deleteTransaction)

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Excluir transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <p>Deseja realmente excluir essa transação?</p>

        <span>
          <CancelButton>Não</CancelButton>
          <ConfirmButton onClick={() => deleteTransaction(String(transactionId))}>Sim</ConfirmButton>
        </span>
      </Content>
    </Dialog.Portal>
  )
}
