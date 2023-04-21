import React from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Navbar from './Navbar'
import ImageSlider from './ImageSlider';
import { SlideData } from './SlideData';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <Box  >
    <Navbar />
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}  fontFamily='serif'>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green',
                zIndex: -1,
              }}>
              Lorem
            </Text>
            <br />{' '}
            <Text color={'green.400'} as={'span'}>
            What is Lorem Ipsum?
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'lg', lg: 'lg' }} color={'gray.500'}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} as={motion.div} initial={{x:"-10em",opacity:0}}
          animate={{x:"0",opacity:1}}>
            <Button
              rounded={'full'}
              bg={'green.400'}
              color={'white'}
              _hover={{
                bg: 'green.500',
              }}>
              Create Project
            </Button>
            <Button rounded={'full'}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} borderRadius='70px 0px'>   
        <Flex mt='70px' width='100%' height='10%' p={4}  color="white" >
            <ImageSlider slides={SlideData}  />
          </Flex>
      </Flex>
    </Stack>
    </Box>
  )
}

export default About
