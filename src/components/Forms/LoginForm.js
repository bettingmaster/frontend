"use client";
import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
  Flex,
  Heading,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const LoginForm = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // State to manage success message display
  const [isOpen, setIsOpen] = useState(false);

  // Router instance
  const router = useRouter();

  // Handler to update form input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log("Form submitted with data:", formData);
    // Reset form fields after submission
    setFormData({
      username: "",
      password: "",
    });
    // Show success message
    setIsOpen(true);
  };

  // Close success message
  const onClose = () => setIsOpen(false);

  // Redirect to home page
  const redirectToHome = () => {
    router.push("/profile");
  };

  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <Box p="6" rounded="md" width="95%" color="#fff">
          <Heading as="h3" size="lg" mb="6">
            Log in to Your Account
          </Heading>
          <form onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <FormControl isRequired id="username">
                <FormLabel htmlFor="username" fontSize="xl">
                  Username
                </FormLabel>
                <Input
                  id="username"
                  type="username"
                  name="username"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Username"
                  fontSize="lg"
                  size="lg"
                />
              </FormControl>
              <FormControl isRequired id="password">
                <FormLabel htmlFor="password" fontSize="xl">
                  Password
                </FormLabel>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  size="lg"
                  fontSize="lg"
                />
              </FormControl>
              <Button type="submit" colorScheme="yellow" size="lg">
                Log in
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>
      {/* Success message */}
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Log in Successful
            </AlertDialogHeader>

            <AlertDialogBody>
              You have been successfully logged in!
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="yellow" onClick={redirectToHome} ml={3}>
                Go to Your Profile
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default LoginForm;

// "use client";
// import React from "react";
// import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

// const LoginForm = () => {
//   return (
//     <form>
//       <FormControl>
//         <FormLabel>Email</FormLabel>
//         <Input type="email" />
//       </FormControl>
//       <FormControl>
//         <FormLabel>Password</FormLabel>
//         <Input type="password" />
//       </FormControl>
//       <Button type="submit">Login</Button>
//     </form>
//   );
// };

// export default LoginForm;
