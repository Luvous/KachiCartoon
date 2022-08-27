import React from 'react'

function Footer() {
    return (
        <div className='footer' style={{display: 'flex', flexDirection: 'column', padding: '3rem 7rem', background: 'black' }}>
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom:'4rem'}}>
                <div style={{ display: 'flex', flexDirection: 'column', marginRight:'3rem'}}>
                    <h3>OVERVIEW</h3>
                    <p>Home</p>
                    <p>Comics</p>
                    <p>Portfolio</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', margin:'0 3rem'}}>
                    <h3>FOLLOW</h3>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>DeviantArt</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', margin:'0 3rem'}}>
                    <h3>LEGAL</h3>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                    <h4>Buenos Aires</h4>
                    <h4>Argentina</h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft:'auto'}}>
                    <h1 style={{textAlign:'right',fontSize:'3rem', lineHeight:'30px', marginTop:'19px'}}>KACHI<br/><span style={{fontSize:'1.85rem'}}>CARTOON</span></h1>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between', lineHeight:'25px'}}>
                <p>matiaslorem@ipsum.com<br/><span>©{new Date().getFullYear()} All Rights Reserved</span></p>
                <p style={{textAlign:'right'}}>Diseño y Desarrollo<br/><span style={{fontWeight:'500'}}>Tom Varela</span></p>
            </div>
        </div>
    )
}

export default Footer