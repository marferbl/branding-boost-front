
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
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react";
import { COLORS } from "../../../colors"
import { FaCheckCircle } from 'react-icons/fa'


export default function PricingModal({ label }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const IconCheck = () => {
        return <ListIcon as={FaCheckCircle} color={'#6ec2f7'} />
    }

    const result = () => {
        const types = {
            'basic': basic(),
            'standard': standard(),
            'premium': premium(),
        }
        return types[label]
    }

    const premium = () => {
        return <List spacing={3} textAlign="start" px={{ base: 5, lg: 12 }} py={6} fontFamily={"Montserrat"}>
            <ListItem>
                {IconCheck()}
                Marketing en Redes Sociales:
                <Text ml={6} fontSize={11}>
                    Gestión de una plataforma de redes sociales.
                </Text>
                <Text ml={6} fontSize={11}>
                    7 publicaciones semanales con creación de contenido
                </Text>
                <Text ml={6} fontSize={11}>
                    Gestión avanzada de interacción y comunidad
                </Text>
            </ListItem>
            <ListItem>
                {IconCheck()}
                SEO:
                <Text ml={6} fontSize={11}>
                    Investigación de palabras clave para hasta 20 palabras clave objetivo
                </Text>
                <Text ml={6} fontSize={11}>
                    Optimización en la página, creación de contenido y publicaciones en blogs mensuales
                </Text>
                <Text ml={6} fontSize={11}>
                    Informes semanales de rendimiento
                </Text>
            </ListItem>
            <ListItem>
                {IconCheck()}
                Publicidad de Pago por Clic (PPC):
                <Text ml={6} fontSize={11}>
                    Gran campaña de publicidad en redes sociales
                </Text>
                <Text ml={6} fontSize={11}>
                    Estimación de alcance de 14000-20000 personas
                </Text>
            </ListItem>
            <ListItem>
                {IconCheck()}
                Pagina web
                <Text ml={6} fontSize={11}>
                    Creación de pagina web con la imagen de marca
                </Text>
            </ListItem>
            <ListItem>
                {IconCheck()}
                Soporte
                <Text ml={6} fontSize={11}>
                    Hasta 12 horas de soporte al mes
                </Text>
            </ListItem>
            <ListItem>
                {IconCheck()}
                Google Analytics
                <Text ml={6} fontSize={11}>
                    Configuración completa y seguimiento del tráfico del sitio web, objetivos y comercio electrónico
                </Text>
                <Text ml={6} fontSize={11}>
                    Informes personalizados con información y recomendaciones                </Text>
            </ListItem>
            <ListItem>
                {IconCheck()}
                Email marketing
                <Text ml={6} fontSize={11}>
                    Configuración y gestión de tres campañas de correo electrónico al mes
                </Text>
                <Text ml={6} fontSize={11}>
                    Gestión de listas de hasta 3000 suscriptores
                </Text>
                <Text ml={6} fontSize={11}>
                    Automatización avanzada de correos electrónicos y pruebas A/B
                </Text>
            </ListItem>
        </List >
    }
    const standard = () => {
        return <List spacing={3} textAlign="start" px={{ base: 5, lg: 12 }} py={6} fontFamily={"Montserrat"}>
            <ListItem>
                {IconCheck()}
                Marketing en Redes Sociales:
                <Text ml={6} fontSize={11}>
                    Gestión de una plataforma de redes sociales.
                </Text>
                <Text ml={6} fontSize={11}>
                    4 publicaciones semanales con contenido proporcionado por el cliente
                </Text>
                <Text ml={6} fontSize={11}>
                    Gestión moderada de interacción y comunidad
                </Text>
            </ListItem>
            <ListItem>
                {IconCheck()}
                SEO:
                <Text ml={6} fontSize={11}>
                    Investigación de palabras clave para hasta 10 palabras clave objetivo
                </Text>
                <Text ml={6} fontSize={11}>
                    Optimización en la página y creación de contenido mensual
                </Text>
                <Text ml={6} fontSize={11}>
                    Informes quincenales de rendimiento
                </Text>
            </ListItem>
            <ListItem>
                {IconCheck()}
                Publicidad de Pago por Clic (PPC):
                <Text ml={6} fontSize={11}>
                    Media campaña de publicidad en redes sociales
                </Text>
                <Text ml={6} fontSize={11}>
                    Estimación de alcance de 4000-8000 personas
                </Text>
            </ListItem>
            <ListItem>
                {IconCheck()}
                Pagina web
                <Text ml={6} fontSize={11}>
                    Creación de pagina web con la imagen de marca
                </Text>
            </ListItem>
            <ListItem>
                {IconCheck()}
                Soporte
                <Text ml={6} fontSize={11}>
                    Hasta 8 horas de soporte al mes
                </Text>
            </ListItem>
        </List>
    }
    const basic = () => {
        return <List spacing={3} textAlign="start" px={{ base: 5, lg: 12 }} py={6} fontFamily={"Montserrat"}>
            <ListItem>
                {IconCheck()}
                Marketing en Redes Sociales:
                <Text ml={6} fontSize={11}>
                    Gestión de una plataforma de redes sociales.
                </Text>
                <Text ml={6} fontSize={11}>
                    2 publicaciones semanales con contenido proporcionado por el cliente
                </Text>
                <Text ml={6} fontSize={11}>
                    Gestión básica de interacción y comunidad
                </Text>
            </ListItem>
            <ListItem>
                {IconCheck()}
                SEO:
                <Text ml={6} fontSize={11}>
                    Investigación de palabras clave para hasta 5 palabras clave objetivo
                </Text>
                <Text ml={6} fontSize={11}>
                    Optimización en la página del sitio web del cliente
                </Text>
                <Text ml={6} fontSize={11}>
                    Informes mensuales de rendimiento
                </Text>
            </ListItem>
            <ListItem>
                {IconCheck()}
                Publicidad de Pago por Clic (PPC):
                <Text ml={6} fontSize={11}>
                    Pequeña campaña de publicidad en redes sociales
                </Text>
                <Text ml={6} fontSize={11}>
                    Estimación de alcance de 2000-4000 personas
                </Text>
            </ListItem>

        </List>
    }



    return (
        <>
            <Button
                onClick={onOpen}
                rounded={"lg"}
                w={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                bg={COLORS.brand2}
                color={COLORS.brand4}
                _hover={{ bg: COLORS.brand3 }}
                fontFamily={"Montserrat"}
            >
                Detalles del plan
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size={"xl"} >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody fontFamily={"Montserrat"} px={0}>
                        <Text p={8} pb={4} fontSize={20}>Este plan incluye:</Text>
                        {result()}
                    </ModalBody>

                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
