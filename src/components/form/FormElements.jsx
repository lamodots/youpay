import styled from 'styled-components';

export const FormTag = styled.form`
    width:${(props)=> props.width};
`

export const FormInput = styled.input`
 box-sizing: border-box;
    display:${(props)=> props.display};
    width: ${(props)=> props.width};
    border:1px solid gray;
    outline:none;
    padding: 10px 20px;
    margin: 8px 0;
    border-radius: 8px;
    background-color: ${(props)=> props.backgroundColor};
    color:#fff;
    font-size: 14px;

    &:hover{
        background-color: ${(props)=> props.hoverBg};
        opacity: ${(props)=> props.opacity};
        cursor:  ${(props)=> props.cursor};
    }
    &:focus{
        border:1px solid #0D3C7B;
     
    }
    &:checked{
        background-color: #0D3C7B;
        border:1px solid #0D3C7B;
        color:#0D3C7B;
    }
`
export const FormLabel = styled.label`
    display:inline;
   
   
   
`
export const Text = styled.p`
    display: block;
    text-align: ${(props)=> props.textAlign};
    font-weight: 600;
    opacity: 0.8;

    span{
        
        color: #0D3C7B;
        font-weight: 700;
    }
  
   
`