'use client'

import {
  Box,
  Text,
  Center,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Heading
} from '@chakra-ui/react'
import { FaMailBulk, FaRegChartBar, FaLaptopCode, FaAngleDoubleUp } from 'react-icons/fa';
import { IoShareSocial } from 'react-icons/io5'
import { COLORS } from '../../../colors';


const Feature = ({ heading, text, icon }) => {
  return (
    <GridItem textAlign={"center"} fontFamily={"Montserrat"}>
      <Center mb={3}>
        {icon}
      </Center>
      <chakra.h3 fontSize="xl" fontWeight="600" mb={5} color={COLORS.brand4} >
        {heading}
      </chakra.h3>
      <chakra.p textAlign={'center'}>{text}</chakra.p>
    </GridItem>
  )
}

export default function Features() {
  return (
    <Box bgColor={"#F6F0EB"} as={Container} maxW="full" mt={14} p={4} pb={20}>
      <Divider mb={12} />

      <Center pb={20}>
        <Heading mb={3} fontFamily={"Montserrat"}>Nuestros servicios</Heading>
      </Center>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}>
        <Feature
          heading={'Desarrollo web'}
          text={'Haz que tu presencia online destaque con nuestro servicio de Desarrollo Web personalizado.'}
          icon={<FaLaptopCode size={30} color={COLORS.brand4} />}
        />
        <Feature
          heading={'Ads'}
          text={'Alcanza a tu audiencia objetivo y aumenta la visibilidad de tu marca con campañas de publicidad en redes sociales'}
          icon={<FaAngleDoubleUp size={30} color={COLORS.brand4} />}
        />
        <Feature
          heading={'Redes Sociales'}
          text={'Somos especialistas en crecimiento de redes sociales. Consigue un perfil llamativo y atrae a miles de clientes'}
          icon={<IoShareSocial size={30} color={COLORS.brand4} />}
        />
        <Feature
          heading={'SEO'}
          text={'Aumenta la visibilidad de tu sitio web y atrae a más clientes potenciales con nuestro servicio de SEO.'}
          icon={<FaRegChartBar size={30} color={COLORS.brand4} />}
        />
      </Grid>
    </Box>
  )
}