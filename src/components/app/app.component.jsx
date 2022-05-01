import * as React from "react";
import { NavLink, Routes, Route } from "react-router-dom";

// import child components
import { Counter } from '../counter';
import { Post } from '../post';

export class App extends React.Component {
  constructor() {
    console.log( 'App.constructor()' );

    super();
  }

  render() {
    return (
      <div className="ui-app">
        {/* <Counter name="Monica Geller" /> */}
        <NavLink
          className={({isActive}) => `ui-app__navigation__link${isActive ? "--active" : ""}`}
          to='/'
          end={true}
        >Counter</NavLink>

        <NavLink
          className={({isActive}) => `ui-app__navigation__link${isActive ? "--active" : ""}`}
          to='/post'
          end={true}
        >Post</NavLink>

        <Routes>
          <Route
            path='/'
            exact
            element={ <Counter name='Monica Geller'/> }
          />

          <Route
            path='/post'
            exact
            element={ <Post /> }
          />
        </Routes>
      </div>
    );
  }
}
