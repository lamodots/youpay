import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import { AboutContent } from './AboutContent';
import thom from '../../assets/images/thom.png';
import { Button } from '../buttons/Buttons';
import {ListItem} from '../../store/Data';


export const About = () => {

const renderList = ListItem?.map((item, index)=>{
return(
  <ul style={{ }}  data-aos="fade-up" data-aos-delay="50"
  data-aos-duration="1000"
  data-aos-easing="ease-in-out">
    <li key={index}>
      {item.list1}
     
    </li>
  </ul>
)
});

  return (
    <Container backgroundColor={'#ECEFF4'} padding={'3em 0'} width={'100%'}>
      <Container display={'flex'} justifyContent={'space-between'} width={'95%'} margin={'0em auto'} >
          <AboutContent width={'45%'} >
            <img src={thom} alt="Thom pressing phone" width={'100%'}  data-aos="zoom-in" data-aos-delay="50"
  data-aos-duration="1000"
  data-aos-easing="ease-in-out"/>
          </AboutContent>
          <AboutContent  width={'45%'} >
             <AboutContent width={'67%'} margin={'0 auto'} >
             <h2 style={{margin:'0 0 0 .9em'}} data-aos="fade-up" data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" >Why use our Platform</h2>
          
            {renderList}
            <Button as='a' href="#" margin={'0 0 0 1.2em'} >Explore More</Button>
           
             </AboutContent>
          </AboutContent>
      </Container>
    </Container>
  )
}

