import { useReducer } from 'react'

const updateReducer = (num) => (num + 1) % 10000000
export default function useForceUpdate() {
  const [, update] = useReducer(updateReducer, 0)
  return update
}
