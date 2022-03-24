import React from 'react'
import 'lu2/theme/edge/css/common/ui/Button.css'
import 'lu2/theme/edge/css/common/ui/Input.css'
import 'lu2/theme/edge/css/common/ui/Date.css'
import 'lu2/theme/edge/js/common/ui/DateTime.js'
import './index.less'
function CssComponent() {
  return <div id='csscomponent__wrapper'>
    <div className='lulu__ui__wrapper'>
      <h2>Lu Lu UI edge主题</h2>
      <h3>Lu Lu UI button</h3>
      <p><button className='ui-button'>lulu ui button</button></p>
      <p><button className='ui-button loading'>lulu ui loading</button></p>
      <p><button className='ui-button disabled'>lulu ui disabled</button></p>
      <p><button is='ui-button'>is属性 lulu ui disabled</button></p>
      <p><button is='ui-button' type='primary'>is属性 lulu ui primary</button></p>
      <input type="date" is="ui-datetime" />
    </div>
  </div>
}

export default CssComponent
