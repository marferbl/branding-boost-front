import React, { useState } from "react";
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
    InputLeftElement,
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
import { send } from "emailjs-com";
import { useToast } from "@chakra-ui/react";
import { COLORS } from "../../../colors";

export const FormContactSmall = ({ close }) => {

    const [fromName, setFromName] = useState("");
    const [toName, setToName] = useState("");
    const [message, setMessage] = useState("");
    const [replyTo, setReplyTo] = useState("");
    const toast = useToast();

    const onSubmit = (e) => {
        const toSend = {
            from_name: fromName,
            to_name: "contacto@brandingboost.com",
            message: message,
            reply_to: replyTo,
        };
        send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            toSend,
            process.env.REACT_APP_USER_ID
        )
            .then((response) => {
                close();
                toast({
                    title: "OK",
                    description: "Has enviado el correo electrónico",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                });
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });
    };

    return (
        <Box bg="white" borderRadius="lg">
            <Text ml={7} mt={5} fontSize={{base: 18, md: 24}}>
                Envíanos un correo:
            </Text>
            <Box m={8} color="#0B0E3F">
                <VStack spacing={5}>
                    <FormControl id="name">
                        <FormLabel fontSize={{base: 14, md: 16}}>Nombre</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                                pointerEvents="none"
                                children={<BsPerson color="gray.800" />}
                            />
                            <Input
                                type="text"
                                size="md"
                                onChange={(e) => setFromName(e.target.value)}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                        <FormLabel fontSize={{base: 14, md: 16}}>Correo electrónico</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                                pointerEvents="none"
                                children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input
                                type="text"
                                size="md"
                                onChange={(e) => setReplyTo(e.target.value)}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                        <FormLabel fontSize={{base: 14, md: 16}}>Mensaje</FormLabel>
                        <Textarea
                            borderColor="gray.300"
                            _hover={{
                                borderRadius: "gray.300",
                            }}
                            placeholder="Mensaje"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="name" float="right">
                        <Button
                            variant="solid"
                            bg={COLORS.brand2}
                            color={COLORS.brand4}
                            _hover={{ bg: COLORS.brand3 }}
                            onClick={onSubmit}
                        >
                            Enviar
                        </Button>
                    </FormControl>
                </VStack>
            </Box>
        </Box>
    );
};
