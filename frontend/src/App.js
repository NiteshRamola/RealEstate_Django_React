import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import ListingDetail from './screens/ListingDetail'
import Listings from './screens/Listings'
import Register from './screens/Register'
import Login from './screens/Login'
import NotFound from './components/NotFound'
import Layout from './hocs/Layout'
import PrivateRoute from './components/PrivateRoute'
import { Provider } from 'react-redux'
import store from './Redux/store'
import Footer from './components/Footer'
import './sass/main.scss'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/listings' component={Listings} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <PrivateRoute path='/listing/:id' component={ListingDetail} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
      <Footer />
    </Provider>
  )
}

export default App
