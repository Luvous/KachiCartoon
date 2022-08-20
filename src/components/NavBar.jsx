import React from 'react';
import NavTip from '../resources/svgs/NavTip.svg';
import Twist01 from '../resources/svgs/Twist01.svg';
import Twist02 from '../resources/svgs/Twist02.svg';
import Twist03 from '../resources/svgs/Twist03.svg';
import Twist04 from '../resources/svgs/Twist04.svg';

function NavBar(props) {
    return (
        <div className={`${props.currentPath === "home" ? "NavBar" : "defaultNav"}`}>
            {props.currentPath !== "home" && <h1>MV</h1>}
            <img className='navtip' src={NavTip} alt='svg' />
            {props.currentPath === "home" ? <i> <h3 className='currentLink'>Home</h3> <img className='twist' src={Twist01} alt='twist01'/> </i> : <a className='navitem' href='/'><h3>Home</h3></a>}
            {props.currentPath === "comics" ? <i> <h3 className='currentLink'>Cómics</h3> <img className='twistDefault' src={Twist02} alt='twist01'/> </i> : <a className='navitem' href='/comics'><h3>Cómics</h3></a>}
            {props.currentPath === "portfolio" ? <i> <h3 className='currentLink'>Portfolio</h3> <img className='twistDefault' src={Twist03} alt='twist01'/> </i> : <a className='navitem' href='/portfolio'><h3>Portfolio</h3></a>}
            {props.currentPath === "blog" ? <i> <h3 className='currentLink'>Blog</h3> <img className='twistDefault' src={Twist04} alt='twist01'/> </i> : <a className='navitem' href='/blog'><h3>Blog</h3></a>}
            {props.currentPath === "contact" ? <i> <h3 className='currentLink'>Contacto</h3> <img className='twistDefault' src={Twist02} alt='twist01'/> </i> : <a className='navitem' href='/contact'><h3>Contacto</h3></a>}
        </div>
    )
}

export default NavBar