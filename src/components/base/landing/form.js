import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Center,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { COLORS } from "../../../colors";
import FormModal from "./formModal";

export default function FormDemo() {
  return (
    <Container
      bg="white"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      py={"3rem"}
    >
      <Flex>
        <Box
          bg={"#FAEEDD"}
          boxShadow={"lg"}
          color="white"
          borderRadius="lg"
          w={"100%"}
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 5, sm: 3, md: 5, lg: 10 }}>
              <WrapItem>
                <Box>
                  <Heading color={"gray.700"} fontFamily={'Montserrat'}>Contáctanos</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} fontFamily={"Montserrat"} color="gray.700">
                    Mándanos un mensaje con tu consulta
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Flex
                        height="48px"
                        width="300px"
                        color="gray.600"
                        align={"center"}
                        gap={2}
                      >
                        <MdPhone color="gray.600" size="20px" />
                        <Text> +34 677 78 55 19</Text>
                      </Flex>

                      <Flex
                        height="48px"
                        width="300px"
                        color="gray.600"
                        align={"center"}
                        gap={2}
                      >
                        <MdEmail color="gray.600" size="20px" />
                        <Text> contacto@brandingboost.com</Text>
                      </Flex>
                      <Flex
                        height="48px"
                        width="300px"
                        color="gray.600"
                        align={"center"}
                        gap={2}
                      >
                        <MdLocationOn color="gray.600" size="20px" />
                        <Text> Valencia, España</Text>
                      </Flex>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box display={{ base: "none", lg: "block" }} bg={{ base: "white" }} borderRadius="lg">
                  <Box m={6} color="#0B0E3F" fontFamily={"Montserrat"}>
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Nombre</FormLabel>
                        <InputGroup borderColor="#E0E1E7">

                          <Input type="text" size="md" placeholder="Nombre"
                            bgColor={"white"} />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Correo electrónico</FormLabel>
                        <InputGroup borderColor="#E0E1E7">

                          <Input type="text" size="md" placeholder="Correo electrónico"
                            bgColor={"white"} />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mensaje</FormLabel>
                        <Textarea
                          bgColor={"white"}
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="Mensaje"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg={COLORS.brand4}
                          color={COLORS.brand2}
                          _hover={{ bg: COLORS.brand3, color: COLORS.brand4 }}
                        >
                          Enviar
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
                <Center display={{ base: "block", lg: 'none' }}>
                  <FormModal />
                </Center>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
