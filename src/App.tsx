import Routes from "./routes/routes"
import { LoadingProvider } from "./context/LoadingContext"

function App() {

  return (
    <LoadingProvider>
      <Routes />
    </LoadingProvider>
  )
}

export default App
