import React from 'react';
import { Link } from 'react-router-dom';

import './Topbar.css';

const Topbar = () => {
    return (
        <div className="Topbar w100pc">
            <div className="frow fjcsb faic w80pc ma">
                <h2><Link to="/" className="link">Asteroids</Link></h2>
                <Link to="/" className="link">Search</Link>
            </div>
        </div>
    );
};

export default Topbar;