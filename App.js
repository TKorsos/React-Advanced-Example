// @flow

import React, { Profiler } from 'react';
import './Main/Utilities/Main.css';
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from 'react-router-dom';
import { onRenderCallback } from './Main/Utilities/OnRenderCallback';
import { ThemeContext } from './Main/Utilities/Themes';
import Home from './Main/Home';
import Lorem from './Main/Lorem';
import Form from './Main/Form';
import File from './Main/File';
import Counter from './Main/Counter';
import Ajax from './Main/Ajax';
import Todos from './Main/Ajax/Todos';
import Users from './Main/Ajax/Users';

export default function App() {

  return <Profiler id="Main" onRender={onRenderCallback} >
    <ThemeContext.Provider value="light">
      <section id='main-section'>
          <BrowserRouter>
            <nav className='main-nav'>
              <Link to="/">Főoldal</Link>
              <Link to="/lorem">Lorem</Link>
              <Link to="/form">Regisztráció</Link>
              <Link to="/file">Fájlfeltöltés</Link>
              <Link to="/counter">Számoló</Link>
              <Link to="/ajax">Ajax</Link>
            </nav>
            <article id='main-article'>
              <Routes>
                <Route index element={ <Home /> } />
                <Route path="lorem" element={ <Lorem /> } />
                <Route path="form" element={ <Form /> } />
                <Route path="file" element={ <File /> } />
                <Route path="counter" element={ <Counter /> } />
                <Route path="ajax" element={ <Ajax /> } />
                <Route path="ajax/todos" element={ <Todos /> } />
                <Route path="ajax/users" element={ <Users /> } />
              </Routes>
            </article>
          </BrowserRouter>
      </section>
    </ThemeContext.Provider>
  </Profiler>
}
