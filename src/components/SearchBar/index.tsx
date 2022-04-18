import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "../../images/search-icon.svg";
import { Wrapper, Content } from "./SearchBar.styles";

type Props = {
  setSearchTerm: (searchTerm: string) => void;
};

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
  const callSetSearchTerm = useRef(false);
  const [state, setState] = useState("");

  const delaySetSearchTerm = () => {
    if (!callSetSearchTerm.current) {
      callSetSearchTerm.current = true;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  };
  useEffect(delaySetSearchTerm, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={SearchIcon} alt="search_icon" />
        <input
          type="text"
          placeholder="Search Movie"
          value={state}
          onChange={(evt) => setState(evt.currentTarget.value)}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
