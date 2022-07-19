import React from 'react';
import styled from 'styled-components';

  export const Button = styled.button`
  padding:${(props)=>props.padding};
  border:${(props)=>props.border};
  background-color:${(props)=>props.backgroundColor};
  color:${(props)=>props.color};
  cursor:${(props)=>props.mouseCursor};
  font-size:${(props)=>props.fontSize};
  width: ${(props) => props.large ? '500px' : '120px'};
  text-align:${(props)=>props.textAlign};
  border-radius:${(props)=>props.borderRadius};
  margin:${(props)=>props.margin};
  display:${(props)=>props.display};




  &:hover{
    cursor:${(props)=>props.cursor};
    background-color:${(props)=>props.darkColor};
    text-decoration:${(props)=>props.textDecoration};
    color: ${(props) => props.hoverColor}
  }

  `;