import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

import AccountContainer from './components/AccountContainer'

function App() {
  const [count, setCount] = useState(0) 

  return (
    <div>
      <div>
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
    
  
  )
}

export default App
