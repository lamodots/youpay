import React from 'react';
import { Container } from '../Container';
import { Cards } from './Cards';
import {TbArrowsUpDown as ArrowIcon} from 'react-icons/tb';
import {TbMessage2 as MessageIcon} from 'react-icons/tb';
import {TbWifi as WifiIcon} from 'react-icons/tb';
import {TbDeviceTvOld as TvIcon} from 'react-icons/tb';
import { Button } from '../buttons/Buttons';
import styled from 'styled-components';
import {Products} from './Products'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Text = styled.p`
box-sizing:border-box;
  text-align: center;
  margin: 0 auto;
  width: 52%;

  @media only screen and (max-width:600px){
    width: 85%;
    font-size:14px;

  }
  @media only screen and (min-width:601px){
    width: 85%;
    font-size:14px;

  }
`;

const CardWrapper = styled.div`
box-sizing:border-box;
  width: 80%;
  background-color: green;
  display: flex;
  justify-content: space-evenly;
  margin: 2em auto;
  gap:20px;


`;

export const ProductServices = () => {
   
  return (
    <Container padding={'2em 0'} width={'100%'}>
        <h2 style={{textAlign:'center'}}  data-aos="fade-up" data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">Product and Services</h2>
        <Text  data-aos="fade-up" data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" >Our sole aim is to provide Bulk SMS, SME Data, And Recharge Perform all at affordable rates. Aside the fact that we sell internet data and airtime, you can also pay your Utility bills such as Electricity and Cable TV Subscriptions.</Text>
     <Container ><Products /></Container>
    </Container>
  )
}
