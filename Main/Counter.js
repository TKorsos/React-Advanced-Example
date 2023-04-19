// @flow

import React, { useContext } from 'react';
import { themes, ThemeContext } from './Utilities/Themes';
import ButtonContainer from './Counter/ButtonContainer';

export default function Counter(props) {

    const theme = useContext(ThemeContext);

    return <article style={ themes[theme] } id='counter'>
            <h2>Like</h2>
            <ButtonContainer />
            <h2>Dislike</h2>
            <ButtonContainer />
        </article>
}