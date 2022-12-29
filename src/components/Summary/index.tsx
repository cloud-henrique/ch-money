import { useTheme } from 'styled-components'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'

import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const theme = useTheme()
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp color={theme['green-300']} size={32} />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown color={theme['red-300']} size={32} />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant={summary.total >= 0 ? 'green' : 'red'}>
        <header>
          <span>Total</span>
          <CurrencyDollar color={theme.white} size={32} />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
