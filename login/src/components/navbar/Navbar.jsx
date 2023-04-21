import React from 'react'
import { useContext } from 'react';
import UserContext from '../context/authContext';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

const Navbar = () => {
    const {logout}=useContext(UserContext)
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
  <>
  <Box >
      <Box bg={useColorModeValue('inherit', 'gray.900')} px={20} fontFamily='serif' boxShadow='0px 3px 6px 0 rgb(0 0 0 / 5%)' >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box fontWeight='bold'>Logo</Box>
            <HStack 
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              
              >
                <Link to='/' >Нүүр хуудас</Link>
                
                <Link to='/about'>Төхөөрөмж</Link>
                <Link to='' >Menu</Link>
                <Link to='/service'>Холбоо барих</Link>
                <Link to='' >Байршил</Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              background='green'
              >
              {Cookies.get('user')}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                  />
              </MenuButton>
              <MenuList textAlign='center'>
                <MenuItem>{Cookies.get('user')}</MenuItem>
                
                <MenuDivider />
                <MenuItem onClick={logout}><Link to='/login' >Гарах</Link></MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none'  } }>
            <Stack as={'nav'} spacing={4}>
                <Link to='/'>Нүүр хуудас</Link>
                <Link to='/about'>Төхөөрөмж</Link>
                <Link to='' >Menu</Link>
                <Link to='/service'>Холбоо барих </Link>
                <Link to='' >Байршил</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
                  </Box>
    </>
  )
};

export default Navbar
