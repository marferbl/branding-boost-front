'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { COLORS } from '../../../colors'
import FormModal from './formModal'

export default function Hero() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} fontFamily={"Montserrat"}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              fontFamily={"Montserrat"}
              as={'span'}
              position={'relative'}
            >
              Impulsa tu negocio al
            </Text>
            <Text fontFamily={"Montserrat"} color={COLORS.brand4} as={'span'}>
              {' '} éxito
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Marketing digital al alcance de tu mano. Te ayudamos a cumplir tus objetivos a largo plazo para tu negocio.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <FormModal />
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}