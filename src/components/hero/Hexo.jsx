import React from 'react'
import { Container } from '../Container';
import { Herocopy , Heroheader, HeroText} from './Herocopy';
import { Heroillustration } from './HeroIllustration';
import { Button } from '../buttons/Buttons';
import jenny from '../../assets/images/jenny.png'

export const Hexo = () => {
  return (
    <Container backgroundColor={'#CFD7E4'} display={'flex'} height={'cal(100vh - 80px)'} width={'100%'} >
        <Herocopy padding={'5em 0em 5em 5em'} flex={'41%'} >
            <Heroheader heading={'4.5em'} margin={'0em'} color={'#0D3C7B'}>Your<span >Pay</span></Heroheader>
            <HeroText color={'#0D3C7B'} text={'18px'}>Feed your Network, Live Better.</HeroText>
            <p>Youpay is a three in one telecommunication platform that provides its users with hassle-free experience anytime they use its product. Youpay intends to connect individuals in a way to pay for their favourite services by providing easier, faster and secure ways to recharge your favourite brands.</p>
            <Button as='a' href="#">Read More</Button>
        </Herocopy>
        <Heroillustration flex={'58%'}  >
            <img src={jenny} alt={'Image of a mobile user'} width={'100%'}  />
        </Heroillustration>
    </Container>
  )
}
