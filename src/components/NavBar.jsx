import React, { useState } from 'react';
import NavTip from '../resources/svgs/NavTip.svg';
import Twist01 from '../resources/svgs/Twist01.svg';
import Twist02 from '../resources/svgs/Twist02.svg';
import Twist03 from '../resources/svgs/Twist03.svg';
import Twist04 from '../resources/svgs/Twist04.svg';
import { Burger } from '@mantine/core';


function NavBar(props) {
    const [opened, setOpened] = useState(false);

    return (
        <div className='navMobile'>
            <Burger
            style={{marginRight:'5%', zIndex:70}}
                color='#343134'
                opened={opened}
                size={40}
                onClick={() => setOpened((o) => !o)}
            />
            {props.currentPath !== "home" && <h1>KC</h1>}
            <div className={`${props.currentPath === "home" ? "NavBar" : "defaultNav"} ${opened ? "open-nav" : "close-nav"}`} >
                {props.currentPath === "home" && <img className='navtip' src={NavTip} alt='svg' />}
                {props.currentPath === "home"
                    ?
                    <i>
                        <h3 className='currentLink'>Inicio</h3>
                        <img className='twist' src={Twist01} alt='twist01' />
                    </i>
                    :
                    <a className='navitem' href='/'><h3>Inicio</h3></a>}

                {props.currentPath === "comics"
                    ?
                    <i>
                        <h3 className='currentLink'>Cómics</h3>
                        <img className='twistDefault' src={Twist02} alt='twist01' />
                    </i>
                    :
                    <a className='navitem' href='/comics'><h3>Cómics</h3></a>}
                {props.currentPath === "portfolio"
                    ?
                    <i>
                        <h3 className='currentLink'>Portfolio</h3>
                        <img className='twistDefault' src={Twist03} alt='twist01' />
                    </i>
                    :
                    <a className='navitem' href='/portfolio'><h3>Portfolio</h3></a>}

                {props.currentPath === "blog"
                    ?
                    <i>
                        <h3 className='currentLink'>Blog</h3>
                        <img className='twistDefault' src={Twist04} alt='twist01' />
                    </i>
                    :
                    <a className='navitem' href='/blog'><h3>Blog</h3></a>}

                {props.currentPath === "contact"
                    ?
                    <i className='cont'>
                        <h3 className='currentLink'>Contacto</h3>
                        <img className='twistDefault' src={Twist02} alt='twist01' />
                    </i>
                    :
                    <a className='navitem cont' href='/contact'><h3>Contacto</h3></a>}
            </div>
        </div>
    )
}

export default NavBar