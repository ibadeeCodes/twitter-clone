import React from 'react'
import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import Widgets from './components/Widgets/Widgets'

function App() {
  return (
    <div className='app'>
      {/* Sidebar */}

      <Sidebar />

      {/* feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  )
}

export default App
