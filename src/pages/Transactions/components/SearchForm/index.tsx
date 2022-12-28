import { useTheme } from "styled-components";
import { MagnifyingGlass } from "phosphor-react";

import { SearchFormContainer } from "./styles";

export function SearchForm() {
  const theme = useTheme();

  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações" name="search-input" id="search-input" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
