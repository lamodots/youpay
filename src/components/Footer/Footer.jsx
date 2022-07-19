import React from 'react';
import { Container } from '../Container';
import { FooterContent } from './FooterContent';
import {TbMail} from 'react-icons/tb';
import {Socials, Navigation} from '../../store/Data';
import { Link } from 'react-router-dom';

export const Footer = () => {

  const renderSocials= Socials.map((items, index)=>{

    return(
      <ul style={{padding:'0', listStyleType:'none'}}>
        <li key={index} style={{ color:'white', opacity:'.8', fontSize:'12px'}}>
          <Container display={'flex'} height={'30px'} justifyContent={'flex-start'} alignItems={'center'} >
         <Link to='/' style={{textDecoration:'none', color:'#fff' }} ><Container width={'20px'} height={'20px'} >{items.Icon}</Container></Link>
         <Link to="/" style={{textDecoration:'none', color:'#fff' }} ><Container width={'20px'} height={'20px'} >{items.Brand}</Container></Link>
          </Container>
        </li>
      </ul>
    )
  });

const renderNavigation = Navigation.map((links, key)=>{

  return (
    <ul style={{padding:'0', listStyleType:'none'}}>
      <li key={key} style={{color:'white', fontSize:'12px'}}>
        {links.Home}
        {links.BuyNow}
        {links.SignIn}
        {links.SignUp}
      </li>
    </ul>
  )
})

  return (
   
    <Container backgroundColor={'#333333'} padding={'2em 0 0 0'}>
   
    <Container  display={'flex'} justifyContent={'space-between'} padding={'2em 3em'} width={'80%'} margin={'0 auto'}>
    <FooterContent>
      <h2>Contact Us</h2>
      <p>23rd Floor Ndulovo House Dublin </p>
      <p>+237 6888 888 88</p>
     <Container display={'flex'} height={'20px'} alignItems={'center'}>
     <TbMail style={{color:'white'}}/><p style={{marginLeft:'5px'}}>hello@youpay.co</p>
     </Container>
    </FooterContent>
    <FooterContent >
      <h2>Navigation</h2>
    {renderNavigation}
    </FooterContent>
    <FooterContent>
      <h2>Socials</h2>
      {renderSocials}
    </FooterContent>
    </Container>
    <Container backgroundColor={'black'} opacity={'0.5'} padding={'1em 0'}>
    <p style={{marginBottom:'0', textAlign:'center', color:'white',opacity:'0.6'}}>&copy; 2022 YouPay all right reserved</p>
    </Container>
    </Container>
  )
}
