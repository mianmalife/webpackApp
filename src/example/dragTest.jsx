import React, { useState, useEffect, useRef, Fragment } from 'react'
import _cloneDeep from 'lodash/cloneDeep'
const demension = {
  fruit: [{
    id: 1,
    name: 'apple',
    show: false,
    children: [{
      id: '1-1',
      name: 'apple 8'
    }, {
      id: '1-2',
      name: 'apple 9'
    }, {
      id: '1-3',
      name: 'apple x'
    }, {
      id: '1-4',
      name: 'apple 11'
    }]
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
    name: '西游记',
    show: false,
    children: [{
      id: '7-1',
      name: '苦战狮驼岭'
    }, {
      id: '7-2',
      name: '受阻小雷音'
    }]
  }, {
    id: 8,
    name: '红楼梦',
    show: false,
    children: [{
      id: '8-1',
      name: '宝玉挨打'
    }]
  }]
}
const selected = {
  fruit: [],
  book: []
}
function DragTest () {
  const [quota, setQuota] = useState(demension)
  const [indicator, setIndicator] = useState(selected)
  const empty = useRef(null)
  const onDragStart = (draggedId, name, category, e) => {
    console.log(e, 'onDragStart')
    e.dataTransfer.setData('draggedId', draggedId)
    e.dataTransfer.setData('name', name)
    e.dataTransfer.setData('category', category)
  }
  const onDragEnter = e => {
    e.target.style.border = '1px dashed #1DA57A'
  }
  const onDragOver = e => {
    console.log(e.target, 'onDragOver')
    e.preventDefault()
  }
  const onDragLeave = e => {
    e.target.style.border = '1px dashed #ccc'
  }
  const onDrop = (category, e) => {
    console.log(e.target, 'onDrop', e.target.parentNode)
    const ID = e.dataTransfer.getData('draggedId')
    const NAME = e.dataTransfer.getData('name')
    const CATEGORY = e.dataTransfer.getData('category')
    if (category === CATEGORY) {
      if (!indicator[CATEGORY].find(item => item.id === ID)) {
        const copy = _cloneDeep(indicator)
        copy[category].push({
          key: ID,
          id: ID,
          name: NAME
        })
        setIndicator(copy)
      }
    }
    e.target.style = '1px dashed #ccc'
    e.preventDefault()
  }
  const onDelete = (deleteId, category) => {
    const copy = _cloneDeep(indicator)
    copy[category].forEach((item, index) => {
      if (item.id === deleteId) {
        copy[category].splice(index, 1)
      }
    })
    setIndicator(copy)
  }
  const onDragEnd = e => {
    console.log(indicator, 'onDragEnd')
  }
  const onExpand = (aId, category) => {
    const copy = _cloneDeep(quota)
    const resp = copy[category].map(item => {
      if (item.id === aId) {
        item.show = !item.show
      }
      return item
    })
    copy[category] = resp
    console.log(copy, 'copy')
    setQuota(copy)
    // if (aId === activeId) {
    //   setActiveId('')
    // } else {
    //   setActiveId(aId)
    // }
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
                  return <Fragment key={content.id}>
                    <li
                      onDragStart={onDragStart.bind(this, content.id, content.name, title)}
                      onDragEnd={onDragEnd}
                      draggable={true}
                      key={content.id}
                      className='demesion__lis'>
                      {
                        content.children &&
                        content.children.length > 0 &&
                        <mark onClick={onExpand.bind(this, content.id, title)}>^</mark>
                      }
                      <div>{content.name}</div>
                    </li>
                    <div
                      style={{ height: content.show ? 'auto' : 0 }}
                      className='child__content'>
                      {
                        content.children &&
                        content.children.length > 0 &&
                        content.children.map(child => {
                          return <li
                            onDragStart={onDragStart.bind(this, child.id, child.name, title)}
                            onDragEnd={onDragEnd}
                            draggable={true}
                            key={child.id}
                            className='child__lis'>
                            {child.name}
                          </li>
                        })
                      }
                    </div>
                  </Fragment>
                })
              }
            </ul>
          </div>
        })
      }
    </div>
    <div className='right__condition'>
      {
        Object.keys(indicator).map(title => {
          return <div key={title} className='category'>
            <h3>{title}</h3>
            <ul className='drop__content'>
              {
                indicator[title].map(content => {
                  return <li
                    key={content.id}
                    data-id={content.id}
                    onDragStart={onDragStart.bind(this, content.id, content.name, title)}
                  >
                    <div>{content.name}</div>
                    <mark onClick={onDelete.bind(this, content.id, title)}>X</mark>
                  </li>
                })
              }
              <p
                onDragEnter={onDragEnter}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop.bind(this, title)}
                className='empty__state'
                ref={empty}>{'往这里拖!'}
              </p>
            </ul>
          </div>
        })
      }
    </div>
  </div>
}

export default DragTest
