import './App.css'

import logo from '../public/images/logo.svg'
import Tip from './components/Tip/Tip'
import Display from './components/Display/Display'

function App() {
  return (
    <>
      <div className="main-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="container">
        <div className="input-section">
          <Tip />
        </div>
        <div className="display-section">
          <Display />
        </div>
      </div>
    </>
  )
}

export default App
