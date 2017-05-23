import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from 'components/Login'

const Routes = ({ store }) => (
  <Router>
    <div>
      <Route path="/signin" component={Login} />
    </div>
  </Router>
)

export default Routes
