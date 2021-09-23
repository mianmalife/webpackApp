
import * as React from 'react';
import { hot } from "react-hot-loader/root";
import gitLogo from './asset/image/29158246.jpg'
import JJ from './asset/image/jj.png'

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
          Hello {name}
        </h1>
        <img src={gitLogo} alt="" />
        <img src={JJ} alt="" />
        <div className="logo"></div>
      </>
    );
  }
}

export default hot(App);
