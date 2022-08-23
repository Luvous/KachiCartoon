import React from 'react';
import NavBar from '../../components/NavBar';
import { useParams } from 'react-router-dom';
import { getComics } from '../../Data';
import NotFound from '../Misc/NotFound';

function IndividualComic() {
    let { comicId } = useParams();
    let parsedComic = getComics().find((i) => i.id == comicId);

    if (parsedComic == undefined) {
        return <NotFound />
    }

    return (
        <div>
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