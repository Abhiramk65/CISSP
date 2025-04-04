import React from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import { Theme } from '../themes';

interface ThemeSwitcherProps {
  themes: Theme[];
  currentTheme: string;
  onThemeChange: (themeId: string) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  themes,
  currentTheme,
  onThemeChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-gray-900 z-50"
      >
        <Palette className="w-6 h-6" />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 right-4 bg-white rounded-lg shadow-xl p-4 z-50 w-64"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Theme Selection</h3>
          <div className="space-y-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  onThemeChange(theme.id);
                  setIsOpen(false);
                }}
                className={`w-full p-3 rounded-lg transition-all duration-300 flex items-center space-x-3
                  ${currentTheme === theme.id
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md'
                    : 'hover:bg-gray-100'
                  }`}
              >
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${theme.gradients.background}`} />
                <span>{theme.name}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ThemeSwitcher; 