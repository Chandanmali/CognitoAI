import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Sidebar/Main/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <Main />
    </>
  )
}

export default App
