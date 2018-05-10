import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';
import NoMatchError from './components/NoMatchError/NoMatchError';
import {BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <ol style={{textAlign: 'left'}}>
            <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
            <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
            <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
            <li>Pass the course ID to the "Course" page and output it there</li>
            <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li>Load the "Course" component as a nested component of "Courses"</li>
            <li>Add a 404 error page and render it for any unknown routes</li>
            <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>
          <nav>
            <ul style={{listStyle: 'none', margin: 'auto', padding: '0'}}>
              <li style={{margin: '10px', display: 'inline-block'}}>
                <NavLink to='/courses'>Courses</NavLink>
              </li>
              <li style={{margin: '10px', display: 'inline-block'}}>
                <NavLink to='/users'>Users</NavLink>
              </li>
            </ul>
          </nav>

          {/*adding routes to create 'different' pages'.  we created the courses and users pages.  But this wont work fully. you need to activate the Router from create router by importing the BrowserRouter.*/}
          {/*adding route without a path creates a 'catch all'*/}
          <Switch>
          <Route path="/users" component={Users} />
          {/*<Route path="/courses/:courseId" component={Course} />*/}
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses" />
          <Route component={NoMatchError}/>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
