import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import NotFound from './Misc/NotFound'; //? 404 Page

import Home from './Home';
import Comics from './Comics';
import Comic from './Dynamics/Comic';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import Store from './Store';

const Webpages = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={Home()} />
                <Route exact path="/comics" element={Comics()} >
                    <Route path=":comicId" element={Comic()} />
                </Route>
                <Route exact path="/portfolio" element={Portfolio()} />
                <Route exact path="/blog" element={Blog()} />
                <Route exact path="/contact" element={Contact()} />
                <Route exact path="/store" element={Store()} />
                <Route exact path="*" element={NotFound()} /> //? Handles 404 page targeting all non-specified routes
            </Routes>
        </Router>
    );
};

export default Webpages;
