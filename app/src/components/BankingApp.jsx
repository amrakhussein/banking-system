import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import { Transactions } from '../pages/Transactions'
import { UserManager } from '../pages/UserManager'
import './App.css'
import UserDetail from './UserDetail'

function BankingApp() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/users' element={<UserManager />} />
      <Route exact path='/transactions' element={<Transactions />} />
      <Route path='/:id' element={<UserDetail />} />
    </Routes>
  )
}

export default BankingApp
