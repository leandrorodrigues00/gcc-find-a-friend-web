import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/global'
import { LocationProvider } from './context/LocationContext'
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <BrowserRouter>
        <LocationProvider>
          <AuthProvider>
            <ToastContainer />
            <Router />
          </AuthProvider>
        </LocationProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default App
