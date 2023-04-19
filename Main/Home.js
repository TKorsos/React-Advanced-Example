// @flow

import React, { useContext } from 'react';
import { themes, ThemeContext } from './Utilities/Themes';

export default function Home(props) {
    const theme = useContext(ThemeContext);

    return <article style={ themes[theme] }> Home tartalma </article>
}