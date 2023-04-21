import React, { useContext } from 'react'
import { useState} from "react";
import {Flex,Heading,Input,Button,FormControl,FormLabel,Avatar,useColorModeValue,FormHelperText,InputGroup,InputRightElement,InputLeftElement,Link,Box,} from '@chakra-ui/react';
import { EmailIcon,LockIcon} from '@chakra-ui/icons'
import UserContext from '../context/authContext';


const Login = () => {
    const[email,setemail]=useState("");
    const [password, setPassword] = useState("");
    const {login}=useContext(UserContext)

    const formBackground = useColorModeValue('white','gray.700');
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);
    return (
    <Flex h="100vh" alignItems="center" justifyContent="center" background='cyan.50' fontFamily='serif'>
        <Flex flexDirection="column" bg={formBackground} p={12}borderRadius={12}boxShadow="lg">
            <Avatar bg="green.500"  ml='108px'/>
            <Heading color="green.500" pl={9} ml='22px'>Welcome</Heading>
    <FormControl isRequired mt={6}>
        <FormLabel>Нэвтрэх нэр</FormLabel>
        <InputGroup>
                <InputLeftElement pointerEvents="none"children={<EmailIcon color="green" />}/>
                <Input value={email} onChange={e=>setemail(e.target.value)}
                    placeholder="хаяг"
                    type="email"
                    variant="filled"
                    required
                    mb={4}/>
                </InputGroup>
    </FormControl>
    <FormControl isRequired mt={1}>
            <FormLabel >Нууц үг</FormLabel>
            <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<LockIcon color="green" />}/>
                    <Input value={password} onChange={e=>setPassword(e.target.value)}
                        placeholder="**********"
                        type={showPassword?"text":"password"}
                        variant="filled"
                        required
                        mb={3}/>
            <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick} color="gray.400">{showPassword ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right" mb={5}>
                    <Link>forgot password?</Link>
                </FormHelperText>
        </FormControl>
            <Button colorScheme="green" mb={8} onClick={()=>login(email,password)}>Нэвтрэх
            </Button>
                    <Box textAlign="center">New to us?{" "}
                        <Link color="green.500" href='/sign'>Sign Up</Link>
                    </Box>
        </Flex>
</Flex>
)
}

export default Login
