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


const Feature = ({ heading, text, icon }) => {
  return (
    <GridItem textAlign={"center"}>
      <Center mb={3}>
        {icon}
      </Center>
      <chakra.h3 fontSize="xl" fontWeight="600" mb={5}>
        {heading}
      </chakra.h3>
      <chakra.p textAlign={'center'}>{text}</chakra.p>
    </GridItem>
  )
}

export default function Features() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4} pb={20} >
      <Divider mt={12} mb={12} />

      <Center pb={20}>
        <Heading mb={3}>Nuestros servicios:</Heading>
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
          icon={<FaLaptopCode />}
        />
        <Feature
          heading={'Ads'}
          text={'Alcanza a tu audiencia objetivo y aumenta la visibilidad de tu marca con publicidad en redes sociales'}
          icon={<FaAngleDoubleUp />}
        />
        <Feature
          heading={'SEO'}
          text={'Aumenta la visibilidad de tu sitio web y atrae a más clientes potenciales con nuestro servicio de SEO.'}
          icon={<FaRegChartBar />}
        />
        <Feature
          heading={'Email Marketing'}
          text={'Conecta con con tu audiencia y haz crecer tu negocio con campañas de correo electrónico dirigidas.'}
          icon={<FaMailBulk />}
        />
      </Grid>
    </Box>
  )
}