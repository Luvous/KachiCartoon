import React, { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import NavBar from '../components/NavBar';
// import { getComics } from '../Data';
import Footer from '../components/Footer';
import axios from 'axios';
import DotWaves from './Misc/DotWaves';

function Comics() {

    // const comicsData = getComics();

    const [comics, getComics] = useState()

    useEffect(() => {
        axios.get('http://localhost:1337/api/comics?populate=*')
            .then((response) => {
                getComics(response.data)
            })
    }, [])

    return (
        <section>
            <NavBar currentPath="comics" />
            <div className='comics-container'>
                {!comics ?
                    <div style={{
                        height: '60vh',
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignContent: 'space-between',
                        paddingTop: '10rem'
                    }}>
                        <DotWaves />
                    </div> :
                    comics.data.map((i) => (
                        <Link to={`/comics/${i.id}`} className='covers-items' key={i.id}>
                            <img loading="lazy" src={'https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1661457196/' + i.attributes.cover.data.attributes.hash} alt='' />
                            <p>{i.attributes.title}</p>
                        </Link>
                    ))
                }
            </div>
            <Outlet />
            <Footer />
        </section>
    )
}

export default Comics