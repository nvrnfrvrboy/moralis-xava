import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import '@themesberg/flowbite'
import { MoralisProvider } from 'react-moralis'

ReactDOM.render(
  <MoralisProvider
    appId='JuSjbm0KKrkouHLD6iwXTn3sPfnhlCnOVXd7dGeE'
    serverUrl='https://mbflner0drfa.usemoralis.com:2053/server'
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MoralisProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
