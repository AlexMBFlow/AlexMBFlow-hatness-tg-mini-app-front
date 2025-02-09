import { Route, Routes } from 'react-router'
import './App.css'
import { ProductsPage } from './pages/ProductsPage'

function App() {
  return (
      <Routes>
        <Route index element={<ProductsPage />} />
      </Routes>
  )
}

export default App
