'use client'

import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import { COLORS } from '../../../colors'
import PricingModal from './pricingModal'


function PriceWrapper(props) {
    const { children } = props

    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    )
}

export default function Pricing() {

    const IconCheck = () => {
        return <ListIcon as={FaCheckCircle} color={'#6ec2f7'} />
    }

    return (
        <Box py={12}>
            <VStack spacing={2} textAlign="center" pb={5}>
                <Heading as="h1" fontSize="4xl" fontFamily={"Montserrat"}>
                    Planes que se adaptan a ti
                </Heading>
                <Text fontSize="lg" color={'gray.500'} fontFamily={"Montserrat"}>
                    Elige el plan que mejor se adapte a tus necesidades
                </Text>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 14, lg: 10 }}
                py={10}>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl" fontFamily={"Montserrat"}>
                            Basic
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600" fontFamily={"Montserrat"}>
                                €
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                120
                            </Text>
                            <Text fontSize="3xl" fontWeight={"800"} >
                                /mes
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12} py={6} fontFamily={"Montserrat"}>
                            <ListItem>
                                {IconCheck()}
                                Redes Sociales
                            </ListItem>
                            <ListItem>
                                {IconCheck()}
                                SEO
                            </ListItem>
                            <ListItem>
                                {IconCheck()}
                                Campañas publicidad
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <PricingModal label="basic" />
                        </Box>
                    </VStack>
                </PriceWrapper>

                <PriceWrapper>
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: 'translate(-50%)' }}>
                            <Text
                                textTransform="uppercase"
                                color={"black"}
                                px={3}
                                py={1}
                                bg={COLORS.brand2}
                                fontSize="sm"
                                fontWeight="600"
                                rounded="xl">
                                Más Popular
                            </Text>
                        </Box>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl" fontFamily={"Montserrat"}>
                                Standard
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600" fontFamily={"Montserrat"}>
                                    €
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    220
                                </Text>
                                <Text fontSize="3xl" fontWeight={"800"} >
                                    /mes
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12} py={6} fontFamily={"Montserrat"}>
                                <ListItem>
                                    {IconCheck()}
                                    Redes Sociales
                                </ListItem>
                                <ListItem>
                                    {IconCheck()}
                                    SEO
                                </ListItem>
                                <ListItem>
                                    {IconCheck()}
                                    Campañas publicidad
                                </ListItem>
                                <ListItem>
                                    {IconCheck()}
                                    Página web
                                </ListItem>

                                <ListItem>
                                    {IconCheck()}
                                    Soporte
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <PricingModal label="standard" />
                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl" fontFamily={"Montserrat"}>
                            Premium
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600" fontFamily={"Montserrat"}>
                                €
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                350
                            </Text>
                            <Text fontSize="3xl" fontWeight={"800"} >
                                /mes
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12} py={6} fontFamily={"Montserrat"}>
                            <ListItem>
                                {IconCheck()}
                                Lo incluido en Standard
                            </ListItem>

                            <ListItem>
                                {IconCheck()}
                                Google Analytics
                            </ListItem>
                            <ListItem>
                                {IconCheck()}
                                Email Marketing
                            </ListItem>

                        </List>
                        <Box w="80%" pt={7}>
                            <PricingModal label="premium" />
                        </Box>
                    </VStack>
                </PriceWrapper>
            </Stack>
        </Box>
    )
}