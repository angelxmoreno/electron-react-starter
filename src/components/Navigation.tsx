import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => (
    <ul className="navigation">
        <li><Link className="App-link" to="/">Home</Link></li>
        <li><Link className="App-link" to="/counter">Counter</Link></li>
        <li><Link className="App-link" to="/fake">Fake</Link></li>
    </ul>
);

export default Navigation