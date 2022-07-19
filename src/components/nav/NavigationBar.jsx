import React , {useState}from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {BiMenuAltRight} from 'react-icons/bi'


const Container =styled.div`
    box-sizing: border-box;
    /* background-color:#021e39; */
    width:100%;
    height:80px;
    display:flex;
`;
const LeftSide = styled.div`
    flex:50%;
    /* background-color:red; */
    display:flex;
    justify-content:start;
    align-items:center;
    

    @media only screen and (max-width:650px){
      button{
          
      display:flex;
      }

    #hidden {
    position:absolute;
    left:0px;
    top:80px;
    height:230px;
    max-height:230px;
    width:100%;
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
   }

   a{
    margin:10px;
    font-size:18px;
   }

    }
    #hidden{
        display:flex;
       
    }
`;
const RightSide = styled.div`
    flex:50%;
    /* background-color:green; */
    display: flex;
    align-items: center;
    

    a{
        text-decoration: none;
    }

`;
const LinksDiv = styled.div`
     max-height:80px;
     /* background-color: yellow; */
     width: 100%;
     display: flex;
     justify-content: space-around;
 
     a{
        text-decoration:none;
        color:white;
        font-size:14px;
        margin-left:15px;
        display: inline-block;

    
      
     }
   

     .link-first{
        background-color: white;
        color: blue;
        
        padding: 5px  20px 8px 20px;
        cursor: pointer;
        text-align: center;
        border-radius: 4px;
        &:hover  {
        text-decoration: underline;
         opacity: 0.8;
         color:#0D3C7B;
     }
     }
     .link-second{
        background-color: #0D3C7B;
        color: white;
        /* border: 1px soid blue; */
        padding: 5px  20px 8px 20px;
        cursor: pointer;
        text-align: center;
        border-radius: 4px;
        &:hover  {
         background-color: #0D3C7B;
         opacity: 0.8;
         color:#fff;
     }
     }
     .link-third{
        background-color: white;
        color: blue;
        border: 1px solid blue;
        padding: 5px  20px 8px 20px;
        cursor: pointer;
        text-align: center;
        border-radius: 4px;
        &:hover  {
         background-color: #0D3C7B;
         opacity: 0.8;
         color:#fff;
     }
      
     }

     @media only screen and (max-width:750px){
       a{
        font-size:15px;
       }
     }

     @media only screen and (max-width:650px){
        display:none;

        }
     

`;
const Button = styled.button`
    display:none;
    margin-left:85%;

@media only screen and (max-width:600px){
    margin-left:70%;
}


`;

const Header = styled.h1`
    font-size: 1.6em;
    color: #0D3C7B;
    margin: 0em 2.8em;

    @media only screen and (max-width:600px){
    margin:0 30%;
}
    
`;


export const NavigationBar = () => {
    const [showLinks, setshowLinks] = useState(false);

    const togglehandler = ()=>{
        
        setshowLinks(!showLinks);
    }

  return (
  <Container>
      <RightSide>
       <Link to="/"><Header>YouPay</Header></Link>
    </RightSide>
      <LeftSide>
        <LinksDiv id={showLinks ? 'hidden' : '' }>
            <Link to="/signup" className='link-first'>Quick Buy</Link>
            <Link to="/login" className='link-second'>Log In</Link>
            <Link to="/signup" className='link-third'>Sign up</Link>
        </LinksDiv>
        <Button onClick={togglehandler}><BiMenuAltRight /></Button>
       
      </LeftSide>
    
  </Container>
  )
}
