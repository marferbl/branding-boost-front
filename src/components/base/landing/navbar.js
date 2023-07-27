import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Image,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { COLORS } from "../../../colors";

const Links = [""];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#Testimonials"}
  >
    {children}
  </Link>
);
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue(COLORS.brand1, "gray.900")} px={4} fontFamily={'Montserrat'} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={24} as={"span"} ml={2} fontWeight={"bold"} color={"#D1B28C"}>Branding <Text as={"span"} color={COLORS.brand4}>boost </Text></Text>
          {/* <Flex h={16} alignItems={"center"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                   <a href="#features">{link}</a>
                ))}
              </HStack>
            </HStack>
          </Flex> */}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                // <NavLink key={link}>{link}</NavLink>
                <a href="#Contact">Hero</a>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
