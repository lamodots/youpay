import React from 'react'
import styled from 'styled-components';

const LabelTag = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size:22px;
    user-select: none;

    input{
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

  span{
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
  }

  input:checked ~ span{
      background-color: #2196f3;
  }
`


export const Label = () => {
  return (
    <>
        <LabelTag className='container' >
            <input type={'checkbox'} />
            <span className='checkmark'></span>
        </LabelTag>
    </>
  )
}
