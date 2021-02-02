import React from 'react';

import useMode from '../lib/use-mode';

export default function Nav() {
  const { colorMode, toggleMode } = useMode();

  return (
    <div className="flex justify-end p-4">
      <button type="button" onClick={toggleMode}>
        {colorMode === 'default' ? 'Dark' : 'Light'}
      </button>
    </div>
  );
}
