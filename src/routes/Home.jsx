import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from "framer-motion";
import Cloud01 from '../resources/svgs/Cloud01.svg';
import Cloud02 from '../resources/svgs/Cloud02.svg';
import Cloud03 from '../resources/svgs/Cloud03.svg';

function Home() {


    const { scrollYProgress } = useScroll()
    const scaleNeg = useTransform(scrollYProgress, [0, 1], [200, -500]);
    const scalePos = useTransform(scrollYProgress, [0, 1], [-500, 200]);


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
                    <h1>MATIAS<br /><span className='secondH1'>VARELA</span></h1>
                </div>
                <NavBar currentPath="home" />
                <img style={{
                    position: 'absolute',
                    right: 0,
                    top: '3rem',
                    width: '13%',
                    opacity: '40%'
                }} src={Cloud01} alt='svg' />
                <section id='about' style={{margin:'1rem 3.5rem'}}>
                    <h2>Sobre mí...</h2>
                    <div className='about-container'>
                        <p>Scelerisque id velit pellentesque tellus libero. In sed sed quam ultricies. Phasellus vitae nulla eu, diam.</p>
                    </div>
                    <img style={{
                        position: 'absolute',
                        left: 0,
                        width: '13%',
                        opacity: '40%'
                    }} src={Cloud02} alt='svg' />
                </section>
                <section id='recentwork'>
                    <h2 style={{marginLeft:'3.5rem'}}>Recientes...</h2>

                    <motion.div style={{ translateX: scalePos }} className='ig-grid-first'>
                        {IMAGES.map((i) => (
                            <img src={i.src} key={i.id} alt='' />
                        ))}
                        {IMAGES.map((i) => (
                            <img src={i.src} key={i.id} alt='' />
                        ))}
                    </motion.div>

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
                    bottom:'2rem',
                    width: '13%',
                    opacity: '40%'
                }} src={Cloud03} alt='svg' />
            </div>
            <Footer />
        </section>
    )
}

export default Home