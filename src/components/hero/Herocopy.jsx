import styled from 'styled-components';

export const Herocopy = styled.div`
    padding:${(props)=>props.padding};
    flex:${(props)=>props.flex} ;
    width:${(props)=>props.width} ;
    font-size: ${(props)=>props.text};



  p{
     color:${(props)=>props.color};
      font-size:18px;
    
  }



`;
export const Heroheader = styled.h1`
    padding:${(props)=>props.padding};
    font-size:${(props)=>props.heading};
    margin:${(props)=>props.margin};
    color:${(props)=>props.color};

    @media only screen and (max-width:600px){

        font-size:32px;
       
    }
    @media only screen and (min-width:601px){

        font-size:40px;
       
    }





`;
export const HeroText = styled.p`
    
    font-size:${(props)=>props.text};
   
    color:${(props)=>props.color};
    font-weight: ${(props)=>props.fontWeight};

 



`;