import React from 'react';

import { Router } from '@reach/router';

import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Image from 'src/components/Image';
import Images from 'src/components/Images';
import Menu from 'src/components/Menu';

export default class App extends React.PureComponent {

    render() {
        return <React.Fragment>
            <Header/>
            <Menu/>
            <Router>
                <Home path="/"/>
                <Images path="/images" animal="dog"/>
                <Image path="/image/:id" animal="dog"/>
            </Router>
            <Footer/>
        </React.Fragment>;
    }

}
