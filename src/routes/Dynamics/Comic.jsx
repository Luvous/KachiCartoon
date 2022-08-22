import React from 'react';
import NavBar from '../../components/NavBar';
import { useParams } from 'react-router-dom';
import { getComics } from '../../Data';
import NotFound from '../Misc/NotFound';

function IndividualComic() {
    let { comicId } = useParams();
    let parsedComic = getComics().find((i) => i.id == comicId);

    if (parsedComic == undefined){
        return <NotFound />
    }
    return (
        <div>
            <NavBar />
            <p>Comic: {parsedComic.title}</p>
            <p>Comic: {parsedComic.id}</p>
            <img src={parsedComic.src} alt='' />
        </div>
    )
}

export default IndividualComic