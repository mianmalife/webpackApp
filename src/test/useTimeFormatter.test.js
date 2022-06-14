import React, { useState } from 'react'
import useTimeFormatter from '@/hook/useTimeFormatter'
import { DatePicker, Card } from 'antd'
const { RangePicker } = DatePicker

function useTimeFormatterTest() {
  const [dateValue, setDateValue] = useState()
  const res = useTimeFormatter(dateValue)
  if (res && Object.keys(res).length > 0) {
    console.log(res)
  }
  function onChangeDate(value) {
    setDateValue(value)
  }
  return <Card style={{ margin: 20 }}>
    <RangePicker onChange={onChangeDate} value={dateValue} />
  </Card>
}

export default useTimeFormatterTest