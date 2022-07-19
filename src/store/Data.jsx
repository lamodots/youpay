import React from 'react'
import {TbBrandInstagram,TbBrandTwitter,TbBrandYoutube,TbBrandFacebook,TbBrandLinkedin} from 'react-icons/tb';
import { Button } from '../components/buttons/Buttons';

export const ListItem = [
    {
        list1: 'Roll out Subscription on minutes',
   
    },
    {
      list1: '24/7 Avalability',
    
    },
    {
    list1: 'Ease of adding contact(flexbility to add a mobile contact directly from phone)',
  
    },
    {
  list1: 'Enjoy cheaper rates',

    },
    {
  list1: 'Stress free Recharge and subscription',

  },
    {
  list1: 'Prompt support',

  },
    {
  list1: 'Secure and convinent.',

  },
 
];

export const Socials = [
  {
     Icon: <TbBrandFacebook />,
     Brand: 'Facebook'
 
  },
  {
    Icon: <TbBrandTwitter />,
    Brand: 'Twitter'
  
  },
  {
  Icon: <TbBrandInstagram />,
  Brand: 'Instagram'


  },
  {
Icon: <TbBrandLinkedin />,
Brand: 'LinkedIn'

  },
  {
Icon: <TbBrandYoutube />,
Brand: 'Youtube'

},

];

export const Navigation =[

  {
    Home:<Button style={{color:'white'}} padding={'5px'} as='a' href="#">Home</Button>
  },
  {
    BuyNow:<Button style={{color:'white'}} padding={'5px'} as='a' href="#">Buy Now</Button>
  },
  {
    SignIn:<Button  style={{color:'white'}} padding={'5px'} as='a' href="#">Login</Button>
  },
  {
    SignUp:<Button  style={{color:'white'}} padding={'5px'} as='a' href="#">SignUp</Button>
  },
]