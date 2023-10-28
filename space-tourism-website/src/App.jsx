import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style.scss'
import { Home, Crew, Destination, Technology } from './pages'
import { Navbar } from './components'

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
