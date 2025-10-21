import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 bg-secondary rounded-full transition-all duration-300 hover:bg-secondary/80 flex items-center p-1"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div
        className={`absolute w-5 h-5 bg-primary rounded-full transition-all duration-300 flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {theme === 'light' ? (
          <Sun className="w-3 h-3 text-primary-foreground" />
        ) : (
          <Moon className="w-3 h-3 text-primary-foreground" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
