import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green' | 'red'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    align-items: center;
    color: ${({ theme }) => theme['gray-300']};
    display: flex;
    justify-content: space-between;
  }

  strong {
    display: block;
    font-size: 2rem;
    margin-top: 1rem;
  }

  ${({ theme, variant }) =>
    variant &&
    css`
      background: ${variant === 'green' ? theme['green-700'] : theme['red-700']};
    `}
`
