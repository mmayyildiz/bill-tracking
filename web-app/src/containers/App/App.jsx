import React from 'react'
import { Provider } from 'react-redux'
import Dashboard  from '../Dashboard/Dashboard';
import AddPayment  from '../../components/AddPayment/AddPayment';
import  UpdatePayment  from '../../components/UpdatePayment/UpdatePayment';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import store from '../../store/store'

export default () => (
  <Provider store={store}>
    <Router>
    <div className="app">
      <Switch>
        <Route exact path="/" component = { Dashboard } />
        <Route exact path="/addPayment" component={ AddPayment } />
        <Route exact path="/updatePayment/:id" component={ UpdatePayment } />
      </Switch>
    </div>
    </Router>
  </Provider>
)
