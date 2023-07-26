
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Center,
    Text,
    Divider,
    Box,
    ColorModeScript,
} from "@chakra-ui/react";
import FormDemo from "./form";
import { FormContactSmall } from "./form-small";
import { COLORS } from "../../../colors"

export default function FormModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();



    return (
        <>
            <Button
                onClick={onOpen}
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                bg={COLORS.brand2}
                color={COLORS.brand4}
                _hover={{ bg: COLORS.brand3 }}
                fontFamily={"Montserrat"}
            >
                Contáctanos
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box>
                            <FormContactSmall close={onClose} />
                        </Box>
                    </ModalBody>

                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
