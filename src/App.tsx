import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/global'
import { LocationProvider } from './context/LocationContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <LocationProvider>
          <Router />
        </LocationProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default App
