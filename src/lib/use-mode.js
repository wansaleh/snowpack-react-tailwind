import { useEffect } from 'react';
import { useColorMode } from 'theme-ui';

export default function useMode() {
  const [colorMode, setColorMode] = useColorMode();

  useEffect(() => {
    if (colorMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [colorMode]);

  function toggleMode() {
    setColorMode(colorMode === 'default' ? 'dark' : 'default');
  }

  return { colorMode, toggleMode };
}
