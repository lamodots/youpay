import style from 'styled-components';

export const Container = style.div`   
box-sizing:border-box;
width: ${(props)=>props.width};
height: ${(props)=>props.height};
background-color:${(props)=>props.backgroundColor};
display:${(props)=>props.display};
justify-content:${(props)=>props.justifyContent};
align-items:${(props)=>props.alignItems};
padding:${(props)=>props.padding};
gap:${(props)=>props.gap};
margin:${(props)=>props.margin};
opacity:${(props)=>props.opacity};

@media only screen and (min-width:601px){
    gap:${(props)=>props.gap};
    
   
}
@media only screen and (max-width:600px){
    gap:${(props)=>props.gap};
    flex-direction:column;
  
   justify-content:center;
    
}
`;

export const Nav = style.nav`
    width:${(props)=>props.width};
  
    flex:${(props)=>props.flex};
    display:${(props)=>props.display};
    justify-content:${(props)=>props.justifyContent};
    background-color:${(props)=>props.backgroundColor};
    box-sizing:border-box;
   
`;