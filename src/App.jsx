import './App.scss'
import { UAProvider } from './providers/ua'
import { Index } from './pages/Index'

function App() {

  return (
    <>
      <UAProvider>
        <Index />
      </UAProvider>
    </>
  )
}

export default App
