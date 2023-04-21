import React from 'react'
import './home.css'
import {Alert,AlertTitle,AlertDescription, Flex,} from '@chakra-ui/react'
import Navbar from '../components/navbar/Navbar';
import { SimpleGrid, Container } from "@chakra-ui/react";
import { useState,useEffect } from 'react';
import axios from 'axios';

import {
  Box,
  CircularProgress
} from '@chakra-ui/react';


import Card from '../components/navbar/Card'
import { motion } from 'framer-motion';
const Home = () => {
  const [Data,setData]=useState([])
  const [Loader,setLoader]=useState(false);


useEffect(()=>{
  axios.get("http://192.168.8.64:4550/",).then(res=>res.data)
  .then(data => {
      console.log(data.data);
      setData(data.data);
      setLoader(true);
    })
    .catch( err=> console.log(err));
},[])

          return (
                  <Box maxW='' fontFamily='serif'  >
                    <Navbar/>
                        {!Loader? (
                        <Alert status='warning' variant='subtle' flexDirection='column' alignItems='center' justifyContent='center'                 textAlign='center'height='200px'>
                                <CircularProgress isIndeterminate color='green.300' />
                                  <AlertTitle mt={4} mb={1} fontSize='lg'>Ачааллаж байна түр хүлээнэ үү!</AlertTitle>
                            <AlertDescription maxWidth='sm'>
                                Thanks for submitting your application. Our team will get back to you soon.
                            </AlertDescription>
                            </Alert>
                          ):(
                        <Box mt='' background='#0000000a' >
                          <Container maxW="100rem" centerContent as={motion.div}initial={{x:"10em",opacity:1}}
          animate={{x:"0",opacity:1}}>
                              <SimpleGrid columns={[1, 2, 3,]}>
                                {Data.map( (item) =>{
                                const { index,entityName,deviceType,data , status, wifiSignal } = item;
                                return (
                                  <Card
                                key={index}
                                entityName={entityName}
                                deviceType={deviceType}
                                data={data}
                                status={status}
                                wifiSignal={wifiSignal}
                              />
                            );
                          })}
                        </SimpleGrid>
                      </Container>
                </Box>
  )} 
  </Box>
  )
}
export default Home