import React from 'react'
import ContentData from './components/Data/ContentData'
import HeaderNav from './components/Header/HeaderNav'

function App() {
  return (
    <div className='container'>
        <div className='header-nav'>
            <HeaderNav/>
        </div>
        <ContentData/>
    </div>
  )
}

export default App
