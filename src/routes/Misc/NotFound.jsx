import React from 'react';
import NavBar from '../../components/NavBar';
import { Button } from '@mantine/core';
import NavTip from '../../resources/svgs/NavTip.svg';
import NotFoundIllustration from '../../resources/svgs/NotFound.svg';

function NotFound() {
    return (
        <section>
            <NavBar />
            <div className='not-found-container'>
                <img style={{
                    marginLeft: '2rem',
                    marginTop: -45
                }} className='navtip' src={NavTip} alt='svg' />
                <div style={{ width: 900 }}>
                    <h1>Página no encontrada</h1>
                    <h2>La página que buscas no existe o no está disponible.</h2>
                    <a href='/'>
                        <Button radius="md" size="lg"
                            styles={(theme) => ({
                                root: {
                                    backgroundColor: '#343134',
                                    width: 550,
                                    border: 20,
                                    height: 60,
                                    marginTop: 100,
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    fontSize: '1.7rem',
                                    fontWeight: 800,
                                    '&:hover': {
                                        backgroundColor: theme.fn.lighten('#343134', 0.05),
                                    }
                                }
                            })}
                        >
                            Inicio
                        </Button>
                    </a>
                </div>
                <img style={{
                    position: 'absolute',
                    top: 'auto',
                    marginLeft: '65%',
                    marginTop: '-18rem'
                }} src={NotFoundIllustration} alt='svg' />
            </div>
        </section>
    )
}

export default NotFound