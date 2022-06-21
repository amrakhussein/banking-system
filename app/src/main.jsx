import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Container } from 'react-bootstrap'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import TheFooter from './components/AppLayout/TheFooter'
import TheHeader from './components/AppLayout/TheHeader'
import BankingApp from './components/BankingApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Container fluid>
        <TheHeader />
        <BankingApp />
        <TheFooter />
      </Container>
    </Router>
  </React.StrictMode>
)
