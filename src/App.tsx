
import * as React from 'react';
import { hot } from "react-hot-loader/root";
import gitLogo from '@/asset/image/29158246.jpg'
import JJ from '@/asset/image/jj.png'
import {identity} from '@/type-example/example'
interface Props {
   name:
    string
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          hello - {name}5{identity(123456789)}
        </h1>
        <img src={gitLogo} alt="" />
        <img src={JJ} alt="" />
        <div className="logo"></div>
      </>
    );
  }
}

export default hot(App);
