import {
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputGroup,
} from "@chakra-ui/react";

function UpdatePassword() {
  return (
    <Grid gap={6}>
      <FormControl id="companyId">
        <FormLabel>Current Password</FormLabel>
        <InputGroup>
          <Input
            focusBorderColor="brand.blue"
            type="password"
            placeholder="Password"
          />
        </InputGroup>
      </FormControl>
      <FormControl id="companyName">
        <FormLabel>New Password</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="password"
          placeholder="Password"
        />
      </FormControl>
      <FormControl id="emailCompany">
        <FormLabel>Confirm Password</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="password"
          placeholder="Password"
        />
      </FormControl>
    </Grid>
  );
}

export default UpdatePassword;
