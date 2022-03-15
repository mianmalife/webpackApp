import React, { Fragment, useEffect, useState } from 'react'
import fetchApi from '@/shared/axios'
import _cloneDeep from 'lodash/cloneDeep'
import './tree.less'

function Tree() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchApi('https://www.fastmock.site/mock/9a0b75972e6f3de5f1aebeb764372e80/redux/api/dimension')
      .then(data => {
        setData(data)
      })
  }, [])
  function expand (id, category) {
    console.log(id, category, 'expand', data)
    const copy = _cloneDeep(data)
    const resp = copy[category].map(item => {
      if (item.id === id) {
        item.fold = !item.fold
      }
      return item
    })
    copy[category] = resp
    setData(copy)
  }
  function onHandle(obj, depth) {
    function generateChild (seChild, dept, key) {
      const nextDepth = dept + 5
      return seChild.length && seChild.map(item => {
        return <li key={item.id} className='indicator__wrapperd'>
          <p className='name' onClick={item.children && expand.bind(this, item.id, key)}>{item.name}</p>
          {
            item.children && <ul style={{ paddingLeft: nextDepth, height: item.fold ? 0 : 'auto' }}>{generateChild(item.children, nextDepth, key)}</ul>
          }
        </li>
      })
    }
    function generate (firstChild, dept, key) {
      const nextDepth = dept + 5
      return firstChild.length && firstChild.map(item => {
        return <li key={item.id}>
          <p className='name' onClick={item.children && expand.bind(this, item.id, key)}>{item.name}</p>
          {
            item.children && <ul style={{ overflow: 'hidden', paddingLeft: nextDepth, height: item.fold ? 0 : 'auto' }}>{generateChild(item.children, nextDepth, key)}</ul>
          }
        </li>
      })
    }
    return Object.keys(obj).map(key => {
      const nextDepth = depth + 5
      return <div key={key}>
        <h2>{key}</h2>
        <ul>{obj[key].length && generate(obj[key], nextDepth, key)}</ul>
      </div>
    })
  }
  return <Fragment>
    <div className='tree__wrapperd'>{data && onHandle(data, 0)}</div>
  </Fragment>
}

export default Tree
