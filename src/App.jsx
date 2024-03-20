import './App.css'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import React from 'react'
import {action,originals} from './urls'
import RowPost from './components/RowPost/RowPost'
function App() {

  return (
    <>
      <div>
        <NavBar />
        <Banner />
        <RowPost url={originals} title='Netflix Originals'/>
        <RowPost url={action} title='Action' isSmall/>
      </div>
      
    </>
  )
}

export default App
