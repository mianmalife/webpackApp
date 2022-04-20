import React, { useRef, useState } from 'react'
import './index.less'
function CssComponent() {
  const dialogRef = useRef(null)
  const [show, setShow] = useState(false)
  function open() {
    dialogRef.current.showModal()
  }
  function close() {
    dialogRef.current.close()
  }
  function openCustom() {
    setShow(true)
  }
  function hidden() {
    setShow(false)
  }
  return <div id='csscomponent__wrapper'>
    <div className='loading__mask'>
      <h3>mask&animation的用法</h3>
      <p><button className='btn'></button></p>
      <p><button className='btn-chi'></button></p>
      <div className='smile'></div>
    </div>
    <div className='dialog__wrapper'>
      <button is='ui-button' onClick={open}>打开html原生弹框</button>
      <dialog ref={dialogRef} className='css-dialog'>
        <p>html 原生弹框dialog😊😂🤣❤😍😍👌😘</p>
        <button onClick={close} className='btn'>关闭</button>
      </dialog>
    </div>
    <div className='custom__dialog'
      onClick={hidden}
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? 1 : 0
      }}>
      <div className='panel'
        style={{
          marginTop: show ? 0 : -40
        }}>
          自定义弹框😘👌😁😍❤🤦‍♀️😂🤦‍♂️🤦‍♂️😁💕✌🤞
        </div>
    </div>
    <p><button className='custBtn' onClick={openCustom}>打开自定义弹框</button></p>
  </div>
}

export default CssComponent
