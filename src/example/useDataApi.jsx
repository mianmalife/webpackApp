import { useEffect, useReducer, useState } from 'react'
import fetchApi from '@/shared/axios'

function getDataReducer (state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
        Error: false
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        Error: false,
        data: action.payload
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        Error: true
      }
    default:
      throw new Error()
  }
}
function UserHackerNews (initUrl, initData) {
  const [url, setUrl] = useState(initUrl)
  const [state, dispatch] = useReducer(getDataReducer, {
    loading: false,
    Error: false,
    data: initData
  })

  useEffect(() => {
    let didCancel = false
    const getData = async () => {
      dispatch({ type: 'FETCH_INIT' })
      try {
        const res = await fetchApi(url)
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: res.hits })
        }
      } catch (error) {
        console.warn(error)
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' })
        }
      }
    }
    getData()
    return () => {
      didCancel = true
    }
  }, [url])

  return [state, setUrl]
}

export default UserHackerNews
