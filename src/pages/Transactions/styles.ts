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
  margin-bottom: 2rem;
  margin-top: 1.5rem;
  width: 100%;

  thead {
    background: ${props => props.theme['gray-900']};
    border-radius: 12px;

    tr {
      th {
        padding: 1.25rem 2rem;
        text-align: left;

        &:first-child {
          border-bottom-left-radius: 6px;
          border-top-left-radius: 6px;
        }
        &:last-child {
          border-bottom-right-radius: 6px;
          border-top-right-radius: 6px;
        }
      }
    }
  }

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

    button {
      padding: 0.5rem;
      transition: all 0.2s;

      &:hover {
        background: ${({ theme }) => theme['gray-600']};

        svg {
          stroke: ${({ theme }) => theme['red-300']};
        }
      }
    }
  }
`

interface PriceHighlightProps {
  variant?: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ theme, variant }) => (variant === 'income' ? theme['green-300'] : theme['red-300'])};
`
