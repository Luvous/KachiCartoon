import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Home() {
    return (
        <section>
            <div className='homeSec' >
                <div className='mainTitle'>
                    <h1>MATIAS</h1>
                    <h1>VARELA</h1>
                </div>
                <NavBar currentPath="home" />
                <section id='about'>
                    <h2>Sobre mí...</h2>
                    <div className='about-container'>
                        <p>Scelerisque id velit pellentesque tellus libero. In sed sed quam ultricies. Phasellus vitae nulla eu, diam.</p>
                    </div>
                </section>
                <section id='recentwork'>
                    <h2>Trabajos recientes...</h2>
                </section>
            </div>
            <Footer/>
        </section>
    )
}

export default Home