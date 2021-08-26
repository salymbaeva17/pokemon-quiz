import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/cat">Cat</Link>
                <Link className="nav-link" to="/pokemon">Pokemon</Link>
                <Link className="nav-link" to="/pokemongame">PokeGame</Link>
                <Link className="nav-link" to="/starwars">StarWars</Link>
                <Link className="nav-link" to="/people">People</Link>
                <Link className="nav-link" to="/users">Users</Link>
                <Link className="nav-link" to="/meals">Meals</Link>
            </nav>
        </header>
    );
};

export default Header;