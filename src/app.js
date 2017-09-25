import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store from './store'
import { Home, About, Works, Contact, Ferie, Hvalpe, Traning, Priser } from './components/containers'
import { Main } from './components/layouts'


const app = (
  <Provider store = { store.configureStore() }>

      <Router history={browserHistory}>

        <Route path="/" component={Main}>
          <IndexRoute component={Home}></IndexRoute>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/hundeluftning" component={Works}></Route>
            <Route path="/hundepension" component={Ferie}></Route>
            <Route path="/hvalpe" component={Hvalpe}></Route>
            <Route path="/traning" component={Traning}></Route>
            <Route path="/priser" component={Priser}></Route>





        </Route>

      </Router>

  </Provider>
)
ReactDOM.render(app, document.getElementById('root'))
