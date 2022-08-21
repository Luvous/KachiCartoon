import React from 'react';
import { Link, Outlet } from "react-router-dom";
import NavBar from '../components/NavBar';
import { getComics } from '../Data';

function Comics() {

    const comicsData = getComics();

    return (
        <section>
            <NavBar currentPath="comics" />
            <div className='comics-container'>
                {comicsData.map((i) => (
                    <Link to={`/comics/${i.id}`} className='covers-items' key={i.id}>
                        <img src={i.src} />
                        <p>{i.title}</p>
                    </Link>
                ))}
            </div>
            <Outlet />
        </section>
    )
}

export default Comics