'use client';

import { Clover, Sparkles } from 'lucide-react';
import { useTheme } from 'next-themes';

const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <Clover /> : <Sparkles />}
    </button>
  );
};

export default DarkMode;
