// @flow

import React, { useContext } from 'react';
import { themes, ThemeContext } from './Utilities/Themes';
import { Link } from 'react-router-dom';

export default function Ajax(props) {

    const theme = useContext(ThemeContext);

    return <>
        <nav className='main-nav'>
        <Link to="/ajax/todos">Todos</Link>
        <Link to="/ajax/users">Users</Link>
        </nav>
        <article style={ themes[theme] }>
            Ajax tartalma
        </article>
    </>
}