import { ReactNode } from "react";

import {
  Box,
  Container,
  Image,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Link

} from "@chakra-ui/react";
import { COLORS } from "../../../colors";
import { FaInstagram } from 'react-icons/fa'

const Logo = (props) => {
  return <Image src={"/logobooniuz.png"} h={10} ml={-2} />;
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function FooterLanding() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Flex gap={2} align={"center"}>
              <FaInstagram />
              <Link href="https://www.instagram.com/brandingboost_dm" fontSize={"sm"}>brandingboost</Link>
            </Flex>
            <Text fontSize={'sm'}>contacto@brandingboost.es</Text>
          </Stack>
          <Stack spacing={6} />
          <Stack spacing={6} />
          <Stack spacing={6} />
          <Stack spacing={6}>
            <Box textAlign={"right"}>
              <Text fontSize={24} as={"span"} fontWeight={"bold"} color={"#D1B28C"}>Branding <Text as={"span"} color={COLORS.brand4}>boost </Text></Text>
            </Box>
            <Text textAlign={"right"} fontSize={"sm"}>© 2023 Branding boost. All rights reserved</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
