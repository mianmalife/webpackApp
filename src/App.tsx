import * as React from 'react';
import { hot } from 'react-hot-loader/root';
const a = 6

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
    </div>
  );
}
export default hot(App);
