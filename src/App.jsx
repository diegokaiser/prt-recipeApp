import '@/App.scss'
import { UAProvider } from '@/providers/ua'
import { AuthProvider } from '@/providers/auth'
import { Index } from '@/pages/Index'

function App() {

  return (
    <>
      <UAProvider>
        <AuthProvider>
          <Index />
        </AuthProvider>
      </UAProvider>
    </>
  )
}

export default App
