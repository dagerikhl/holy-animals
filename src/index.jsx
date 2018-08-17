import React from 'react';
import ReactDOM from 'react-dom';

import 'css/reset';
import 'css/layout';
import 'css/style';

import App from 'src/App';

const target = document.querySelector('#app');

ReactDOM.render(<App/>, target);
