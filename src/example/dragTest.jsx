import React, { useState, useEffect, useRef } from 'react'
const demension = {
  fruit: [{
    id: 1,
    name: 'apple'
  }, {
    id: 2,
    name: 'orange'
  }, {
    id: 3,
    name: 'banana'
  }, {
    id: 4,
    name: 'pear'
  }],
  book: [{
    id: 5,
    name: '三国演义'
  }, {
    id: 6,
    name: '水浒传'
  }, {
    id: 7,
    name: '西游记'
  }, {
    id: 8,
    name: '红楼梦'
  }]
}
function DragTest () {
  const [quota, setQuota] = useState(demension)
  const empty = useRef(null)
  let dragged
  const onDragStart = e => {
    console.log(e, 'onDragStart', e.dataTransfer.items)
    dragged = e.target
  }
  const onDragOver = e => {
    console.log(e.target, 'onDragOver')
    e.preventDefault()
  }
  const onDrop = e => {
    console.log(e.target, 'onDrop', e.target.parentNode)
    e.target.parentNode.insertBefore(dragged, e.target)
    dragged = ''
    e.preventDefault()
  }
  useEffect(() => {
    setQuota(quota)
  }, [])
  return <div className='container__drag'>
    <div className='left__demension'>
      {
        Object.keys(quota).map(title => {
          return <div key={title} className='category'>
            <h3>{title}</h3>
            <ul>
              {
                quota[title].map(content => {
                  return <li
                    onDragStart={onDragStart}
                    draggable={true}
                    key={content.id}
                    className='demesion__lis'>
                    {content.name}
                  </li>
                })
              }
            </ul>
          </div>
        })
      }
    </div>
    <div className='right__condition'>
      {
        Object.keys(quota).map(title => {
          return <div key={title} className='category'>
            <h3>{title}</h3>
            <ul
              className='drop__content'
              onDragOver={onDragOver}
              onDrop={onDrop}>
              <p className='empty__state' ref={empty}>{'往这里拖!'}</p>
            </ul>
          </div>
        })
      }
    </div>
  </div>
}

export default DragTest
