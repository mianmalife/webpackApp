import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { fakeAuthProvider } from './auth'

interface AuthContextType {
  user: any
  signin: (user: string, callback: Function) => void
  signout: (callback: Function) => void
}

const AuthContext = React.createContext<AuthContextType>(null!)

function AuthProvider ({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(null)

  const signin = (newUser: string, callback: Function) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser)
      callback()
    })
  }

  const signout = (callback: Function) => {
    return fakeAuthProvider.signout(() => {
      setUser(null)
      callback()
    })
  }

  const value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuth () {
  return React.useContext(AuthContext)
}

function AuthStatus () {
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.user) {
    return <p>You are not logged in.</p>
  }

  return (
    <p className='user__header__opt'>
      Welcome {auth.user}!{' '}
      <a
        onClick={() => {
          auth.signout(() => navigate('/'))
        }}
      >
        Sign out
      </a>
    </p>
  )
}

function RequireAuth ({ children }: { children: JSX.Element }) {
  const auth = useAuth()
  const location = useLocation()
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}
export { AuthProvider, useAuth, RequireAuth, AuthStatus }
