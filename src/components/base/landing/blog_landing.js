// Complete JavaScript code for the Chakra UI component

import React from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
  Link,
} from '@chakra-ui/react';
import { COLORS } from '../../../colors';


const BlogTags = (props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} bg={COLORS.brand2} color={COLORS.brand4} key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={'7xl'} p={{ base: 3, lg: 10 }} fontFamily={'Montserrat'} >
      <Heading as="h1" color={COLORS.brand4} textAlign={'center'} fontFamily={"Montserrat"} mb={8} pt={{ base: 6, lg: 2 }}>Nuestro blog</Heading>
      {/* <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  '../google.jpg'}
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags color={COLORS.brand2} tags={['SEO', 'Posicionamiento']} />
          <Heading marginTop="1">
            <Link href="/blog/seo-posicionamiento-google" textDecoration="none" _hover={{ textDecoration: 'none', opacity: 0.8 }} fontFamily={'Montserrat'}>
            SEO: Mejora tu Posicionamiento en Google
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
Descubre la importancia del SEO para tu negocio en línea. Aprende a mejorar el posicionamiento en Google, obtener enlaces de calidad y brindar una experiencia excepcional al usuario. Con estrategias efectivas de SEO, alcanzarás el éxito en las búsquedas y atraerás a más clientes potenciales.
          </Text>
        </Box>
      </Box> */}
      {/* <Heading as="h3" marginTop="5" pt={5} fontFamily={"Montserrat"} fontSize={20}>
        Últimos artículos
      </Heading> */}
      <Wrap spacing="20px" marginTop="5" pl={5}>
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '31%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    '../contenidos.jpg'}
                  height={250}
                  alt="some text"
                  objectFit="cover"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Box>
            </Box>
            <BlogTags tags={['Leads', 'Contenido']} marginTop={3} />
            <Heading fontSize="xl" marginTop="2">
              <Link fontFamily={'Montserrat'} href="/blog/marketing-leads" textDecoration="none" _hover={{ textDecoration: 'none', opacity: 0.8 }}>
                Marketing de Contenidos para Generar Leads
              </Link>
            </Heading>
            <Text pr={3} as="p" fontSize="md" marginTop="2" textAlign={'justify'}>
              ¡Descubre el poder del Marketing de Contenidos para atraer clientes de calidad! Conoce a tu audiencia, crea contenido valioso en diversos formatos y optimiza para SEO. Seduce con landing pages irresistibles y nutre tus leads con campañas de email marketing. Prepárate para el éxito en el mundo digital con nuestra guía experta.
            </Text>
          </Box>
        </WrapItem>
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '31%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    '../rrss.jpg'}
                  alt="some text"
                  objectFit="cover"
                  width="100%"
                  height={250}
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Box>
            </Box>
            <BlogTags tags={['RRSS', 'Tendencias']} marginTop={3} />
            <Heading fontSize="xl" marginTop="2">
              <Link fontFamily={'Montserrat'} href="/blog/tendencias-redes-sociales" textDecoration="none" _hover={{ textDecoration: 'none', opacity: 0.8 }}>
                Tendencias en Redes Sociales 2023
              </Link>
            </Heading>
            <Text  pr={3} as="p" fontSize="md" marginTop="2" textAlign={'justify'}>
              En 2023, las redes sociales ofrecen emocionantes oportunidades para destacar en el marketing digital. Las tendencias clave incluyen el contenido auténtico, la realidad aumentada para experiencias inmersivas, el e-commerce social, el contenido de valor, y las comunidades en línea. Adoptar estas tendencias permitirá a las marcas conectar con su audiencia y destacar en el mundo digital.
            </Text>
          </Box>
        </WrapItem>
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '31%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  height={250}
                  src={
                    '../emailmarketing.jpg'}
                  alt="some text"
                  objectFit="cover"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Box>
            </Box>
            <BlogTags tags={['Estrategia', 'Digital']} marginTop={3} />
            <Heading fontSize="xl" marginTop="2">
              <Link fontFamily={'Montserrat'} href="/blog/email-marketing-digital" textDecoration="none" _hover={{ textDecoration: 'none', opacity: 0.8 }}>
                Email Marketing en la Era Digital
              </Link>
            </Heading>
            <Text pr={3} as="p" fontSize="md" marginTop="2" textAlign={'justify'}>
              Impulsa tu negocio con el poder del email marketing en la era digital. Descubre las tendencias y mejores prácticas para crear campañas efectivas y personalizadas que cautiven a tu audiencia y aumenten las conversiones. Maximiza el potencial de esta poderosa herramienta en tu estrategia de marketing digital y establece conexiones duraderas con tus clientes.
            </Text>
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  )
}

export default ArticleList