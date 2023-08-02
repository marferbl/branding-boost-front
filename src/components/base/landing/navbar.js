import { useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { COLORS } from "../../../colors";
import { Link, useLocation } from "react-router-dom";

const Links = [""];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();



  return (
    <>
      <Box bg={useColorModeValue(COLORS.brand1, "gray.900")} px={4} fontFamily={'Montserrat'} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/">
            <Text fontSize={24} ml={2} fontWeight={"bold"} color={"#D1B28C"}>Branding <Text as={"span"} color={COLORS.brand4}>boost </Text></Text>
          </Link>

          <Flex h={16} alignItems={"center"}>
            {location?.pathname === '/' && <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              bg={"transparent"}
              color={COLORS.brand4}
            />}
            {location?.pathname === '/' && <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                <Link to="/pricing">Pricing</Link>
              </HStack>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                <Link to="/blog">Blog</Link>
              </HStack>
            </HStack>}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} pt={4}>
            <Stack as={"nav"} spacing={4} textAlign={"right"}>
              <Link to="/pricing">Pricing</Link>
            </Stack>
          </Box>
          
        ) : null}
         {isOpen ? (
          <Box pb={4} display={{ md: "none" }} pt={4}>
            <Stack as={"nav"} spacing={4} textAlign={"right"}>
              <Link to="/blog">Blog</Link>
            </Stack>
          </Box>
          
        ) : null}
      </Box>
    </>
  );
}
