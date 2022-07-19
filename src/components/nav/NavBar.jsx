import React from 'react'
import { Container , Nav} from '../Container';
import {Button} from '../buttons/Buttons'
import { Heroheader } from '../hero/Herocopy';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export const NavBar = () => {
  return (
  
   <Container display={'flex'} justifyContent={'space-between'} height={'80px'} alignItems={'center'}>
    <Nav  height={'80px'} flex={'50%'}  alignItems={'center'}>
    <Link to="/" style={{textDecoration:'none'}}><Heroheader  heading={'1.6em'} margin={'0em 2.8em'} color={'#0D3C7B'}>Your<span >Pay</span></Heroheader></Link>
    </Nav>
    <Nav  height={'80px'} flex={'50%'} display={'flex'} justifyContent={'space-evenly'} >
    
<Link to="/signup">   <Button border={'none'} backgroundColor={'white'} color={'blue'} textDecoration={'underline'} cursor={'pointer'} hoverColor={'rgba(0,0,255,0.7)'}>Quick Buy</Button></Link> 
  <Link to="/login"> <Button
      backgroundColor={'#0D3C7B'} 
      color={'white'}
      border={'none'}
      padding={'5px'}
      cursor={'pointer'}
      fontSize={'14px'}
      textAlign={'center'}
      borderRadius={'4px'}
      display={'inline-block'}
     
     
     
    
    >Login</Button></Link> 
   <Link to="/signup"> <Button
    backgroundColor={'white'} 
    color={'blue'}
    border={'1px solid blue'}
    padding={'5px'}
    cursor={'pointer'}
    fontSize={'14px'}
    textAlign={'center'}
    borderRadius={'4px'}
    display={'inline-block'}
    >
        Sign Up
    </Button></Link>
    </Nav>
   

   </Container> 
  
  )
}
