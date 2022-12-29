import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  margin: 4rem auto 0;
  max-width: 1120px;
  padding: 0 1.5rem;
  width: 100%;
`

export const TransactionsTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  width: 100%;

  td {
    background: ${props => props.theme['gray-700']};
    padding: 1.25rem 2rem;

    &:first-child {
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
    }

    &:last-child {
      border-bottom-right-radius: 6px;
      border-top-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  variant?: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ theme, variant }) => (variant === 'income' ? theme['green-300'] : theme['red-300'])};
`
