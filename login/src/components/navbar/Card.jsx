import React from 'react'
// import {
//     Box,
//     Flex,
//     AspectRatio,
//     Image,
//     Text,
//     Link,
//     Button,
//     Stack
//   } from "@chakra-ui/react";
import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
const Card = (props) => {
    const { entityName, deviceType, data,status,wifiSignal } = props;
  return (
    <Box py={7} px={5} fontFamily='serif'>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'} mt='30px'>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={5}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            Төхөөрөмж
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'6xl'} fontWeight={400}>
              {entityName}
            </Text>

          </Stack>
        </Stack>

        <Box bg={useColorModeValue('green.50', 'gray.900')} px={10} py={10} pl='40px'>
          <List spacing={1} >
            <ListItem>entityName
              <ListIcon as={CheckIcon} color="green.400" />
              {entityName}
            </ListItem>
            <ListItem>deviceType
              <ListIcon as={CheckIcon} color="green.400" />
              {deviceType}
            </ListItem>
            <ListItem>data
              <ListIcon as={CheckIcon} color="green.400" />
              {data}
            </ListItem>
            <ListItem>status
              <ListIcon as={CheckIcon} color="green.400" />
              {status}
            </ListItem>
            <ListItem>wifiSignal
              <ListIcon as={CheckIcon} color="green.400" />
              {wifiSignal}
            </ListItem>
          </List>

          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}>
             Start
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Card
