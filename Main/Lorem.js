// @flow

import React, { useContext, lazy, Suspense, useState, useEffect } from 'react';
import { themes, ThemeContext } from './Utilities/Themes';
const Ipsum2 = lazy( () => import( './Lorem/Ipsum2' ) );


export default function Lorem(props) {

    const[text, setText] = useState("");

    useEffect( () => {
        import('./Lorem/Ipsum1').then( ipsu => {
           setText(ipsu.Ipsum1());
        })
    }, [])

    const theme = useContext(ThemeContext);

    return <article style={ themes[theme] }>
        <article>{ text }</article>
        <article>
            <Suspense fallback={<> Loading... </>}>
                <Ipsum2 />
            </Suspense>
        </article>
    </article>
}