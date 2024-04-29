"use client";
import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Flex,
  Heading,
  Stack,
  Center,
} from "@chakra-ui/react";

export default function SignUp({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleClick = () => setShow(!show);
  const handleClickConfirm = () => setShowConfirm(!showConfirm);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({});

    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);

    // If no errors, submit form
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(formData);
      setErrors({});
      onClose();
    }
  };

  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <Box rounded="md" m="auto" p="6" shadow="md" width="95%">
          <Center>
            <Heading as="h3" size="lg" mb="6" fontWeight="600">
              Sign Up
            </Heading>
          </Center>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <FormControl
                id="firstName"
                isInvalid={!!errors.firstName}
                isRequired
              >
                <FormLabel fontWeight="600" fontSize="lg">
                  First Name
                </FormLabel>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  size="lg"
                  fontSize="lg"
                />
                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                id="lastName"
                isInvalid={!!errors.lastName}
                isRequired
              >
                <FormLabel fontWeight="600" fontSize="lg">
                  Last Name
                </FormLabel>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  size="lg"
                  fontSize="lg"
                />
                <FormErrorMessage>{errors.lastName}</FormErrorMessage>
              </FormControl>
              <FormControl
                id="username"
                isInvalid={!!errors.username}
                isRequired
              >
                <FormLabel fontWeight="600" fontSize="lg">
                  Username
                </FormLabel>
                <Input
                  type="username"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  size="lg"
                  fontSize="lg"
                />
                <FormErrorMessage>{errors.username}</FormErrorMessage>
              </FormControl>
              {/* <FormControl id="email" isInvalid={!!errors.email} isRequired>
                <FormLabel fontWeight="600" fontSize="lg">
                  Email
                </FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  size="lg"
                  fontSize="lg"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl> */}
              <FormControl
                id="phoneNumber"
                isInvalid={!!errors.phoneNumber}
                isRequired
              >
                <FormLabel fontWeight="600" fontSize="lg">
                  Phone Number
                </FormLabel>
                <InputGroup>
                  <InputLeftAddon>+355</InputLeftAddon>
                  <Input
                    type="tel"
                    placeholder="phone number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </InputGroup>
                <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
              </FormControl>
              <FormControl
                id="password"
                isInvalid={!!errors.password}
                isRequired
              >
                <FormLabel fontWeight="600" fontSize="lg">
                  Password
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <FormControl
                id="confirmPassword"
                isInvalid={!!errors.confirmPassword}
              >
                <FormLabel fontWeight="600" fontSize="lg">
                  Confirm Password
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Enter password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClickConfirm}>
                      {showConfirm ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="yellow" size="md">
                Create Account
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>
    </>
  );
}
