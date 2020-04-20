import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="NotFound w80pc ma">
            <h1>Asteroid Not Found</h1>
            <Link to="/" className="link button">Go Home</Link>
        </div>
    );
};

export default NotFound;