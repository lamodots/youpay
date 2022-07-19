import React from 'react'
import styled from 'styled-components'

export const FooterContent = styled.div`
background-color: ${(props)=>props.backgroundColor};

h2{
    text-transform: uppercase;
    color:white;
    font-weight: 800;
    font-size: 17px;
}
p{
    font-size: 12px;
    color:white;
    opacity: .8;
}
`;
