import { useEffect, useState } from 'react'

function useTimeFormatter(props) {
  const [timeQuery, setTimeQuery] = useState({})
  useEffect(() => {
    if (props) {
      setTimeQuery({
        startTime: props[0].format('YYYY-MM-DD'),
        endTime: props[1].format('YYYY-MM-DD')
      })
    }
  }, [props])
  return timeQuery
}

export default useTimeFormatter
