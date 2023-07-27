'use client'

import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Heading, Text
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { IoIosStats } from 'react-icons/io'
import { BiSolidPencil } from 'react-icons/bi'
import { BiSolidUserVoice } from 'react-icons/bi'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { COLORS } from "../../../colors"



export default function WebAnalysis() {
  return (
    <Flex flexDirection={"column"} gap={2} align={"center"} justify={"center"} px={6} height={{ base: 'fit-content', lg: 500 }} py={{ base: 10, lg: 0 }}>
      <CheckCircleIcon boxSize={'40px'} color={'#6ec2f7'} />
      <Heading textAlign={"center"} color={COLORS.brand4} as="h2" size="xl" mt={6} mb={2} fontFamily={"Montserrat"}>
        Analizamos tu web gratis
      </Heading>
      <Text mt={3} textAlign={"center"} fontFamily={"Montserrat"} color={COLORS.brand4} maxW={{ base: "100%", md: "70%" }}>
        Realizamos un análisis a tu web de forma gratuita, asi podrás ver el margen de mejora que hay, y los puntos en los que podría mejorarse tu web a nivel de alcance, palabras clave y engagement del cliente.
      </Text>
      <BasicStatistics />
    </Flex>
  )
}



function StatsCard(props) {
  const { title, stat, icon } = props
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'md'}
      border={'1px solid'}
      borderColor={useColorModeValue(COLORS.brand3, COLORS.brand2)}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'} gap={3}>
        <Box pl={{ base: 2, md: 5 }}>
          <StatLabel fontWeight={'medium'} isTruncated color={COLORS.brand4}>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={COLORS.brand4}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  )
}

const BasicStatistics = () => {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} fontFamily={"Montserrat"}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'SEO'} stat={'50%'} icon={<IoIosStats size={20} />} />
        <StatsCard title={'Diseño'} stat={'65%'} icon={<BiSolidPencil size={20} />} />
        <StatsCard title={'Alcance'} stat={'40%'} icon={<BiSolidUserVoice size={22} />} />
      </SimpleGrid>
    </Box>
  )
}