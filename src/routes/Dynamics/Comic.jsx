import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { useParams } from 'react-router-dom';
import { getComics } from '../../Data';
import { MantineProvider } from '@mantine/core';
import { NavigationProgress, setNavigationProgress } from '@mantine/nprogress';

function IndividualComic() {
    let { comicId } = useParams();
    let parsedComic = getComics().find((i) => i.id == comicId);

    const handleScroll = () => {
        let scrollPercent = window.scrollY / (document.body.offsetHeight - window.innerHeight);
        let position = Math.round(scrollPercent * 99);
      
        setNavigationProgress(position)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div>
            <MantineProvider>
                <NavigationProgress />
            </MantineProvider>
            <NavBar />
            <h4 style={{
                fontSize: '4rem',
                textAlign: 'center',
                fontWeight: 700,
                marginTop: '2.5rem',
                marginBottom: '.8rem'
            }}>{parsedComic.title}</h4>
            <p style={{
                fontSize: '1.5rem',
                textAlign: 'center',
                margin: '2rem'
            }}>Paginas: {parsedComic.pages.length}</p>
            <div className='pages-container'>
                {parsedComic.pages.map((page) => (
                    <img className='comic-singlepage' src={page} />
                ))}
            </div>

        </div>
    )
}

export default IndividualComic