/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthProvider = {
  isAuthenticated: false,
  signin (callback: Function) {
    fakeAuthProvider.isAuthenticated = true
    setTimeout(callback, 100) // fake async
  },
  signout (callback: Function) {
    fakeAuthProvider.isAuthenticated = false
    setTimeout(callback, 100)
  }
}

export { fakeAuthProvider }
