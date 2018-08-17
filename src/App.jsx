import React from 'react';

import ContentContainer from 'src/components/ContentContainer';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Menu from 'src/components/Menu';

export default class App extends React.PureComponent {

    render() {
        return <React.Fragment>
            <Header/>
            <Menu/>
            <ContentContainer/>
            <Footer/>
        </React.Fragment>;
    }

}
