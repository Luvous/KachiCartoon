import React from 'react'
import NavBar from '../components/NavBar';

function Home() {
    return (
        <div className='homeSec'>
            <section>
            <div className='mainTitle'>
                <h1>MATIAS</h1>
                <h1>VARELA</h1>
            </div>
                <NavBar currentPath="home"/>
            </section>
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
    )
}

export default Home