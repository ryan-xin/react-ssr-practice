import * as React from "react";
import { NavLink, S } from "react-router-dom";

// import child components
import { Counter } from '../counter';
// import { Post } from '../post';

export class App extends React.Component {
  constructor() {
    console.log( 'App.constructor()' );

    super();
  }

  render() {
    return (
      <div className="ui-app">
        <Counter name="Monica Geller" />
        {/* <NavLink
          className={isActive =>
            isActive ? 'ui-app__navigation__link--active' : 'ui-app__navigation__link'
          }
          to='/'
          exact="true" // When true, the active class/style will only be applied if the location is matched exactly.
        >Counter</NavLink>

        <NavLink
          className={isActive =>
            isActive ? 'ui-app__navigation__link--active' : 'ui-app__navigation__link'
          }
          to='/post'
          exact="true"
        >Post</NavLink> */}

      {/* <Switch>
        <Route
          path='/'
          exact
          render={ () => <Counter name='Monica Geller'/> } // Use "render" when using inline function
        />

        <Route
          path='/post'
          exact
          component={ Post }
        />
      </Switch> */}
      </div>
    );
  }
}
