/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';

import Nav from './components/Nav';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <>
      <Nav />

      <div className="container flex items-center justify-center h-screen text-3xl">
        <div className="mx-2 sm:mx-4 dark:text-yellow-500">
          Page has been open for <code>{count}</code> seconds.
        </div>
      </div>
    </>
  );
}

export default App;
