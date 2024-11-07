import React from 'react';
import { Sun, Moon } from 'lucide-react'; // atau impor dari library ikon lainnya
import { useTheme } from '../../Context/ThemeContext';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700'
      aria-label='Toggle Theme'
    >
      {theme === 'light' ? (
        <Moon className='w-5 h-5 text-blue-400' /> // Ikon bulan untuk tema gelap
      ) : (
        <Sun className='w-5 h-5 text-yellow-500' /> // Ikon matahari untuk tema terang
      )}
    </button>
  );
};

export default ThemeToggleButton;
