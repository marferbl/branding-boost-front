import { ReactNode } from "react";

import {
  Box,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { COLORS } from "../../../colors";

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
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
          <Text fontSize={24} as={"span"} fontWeight={"bold"} color={"#D1B28C"}>Branding <Text as={"span"} color={COLORS.brand4}>boost </Text></Text>
             
            </Box>
            <Text fontSize={"sm"}>© 2023 Branding boost. All rights reserved</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
