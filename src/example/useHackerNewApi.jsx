import { useEffect, useState } from 'react'
import fetchApi from '@/shared/axios'

function UserHackerNews () {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=react')
  const [Error, setIsError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsError(false)
      setLoading(true)
      try {
        const res = await fetchApi(url)
        setData(res.hits)
      } catch (error) {
        console.warn(error)
        setIsError(true)
      }
      setLoading(false)
    }
    getData()
  }, [url])

  return [{ data, loading, Error }, setUrl]
}

export default UserHackerNews
