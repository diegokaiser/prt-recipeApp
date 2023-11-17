import { useContext } from 'react'
import { UAContext } from '@/providers/ua'
import { AuthContext } from '@/providers/auth'
import { Home } from './Home/Home'
import { Login } from './Login/Login'

export function Index() {
  const ua = useContext(UAContext)
  const auth = useContext(AuthContext)
  console.log('auth: ', auth)
  return (
    <div className="container">
      <div className="main__content">
        {
          auth.isAuthenticated ?
          <Home /> :
          <Login />
        }
      </div>
    </div>
  )
}
