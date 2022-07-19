import styled from 'styled-components';
export const Heroillustration = styled.div`
    
height: ${(props)=> props.height};
flex: ${(props)=> props.flex};
width:${(props)=>props.width};


img{
    width:${(props)=> props.width}
}

@media only screen and (min-width:601px){
     img{
         width:100%;
     }
     p{
       font-size:14px;
     }
       /* padding: 5em 2em 5em 2em; */
   
   }

`;