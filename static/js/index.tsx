import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import './index.scss'
import 'utils/i18n'
import { BASEDIR } from 'utils'
import { AuthProvider } from 'contexts'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router basename={BASEDIR}>
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
