"use client";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useData } from "@/context/DataContext";

const SearchBar = () => {
  const { searchTerm, searchedGames } = useData;

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="white" />
      </InputLeftElement>
      <Input
        size="lg"
        focusBorderColor="#126E51"
        backgroundColor="#404040"
        _hover={{ color: "inherit" }}
        variant="filled"
        type="text"
        placeholder="Search..."
        _placeholder={{ color: "inherit" }}
        value={searchTerm}
        onChange={searchedGames}
      />
    </InputGroup>
  );
};

export default SearchBar;
