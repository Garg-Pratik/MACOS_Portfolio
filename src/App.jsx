import { Dock, Navbar,Welcome } from '#components'
import { Draggable } from 'gsap/all'
import _Draggable from 'gsap/Draggable'
import gsap from 'gsap'
import React from 'react'
import Terminal from '#windows'
gsap.registerPlugin(Draggable);

const App = () => {
  return (
  <main>
<Navbar/>
<Welcome/>
<Dock/>
<Terminal/>
  </main>
  )
}

export default App
