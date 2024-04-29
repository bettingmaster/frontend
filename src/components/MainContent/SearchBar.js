"use client";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="white" />
      </InputLeftElement>
      <Input
        size="lg"
        focusBorderColor="#126E51"
        variant="filled"
        type="text"
        placeholder="Search..."
        _placeholder={{ color: "inherit" }}
        value={searchTerm}
        onChange={handleChange}
      />
    </InputGroup>
  );
};

export default SearchBar;
