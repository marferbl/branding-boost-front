import React, { useState } from "react";
import {
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import CaptchaComponent from "../base/captcha-component";
import { useToast } from "@chakra-ui/react";
import { isEmpty } from "../../hooks/isEmpty";
import { login, signup } from "../../services/auth";

const RegisterForm = () => {
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const [captcha, setCaptcha] = useState(null);
  const [emptyFieldMessage, setEmptyFieldMessage] = useState(false);

  const resetFields = () => {
    setEmail("");
  };

  const handleSubmit = () => {
    if (isEmpty(email) || isEmpty(password)) {
      setEmptyFieldMessage(true);
    } else {
      signup(email, password)
        .then((res) => {
          setEmptyFieldMessage(false);
          toast({
            title: "CUENTA CREADA.",
            description: "Cuenta creada correctamente",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        })
        .catch((err) => {
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
        Registro
      </Text>
      {/* <FormControl isRequired my={5}>
        <FormLabel htmlFor="name">Username</FormLabel>
        <Input id="username" placeholder="Nombre" onChange={(e) => setUsername(e.target.value)} value={username} />
      </FormControl> */}

      <FormControl isRequired my={5}>
        <FormLabel htmlFor="name">Password</FormLabel>
        <Input
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </FormControl>

      <FormControl isRequired my={5}>
        <FormLabel htmlFor="surnames">Correo electronico</FormLabel>
        <Input
          id="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormControl>

      <Button
        mt={4}
        bgColor={"#0b5fff"}
        color={"white"}
        type="submit"
        width={"100%"}
        disabled={isEmpty(email)}
        onClick={handleSubmit}
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

export default RegisterForm;
