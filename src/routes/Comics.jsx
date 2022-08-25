import React, {useEffect, useState} from 'react';
import { Link, Outlet } from "react-router-dom";
import NavBar from '../components/NavBar';
// import { getComics } from '../Data';
import Footer from '../components/Footer';
import axios from 'axios';

function Comics() {

    // const comicsData = getComics();

    const [comics, getComics] = useState()

    useEffect(()=>{
        axios.get('http://localhost:1337/api/comics/').then((response)=>{
            getComics(response.data)
        })
    },[])

    if (!comics) return null

    return (
        <section>
            <NavBar currentPath="comics" />
            <div className='comics-container'>
                {comics.data.map((i) => (
                    <Link to={`/comics/${i.id}`} className='covers-items' key={i.id}>
                        <img src={i.src} alt='' />
                        <p>{i.attributes.title}</p>
                    </Link>
                ))}
            </div>
            <Outlet />
            <Footer />
        </section>
    )
}

export default Comics