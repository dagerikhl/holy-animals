import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render() {
        return <React.Fragment>
            <h1>Hello world!</h1>
        </React.Fragment>;
    }

}

const target = document.querySelector('#app');

ReactDOM.render(App, target);
