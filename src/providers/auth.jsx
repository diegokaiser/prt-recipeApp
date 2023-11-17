import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import {
  auth, 
  googleProvider
} from '@/config/firebase.config'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext({
  isAuthenticated: false,
  login: async () => {},
  logout: async () => {},
  register: () => {},
  authError: [],
  addError: () => {},
  deleteError: () => {},
  user: {},
  token: ''
})

export function useAuth() {
  return useContext(AuthContext)
}

export function useIsAuthenticated() {
  const { isAuthenticated } = useAuth()
  return isAuthenticated
}

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const cookies = new Cookies()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authError, setAuthError] = useState([])
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const handleLogin = async () => {
    await signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser({
          credential: GoogleAuthProvider.credentialFromResult(result),
          token: GoogleAuthProvider.credentialFromResult(result).credential,
          user: result.user
        }),
        setToken(user.token),
        setIsLoggedIn(true)
      })
      .then(
        navigate('/home')
      )
      .catch(error => {
        console.log(error)
      })
  }

  const handleLogout = async () => {
    await signOut(auth)
      .then(
        setUser({}),
        setToken(null),
        setIsLoggedIn(null)
      )
      .then(
        navigate('/login')
      )
      .catch(error => {
        console.log(error)
      })
  }

  const handleRegister = async () => {}

  const addError = newError => setAuthError(authError.filter((index) => index !== key))

  const deleteError = key => {}

  useEffect(() => {
    // check user
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser({
          credential: GoogleAuthProvider.credentialFromResult(result),
          token: GoogleAuthProvider.credentialFromResult(result).credential,
          user: result.user
        })
      } else {
        setUser({})
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuthenticated: isLoggedIn,
      login: handleLogin,
      logout: handleLogout,
      register: handleRegister,
      authError,
      addError,
      deleteError,
      user,
      token
    }}>
      { children }
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}
