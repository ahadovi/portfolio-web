'use client';
import { faLightbulb, faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="fixed top-5 right-5 lg:right-8 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl z-30  bg-gray-800 dark:bg-lime-600">
      {theme === 'light' ? (
        <button
          onClick={() => setTheme('dark')}
          className="w-full h-full"
          role="button"
          aria-label="Dark Theme Switcher"
        >
          <FontAwesomeIcon icon={faMoon} />
        </button>
      ) : (
        <button
          onClick={() => setTheme('light')}
          className="w-full h-full"
          role="button"
          aria-label="Light Theme Switcher"
        >
          <FontAwesomeIcon icon={faLightbulb} />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
