import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import RecyclingCenters from './pages/RecyclingCenters'
import WasteGuide from './pages/WasteGuide'
import Alerts from './pages/Alerts'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/recycling-centers" element={<RecyclingCenters />} />
          <Route path="/waste-guide" element={<WasteGuide />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

