/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';

import useMode from './lib/use-mode';

function App() {
  const { colorMode, toggleMode } = useMode();

  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div className="container flex items-center justify-center h-screen text-3xl">
      <div className="mx-2 sm:mx-4 dark:text-yellow-500">
        Page has been open for <code>{count}</code> seconds.
      </div>
      <div>
        <button type="button" className="" onClick={toggleMode}>
          {colorMode}
        </button>
      </div>
    </div>
  );
}

export default App;
