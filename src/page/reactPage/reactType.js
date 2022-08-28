import React, {
  Children,
  createElement,
  createContext,
  useState,
  useContext,
  useRef,
  useMemo
} from 'react'
import useForceUpdate from '@/hooks/use-force-update'
const theme = 'light'
const TestContext = createContext({ theme: theme })

export const Child = ({ children }) => {
  return <li>child{children}</li>
}

function MemoTest() {
  const conf = useContext(TestContext)
  return useMemo(() => {
    return conf
  }, [conf])
}
function Uncle() {
  const conf = useContext(TestContext)
  const me = MemoTest()
  console.log(me)
  return (
    <div>
      <button
        style={{
          padding: '0 20px',
          background: conf.theme === 'dark' ? '#001529' : '#fff',
          color: conf.theme === 'dark' ? 'rgba(255, 255, 255, 0.65)' : '#333'
        }}
        theme={conf.theme}
      >
        +
      </button>
    </div>
  )
}

function TestCreateElement() {
  const [themeValue, setThemeValue] = useState(theme)
  const toggleTheme = (e) => {
    const theme = e.target.checked ? 'dark' : 'light'
    setThemeValue(theme)
  }
  return createElement(
    TestContext.Provider,
    { value: { theme: themeValue } },
    <input type='checkbox' onChange={toggleTheme}></input>,
    <Uncle />
  )
}

export default function Parent({ children: childrenProp }) {
  const ref = useRef()
  const forceUpdate = useForceUpdate()
  const updateText = () => {
    ref.current = '更新了'
    forceUpdate()
  }
  Children.forEach(childrenProp, (child) => {
    console.log(child.type === Child)
  })
  // console.log(Children.toArray(childrenProp), Children.count(childrenProp), Children.only(childrenProp[0]))
  const sort = Children.toArray(childrenProp).sort((a, b) => b.key - a.key)
  return (
    <ul>
      {sort}
      <TestCreateElement />
      <p onClick={updateText}>use force update content{ref.current}</p>
    </ul>
  )
}
