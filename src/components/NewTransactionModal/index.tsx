import * as z from 'zod'
import * as Dialog from '@radix-ui/react-dialog'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import { TransactionsContext } from '../../contexts/TransactionsContext'

import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from './styles'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const createTransaction = useContextSelector(TransactionsContext, context => context.createTransaction)

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: { type: 'income' },
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data

    await createTransaction({ description, price, category, type })
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input required type="text" placeholder="Descrição" {...register('description')} />
          <input required type="number" placeholder="Preço" {...register('price', { valueAsNumber: true })} />
          <input required type="text" placeholder="Categoria" {...register('category')} />

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionType onValueChange={field.onChange} value={field.value}>
                <TransactionTypeButton variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
