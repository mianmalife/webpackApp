import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import Test from '../testComponent/testCmp';

function App(props: any) {
  const [count, setCount] = React.useState(0);
  const { name } = props;
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      {name}
      {count}
      <Test />
    </div>
  );
}
export default hot(App);
