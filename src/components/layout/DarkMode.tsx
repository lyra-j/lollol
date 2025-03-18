'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
};

export default DarkMode;
