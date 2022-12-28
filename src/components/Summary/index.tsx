import { useContext } from "react";

import { useTheme } from "styled-components";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { priceFormatter } from "../../utils/formatter";
import { TransactionsContext } from "../../contexts/TransactionsContext";

import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  const theme = useTheme();
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, current) => {
      if (current.type === "income") {
        acc.income += current.price;
        acc.total += current.price;
      }
      if (current.type === "outcome") {
        acc.outcome += current.price;
        acc.total -= current.price;
      }

      return acc;
    },
    { income: 0, outcome: 0, total: 0 }
  );

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp color={theme["green-300"]} size={32} />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown color={theme["red-300"]} size={32} />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar color={theme.white} size={32} />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
