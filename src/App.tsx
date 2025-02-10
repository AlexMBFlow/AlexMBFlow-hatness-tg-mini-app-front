import { Route, Routes } from 'react-router'
import './App.css'
import { ProductsPage } from './pages/ProductsPage'
import { Container } from './components/Container/Container'

function App() {
  return (
      <Container>
        <Routes>
          <Route index element={<ProductsPage />} />
        </Routes>
      </Container>
  )
}

export default App
