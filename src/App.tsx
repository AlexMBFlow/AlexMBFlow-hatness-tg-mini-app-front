import { Route, Routes } from 'react-router'
import './App.css'
import { ProductsPage } from './pages/ProductsPage'
import { Container } from './components/Container/Container'
import { Provider } from "@/components/ui/provider"
import { SnackbarProvider } from 'notistack'
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import { Footer } from './components/Footer/Footer'
function App() {
  return (
    <SnackbarProvider autoHideDuration={4000}>
      <Provider>
        <Container>
          <Routes>
            <Route index element={<ProductsPage />} />
          </Routes>
          <Footer />
        </Container>
      </Provider>
    </SnackbarProvider>
  )
}

export default App 
