import { Box, Text, VStack } from "@chakra-ui/react";

const list = [
  {
    id: 1,
    name: "Total Balance",
    value: "$ 3215",
    color: "green",
  },
  {
    id: 2,
    name: "Total Bet Amount",
    value: "$ 264",
    color: "yellow",
  },
  {
    id: 3,
    name: "Total Bet",
    value: 5,
    color: "cadet",
  },
];

function TotalContent() {
  return (
    <VStack as="ul" spacing={0} listStyleType="none">
      {list.map((item) => (
        <Box
          key={item.id}
          as="li"
          w="full"
          py={3}
          px={5}
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth={1}
          borderColor="brand.light"
        >
          <Text color="brand.dark">{item.name}</Text>
          <Text color={`brand.${item.color}`} fontWeight="bold">
            {item.value}
          </Text>
        </Box>
      ))}
    </VStack>
  );
}

export default TotalContent;
