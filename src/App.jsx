import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CCColors from './ClassComps/CCColors'
import CCTest from './ClassComps/CCTest'
import CCTable from './ClassComps/CCTable'

function App() {

  return (
    <>
      <CCColors />
      <CCTest/>
      <CCTable/>
    </>
  )
}

export default App
