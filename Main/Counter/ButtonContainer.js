// @flow

import React from 'react';
import ButtonMain from './ButtonMain';
import ButtonSub from './ButtonSub';

export default function ButtonContainer(props) {

    return <article>
            <ButtonMain render={ count => (
                <ButtonSub count={ count } />
            ) } />
            </article>
}