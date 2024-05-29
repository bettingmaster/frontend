"use client";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  //   const { searchTerm, searchedGames } = useData;

  return (
    <div>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon boxSize={5} marginTop={2} />
        </InputLeftElement>
        <Input
          borderColor="gray.500"
          type="text"
          variant="outline"
          placeholder="Search..."
          _placeholder={{ color: "inherit" }}
          focusBorderColor="green.400"
          size="lg"
          //   value={searchTerm}
          //   onChange={searchedGames}
        />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
