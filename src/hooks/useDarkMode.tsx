import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleMode = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = prefersDark ? 'dark' : 'light';

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme(defaultTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, toggleMode };
};

export default useDarkMode;
