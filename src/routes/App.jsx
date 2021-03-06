import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// COMPONENTS
import { Layout } from '../components/Layout'

// PAGES
import { Home } from '../containers/Home'
import { Checkout } from '../containers/Checkout'
import { Information } from '../containers/Information'
import { Payment } from '../containers/Payment'
import { Success } from '../containers/Success'
import { NotFound } from '../containers/NotFound'

// STATE
import { AppContext } from '../context/AppContext'
import { useInitialState } from '../hooks/useInitialState'

// STYLES
import '../styles/components/App.css'

function App() {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export { App };