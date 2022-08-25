import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { useParams } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { NavigationProgress, setNavigationProgress } from '@mantine/nprogress';
import Footer from '../../components/Footer';
import axios from 'axios';

function IndividualComic() {
    let { comicId } = useParams();

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

    const [indComic, getComic] = useState()

    useEffect(()=>{
        axios.get('http://localhost:1337/api/comics/'+comicId+'?populate=*')
        .then((response)=>{
            getComic(response.data)
        })
    },[])
    
    console.log(indComic)
    if (!indComic) return null

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
            }}>{indComic.data.attributes.title}</h4>
            <p style={{
                fontSize: '1.5rem',
                textAlign: 'center',
                margin: '2rem'
            }}>Paginas: {indComic.data.attributes.pages.data.length}</p>
            <div className='pages-container'>
                {indComic.data.attributes.pages.data.map((page) => (
                    <img className='comic-singlepage' src={'https://res.cloudinary.com/tomhugin0000/image/upload/q_50/v1661457891/'+page.attributes.hash} key={page.id} alt=''/>
                ))}
            </div>
            <br />
            <br />
            <br />
            <Footer />
        </div> 
    )
}

export default IndividualComic