import { useState } from 'react'
import {Navbar} from './compos/Navbar'
import {BodySection} from './compos/BodySection'
import {Section2} from './compos/Section2'
import {Section3} from './compos/Section3'
import {Section4} from './compos/Section4'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <BodySection />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  )
}

export default App
