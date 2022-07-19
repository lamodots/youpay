import React from 'react';
import styled from 'styled-components';

export const Cards = styled.div`
box-sizing:border-box;
width:${(props)=>props.width};
background-color:${(props)=> props.backgroundColor};
border-radius:${(props)=> props.borderRadius};
padding:${(props)=>props.padding};
display:${(props)=>props.display};


h2{
    text-align: center;
    font-size: 1.2em;
}

&:hover{
    box-shadow: 0 2px 4px gray;
}

@media only screen and (max-width:600px){
    margin-left:20%;
    margin-right:20%;
    margin-bottom:8%;
}



`;
