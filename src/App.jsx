import React, { useEffect, useState } from 'react';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div className="container flex items-center justify-center h-screen text-3xl">
      <div className="mx-2 sm:mx-4 dark:text-yellow">
        Page has been open for <code>{count}</code> seconds.
      </div>
    </div>
  );
}

export default App;
