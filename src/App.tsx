
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import One from './pages/One/One'
import Two from './pages/Two/Two'
import Three from './pages/Three/Three'
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element = { <Layout /> }>
          <Route path="/" element={<Navigate to="/one" replace />} />
          <Route path="/one" element={ <One /> }/>
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={ <Three />} />
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
