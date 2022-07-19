import React from 'react';
import styled from 'styled-components';
import {Cards} from './Cards';
import {TbArrowsUpDown as ArrowIcon} from 'react-icons/tb';
import {TbMessage2 as MessageIcon} from 'react-icons/tb';
import {TbWifi as WifiIcon} from 'react-icons/tb';
import {TbDeviceTvOld as TvIcon} from 'react-icons/tb';
import { Button } from '../buttons/Buttons';


const CardWrapper = styled.div`
box-sizing: border-box;
width: 100%;
background-color: aliceblue;
display: flex;
justify-content: space-evenly;
/* gap: 20px; */
padding: 20px 0;

@media only screen and (max-width:600px){
    flex-direction: column;
    justify-content: center;
}

  /* width: 80%;
  background-color: green;
  display: flex;
  justify-content: space-evenly;
  margin: 2em auto;
  gap:20px; */


`;
export const Products = () => {
  return (
    <div>
          <CardWrapper>
            <Cards width={'200px'} backgroundColor={'#ECEFF4'} borderRadius={'.6em'} padding={'2em'} data-aos="flip-left"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                  <ArrowIcon style={{backgroundColor:'#d7d7d7', padding:'1.5em', borderRadius:'50%',display:'block', margin:'0 auto'}}/>
                   <h2>SME DATA</h2>
                   <Button display={'block'} margin={'2em auto auto'} 
                     backgroundColor={'#0D3C7B'} 
                     color={'white'}
                     border={'none'}
                     padding={'5px'}
                     cursor={'pointer'}
                     fontSize={'14px'}
                     textAlign={'center'}
                     borderRadius={'4px'}
                     
                   
                   
                   >BUY NOW</Button>
            </Cards>
            <Cards width={'200px'} backgroundColor={'#ECEFF4'} borderRadius={'.6em'} padding={'2em'} data-aos="flip-left" data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" >
                  <WifiIcon style={{backgroundColor:'#d7d7d7', padding:'1.5em', borderRadius:'50%',display:'block', margin:'0 auto'}} />
                   <h2>RECHARGE</h2>
                   <Button display={'block'} margin={'2em auto auto'} 
                     backgroundColor={'#0D3C7B'} 
                     color={'white'}
                     border={'none'}
                     padding={'5px'}
                     cursor={'pointer'}
                     fontSize={'14px'}
                     textAlign={'center'}
                     borderRadius={'4px'}
                     
                   
                   
                   >BUY NOW</Button>
            </Cards>
            <Cards width={'200px'} backgroundColor={'#ECEFF4'} borderRadius={'.6em'} padding={'2em'} data-aos="flip-right" data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                  <MessageIcon style={{backgroundColor:'#d7d7d7', padding:'1.5em', borderRadius:'50%',display:'block', margin:'0 auto'}} />
                   <h2>BULK SMS</h2>
                   <Button display={'block'} margin={'2em auto auto'} 
                     backgroundColor={'#0D3C7B'} 
                     color={'white'}
                     border={'none'}
                     padding={'5px'}
                     cursor={'pointer'}
                     fontSize={'14px'}
                     textAlign={'center'}
                     borderRadius={'4px'}
                     
                   
                   
                   >BUY NOW</Button>
            </Cards>
            <Cards width={'200px'} backgroundColor={'#ECEFF4'} borderRadius={'.6em'} padding={'2em'}  data-aos="flip-right" data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                  <TvIcon style={{backgroundColor:'#d7d7d7', padding:'1.5em', borderRadius:'50%',display:'block', margin:'0 auto'}}/>
                   <h2>CABLE TV</h2>
                   <Button display={'block'} margin={'2em auto auto'} 
                     backgroundColor={'#0D3C7B'} 
                     color={'white'}
                     border={'none'}
                     padding={'5px'}
                     cursor={'pointer'}
                     fontSize={'14px'}
                     textAlign={'center'}
                     borderRadius={'4px'}
                     
                   
                   
                   >BUY NOW</Button>
            </Cards>
           

        </CardWrapper>
        
    </div>
  )
}
