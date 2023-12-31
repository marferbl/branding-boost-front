import React, { useState, useContext } from "react";
import { Text, Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { isEmpty } from "../../hooks/isEmpty";
import { login, signup } from "../../services/auth";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const [emptyFieldMessage, setEmptyFieldMessage] = useState(false);

  const { storeToken, authenticateUser } = useContext(UserContext);

  const resetFields = () => {
    setEmail("");
  };

  const handleSubmit = () => {
    if (isEmpty(email) || isEmpty(password)) {
      setEmptyFieldMessage(true);
    } else {
      login(email, password)
        .then((res) => {
          storeToken(res.data.token);
          setEmptyFieldMessage(false);
          authenticateUser();
          toast({
            title: "CUENTA CREADA.",
            description: "Sesión Iniciada",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setTimeout(() => navigate("/private/dashboard"), 1000);
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: "ERROR",
            description: err.response.data.message,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
      resetFields();
    }
  };
  return (
    <Box borderWidth={2} py={6} px={12} rounded={"xl"} bgColor={"white"}>
      <Text fontSize={22} textAlign={"center"} mb={8}>
        Login
      </Text>
      <FormControl isRequired my={5}>
        <FormLabel htmlFor="surnames">Correo electronico</FormLabel>
        <Input id="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      </FormControl>
      <FormControl isRequired my={5}>
        <FormLabel htmlFor="name">Password</FormLabel>
        <Input id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
      </FormControl>

      <Button
        mt={4}
        bgColor={"#0b5fff"}
        color={"white"}
        type="submit"
        width={"100%"}
        onClick={handleSubmit}
        disabled={isEmpty(email)}
      >
        Submit
      </Button>

      {emptyFieldMessage && (
        <Text my={2} color={"red"}>
          Rellena todos los campos
        </Text>
      )}
    </Box>
  );
};

export default LoginForm;
