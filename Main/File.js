// @flow

import React, { createRef, useContext } from 'react';
import { themes, ThemeContext } from './Utilities/Themes';

export default function File(props) {

    const theme = useContext(ThemeContext);
    const input = createRef();

    const handleSubmit = e => {
        e.preventDefault();

        const files = input.current.files;

        if(input.current.files.length > 0) {
            alert('Sikeres feltöltés!');
            Array.from(files).forEach( file => {
                console.log(file.name);
            })
        }
        else {
            alert('A feltöltéshez válasszon ki legalább egy fájlt!');
        }
    }

    return <article style={ themes[theme] }>
        <form onSubmit={handleSubmit}>
            <fieldset className='form-reg'>
                <legend>Feltöltés</legend>
                <input type='file' ref={input} multiple />
                <input type='submit' />
            </fieldset>
        </form>
    </article>
}