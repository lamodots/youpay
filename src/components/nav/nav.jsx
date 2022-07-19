import React, {useState} from 'react';

const NavBar = () => {
    const [showLinks, setShowLinks]=useState(false);
  return (
    <div className='Navbar'>
        <div className="leftside">
           <div className="links" id={showLinks ? "hidden" : ""}>
           <a href='/home'>Home</a>
            <a href='/profile'>profile</a>
            <a href='/aboutus' >About us</a>
            <a href='/contact'>Contact</a>
           </div>
           <button onClick={()=>setShowLinks(!showLinks)}><span class="material-symbols-outlined">menu</span></button>
        </div>
        <div className="rightside">Logo</div>
    </div>
  )
}

export default NavBar