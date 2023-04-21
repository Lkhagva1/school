import React from 'react'
import { useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    FormControl,
    FormLabel,
    Avatar,
    useColorModeValue,
    FormHelperText,
    InputGroup,
    InputRightElement,
    InputLeftElement,
    Link,
    Box,

  } from '@chakra-ui/react';

import { EmailIcon,ViewOffIcon,ViewIcon} from '@chakra-ui/icons'
const Sign = () => {
   const[name,setname]=useState("");
   const[email,setemail]=useState("");
   const [password, setPassword] = useState("");

const ProceedLogin=(e)=>{
    e.preventDefault();

}
    const formBackground = useColorModeValue('gray.300','gray.700');
    const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  return (
      <Flex h="100vh" alignItems="center" justifyContent="center">
          <Flex flexDirection="column" bg={formBackground} p={12} borderRadius={12} boxShadow="lg">
              <Avatar bg="teal.500"  ml={24}/>
        <Heading color="teal.400" pl={9}>Бүртгүүлэх</Heading>
        <FormControl isRequired mt={1}>
            <FormLabel>Цахим хаяг</FormLabel>
            <InputGroup>
            <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />}/>
                <Input value={email} onChange={e=>setemail(e.target.value)}
                        placeholder="хаяг"
                        type="email"
                        variant="filled"
                        mb={4} />
            </InputGroup>
      </FormControl>
      <FormControl isRequired mt={2}>
        <FormLabel>Нэвтрэх нэр</FormLabel>
            <InputGroup>
                <InputLeftElement pointerEvents="none"children={<ViewIcon color="gray.300" />}/>
                <Input value={name} onChange={e=>setname(e.target.value)}
                        placeholder="хаяг"
                        type="email"
                        variant="filled"
                        mb={4}/>
            </InputGroup>
    </FormControl>
    <FormControl isRequired mt={1}>
        <FormLabel >Нууц үг</FormLabel>
        <InputGroup>
            <InputLeftElement pointerEvents="none" children={<ViewOffIcon color="gray.300" />}/>
                <Input value={password} onChange={e=>setPassword(e.target.value)}
                        placeholder="**********"
                        type={showPassword?"text":"password"}
                        variant="filled"
                        mb={3}/>
        <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleShowClick} color="gray.400">
                    {showPassword ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
            </InputGroup>
            <FormHelperText textAlign="right" mb={5}>
                <Link>нууц үгээ мартсан?</Link>
            </FormHelperText>
        </FormControl>
        <Button colorScheme="blue" mb={8} onClick={ProceedLogin}>Нэвтрэх 
                    <div class="arrow-wrapper">
                        <div class="arrow"></div>
                    </div>
        </Button>
        <Box textAlign="center">Бүртгүүлсэн?{" "}
            <Link color="teal.500" href="/login">Нэвтрэх</Link>
        </Box>
    </Flex>
</Flex>
  )
}

export default Sign
