import React from 'react'
import { Container } from '../../components/Container';
import SignupIcon from '../../assets/images/ill.png'
import { Link } from 'react-router-dom';
import { FormInput, FormTag ,FormLabel, Text} from '../../components/form/FormElements';


// https://dribbble.com/shots/16029811-AUTH-Login-Register-screen-for-Phylum/attachments/7872310?mode=media
export const SignUp = () => {
  return (
    <Container height={'cal(100vh - 80px)'} width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={'0 300px 0 80px'}>
        <Container >
            <img src={SignupIcon} alt={'Sign up illustration'} />
        </Container>
        <Container  padding={'16px'} width={'350px'}>
            <Container  >
                <FormTag>
                    <FormInput name='fullname' type={'text'} placeholder={'Full Name'} display={'inline-block'} width={'100%'}/>
                    <FormInput name='email' type={'email'} placeholder={'Enter Email'} display={'inline-block'} width={'100%'}/>
                    <FormInput  name='password' type={'Password'} placeholder={'Enter Password'} display={'inline-block'} width={'100%'}/>
                    <FormLabel >
                    <FormInput  name='check'type={'checkbox'}  display={'inline-block'} padding={'10px'} />  
                      I agree to the <Link to='/'>Terms and Condition</Link></FormLabel>
                    <FormInput name='submit' type={'submit'} value='Create my account' display={'inline-block'} width={'100%'} backgroundColor={'#0D3C7B'} hoverBg={'#0D3C7B'} opacity={'0.9'} cursor={'pointer'}/>
                </FormTag>
                <Text textAlign={'center'}>Already have an account? <Link to='/login' style={{textDecoration:'none'}}><span>Log In</span></Link></Text>
            </Container>
        </Container>
    </Container>
  )
}
