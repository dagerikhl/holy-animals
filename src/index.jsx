import React from 'react';
import ReactDOM from 'react-dom';

import 'css/layout.css';
import 'css/style.css';

class App extends React.Component {

    render() {
        return <React.Fragment>
            <h1>Welcome friend!</h1>
            <div className="message">
                Stay a while, and listen.
            </div>
        </React.Fragment>;
    }

}

const target = document.querySelector('#app');

ReactDOM.render(<App/>, target);
