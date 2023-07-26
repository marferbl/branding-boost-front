import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import {Box, Heading, Text} from "@chakra-ui/react"

export const Profile = () => {
  const { loggedUser } = useContext(UserContext);
  return <Box>
    <Heading>
      Perfil
    </Heading>
    <Text>Hola {loggedUser?.name}</Text>
  </Box>
};
