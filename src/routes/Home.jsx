import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from "framer-motion";
import axios from 'axios';
import { Icon } from '@iconify/react';

import Cloud01 from '../resources/svgs/Cloud01.svg';
import Cloud02 from '../resources/svgs/Cloud02.svg';
import Cloud03 from '../resources/svgs/Cloud03.svg';
import Line1st from '../resources/svgs/1stLine.svg';
import Line2nd from '../resources/svgs/2ndLine.svg';
import PenTlick01 from '../resources/svgs/PenTlick01.svg';
import PenTlick02 from '../resources/svgs/PenTlick02.svg';
import Stars from '../resources/svgs/Stars.svg';
import DotWaves from './Misc/DotWaves';


function Home() {
    const { scrollYProgress } = useScroll()
    const scaleNeg = useTransform(scrollYProgress, [0, 1], [200, -400]);
    const scalePos = useTransform(scrollYProgress, [0, 1], [-400, 200]);
    const scaleStar = useTransform(scrollYProgress, [0, 1], [-200, 100]);
    const scaleLines = useTransform(scrollYProgress, [0, 1], [20, -300]);

    const [igFeed, getFeed] = useState();

    useEffect(() => {
        axios.get('https://graph.instagram.com/me/media?limit=12&fields=id,media_url,permalink&access_token=')
            .then((response) => {
                getFeed(response.data)
                console.log(response.data);
            })
    }, [])


    const IMAGES =
        [
            {
                id: 0,
                src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1640166181/MatiasVarela/iv1iod5cu8ovrz9bdfcl.jpg",
                thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638133328/MatiasVarela/iv1iod5cu8ovrz9bdfcl.jpg",
                caption: "Spider-Man No Way Home"
            },
            {
                id: 1,
                src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638133328/MatiasVarela/zpgjbnc0ycrsqse07bpx.png",
                thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638133328/MatiasVarela/zpgjbnc0ycrsqse07bpx.png",
                caption: "Cimarrón"
            },
            {
                id: 2,
                src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638319791/MatiasVarela/aiphx0el9vo5idyzo8bm.png",
                thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638319791/MatiasVarela/aiphx0el9vo5idyzo8bm.png",
                caption: "Asadito"
            },
            {
                id: 3,
                src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638319963/MatiasVarela/yba2hrndax0nkvwkcawm.jpg",
                thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638319963/MatiasVarela/yba2hrndax0nkvwkcawm.jpg",
                caption: "Pareja campestre",
            },
            {
                id: 4,
                src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638319824/MatiasVarela/gqqtum92oxkdm8ztwe93.jpg",
                thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638319824/MatiasVarela/gqqtum92oxkdm8ztwe93.jpg",
                tags: [{ value: "Diseño de personaje" }],
                caption: "Diseño personaje"
            },
            {
                id: 5,
                src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638319866/MatiasVarela/txmv3j6wdpzru074cb9r.jpg",
                thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638319824/MatiasVarela/txmv3j6wdpzru074cb9r.jpg",
                tags: [{ value: "Diseño de personaje" }],
                caption: "Diseño personaje"
            },
            {
                id: 6,
                src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638319921/MatiasVarela/j674vaqdj5bcl42pyfwy.png",
                thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638319824/MatiasVarela/j674vaqdj5bcl42pyfwy.png",
                caption: "Posing"
            }
        ]


    return (
        <section>
            <div className='homeSec' >
                <div className='mainTitle'>
                    <h1>KACHI<br /><span className='secondH1'>CARTOON</span></h1>
                </div>
                <NavBar currentPath="home" />
                <img style={{
                    position: 'absolute',
                    right: 0,
                    top: '3rem',
                    width: '13%',
                    opacity: '40%'
                }} src={Cloud01} alt='svg' />
                <motion.div style={{ translateY: scaleLines }}>
                    <img style={{
                        position: 'absolute',
                        width: '100%',
                        left: 0
                    }} src={Line1st} alt='svg' />
                </motion.div>
                <section id='about' style={{ margin: '1rem 3.5rem' }}>
                    <h2>Lo que hago...<img style={{
                        position: 'absolute',
                        translate: '-2.2rem -.5rem',
                        width: '2.2rem',
                        opacity: '90%'
                    }} src={PenTlick01} alt='svg' /></h2>

                    <div className='about-container'>
                        <p>Scelerisque id velit pellentesque tellus libero. In sed sed quam ultricies. Phasellus vitae nulla eu, diam.Scelerisque id velit pellentesque tellus libero. In sed sed quam ultricies. Phasellus vitae nulla eu, diam.Scelerisque id velit pellentesque tellus libero. In sed sed quam ultricies. Phasellus vitae nulla.</p>
                        <motion.div style={{ translateY: scaleStar }} >
                            <img style={{
                                position: 'absolute',
                                translate: '-35rem 2rem',
                                width: '4rem',
                                opacity: '65%'
                            }} src={Stars} alt='svg' />
                        </motion.div>
                    </div>
                    <img style={{
                        position: 'absolute',
                        left: 0,
                        width: '13%',
                        opacity: '40%'
                    }} src={Cloud02} alt='svg' />
                </section>
                <motion.div style={{ translateY: scaleLines }}>
                    <img style={{
                        position: 'absolute',
                        width: '100%',
                        left: 0
                    }} src={Line2nd} alt='svg' />
                </motion.div>
                <section id='recentwork'>
                    <h2 style={{ marginLeft: '3.5rem' }}>
                        <img style={{
                            position: 'absolute',
                            translate: '-2.5rem .7rem',
                            width: '2.2rem',
                            opacity: '90%'
                        }} src={PenTlick02} alt='svg' />Recientes...</h2>
                    {!igFeed ?
                        <div className='ig-grid-first' style={{ display: 'flex', left: 'auto', width:'100%',justifyContent: 'center' }}>
                            <DotWaves/>
                        </div>
                        :
                        <motion.div style={{ translateX: scalePos }} className='ig-grid-first'>

                            {igFeed.data.map((i) => (
                                <a href={i.permalink} target='_blank' rel='noreferrer' key={i.id} >
                                    <img src={i.media_url} alt='' />
                                    <Icon style={{ position: 'absolute', translate: '-3rem 1.5rem', filter: 'drop-shadow(0 0 8px black)', zIndex: 2, color: '#ede9e0' }} icon="ant-design:instagram-filled" width={25} />
                                </a>
                            ))}

                        </motion.div>
                    }

                    <motion.div style={{ translateX: scaleNeg }} className='portfolio-grid-second'>
                        {IMAGES.map((i) => (
                            <img src={i.src} key={i.id} alt='' />
                        ))}
                        {IMAGES.map((i) => (
                            <img src={i.src} key={i.id} alt='' />
                        ))}
                    </motion.div>
                </section>
                <img style={{
                    position: 'relative',
                    marginLeft: '88%',
                    bottom: '2rem',
                    width: '13%',
                    opacity: '40%'
                }} src={Cloud03} alt='svg' />
            </div>
            <Footer />
        </section>
    )
}

export default Home