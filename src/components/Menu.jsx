import React from 'react';

import { Link } from '@reach/router';

export default () => <nav>
    <h2>Menu</h2>
    <Link to="/" className="nav-link">> Home</Link>
    <Link to="/images" className="nav-link">> Images</Link>
</nav>;
