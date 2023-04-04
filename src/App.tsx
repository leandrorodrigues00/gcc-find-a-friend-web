import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/global'
import { LocationProvider } from './context/LocationContext'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <LocationProvider>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </LocationProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default App
