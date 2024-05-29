import { Box, Button } from "@chakra-ui/react";

export default function WithdrawButton() {
  return (
    <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
      <Button mb={2}>Make a deposit</Button>
      <Button>Withdraw funds</Button>
    </Box>
  );
}
