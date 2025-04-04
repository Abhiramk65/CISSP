export interface Theme {
  id: string;
  name: string;
  colors: {
    primary: {
      [key: string]: string;
    };
    secondary: {
      [key: string]: string;
    };
    success: {
      [key: string]: string;
    };
    error: {
      [key: string]: string;
    };
  };
  gradients: {
    background: string;
    primary: string;
    secondary: string;
    success: string;
    error: string;
  };
}

export const themes: Theme[] = [
  {
    id: 'default',
    name: 'Ocean Blue',
    colors: {
      primary: {
        50: '#e0f7ff',
        100: '#b3e6ff',
        200: '#80d4ff',
        300: '#4dc2ff',
        400: '#1ab0ff',
        500: '#0095ff',
        600: '#0077cc',
        700: '#005999',
        800: '#003b66',
        900: '#001d33',
      },
      secondary: {
        50: '#f0e6ff',
        100: '#d9b3ff',
        200: '#c280ff',
        300: '#ab4dff',
        400: '#941aff',
        500: '#7d00ff',
        600: '#6400cc',
        700: '#4b0099',
        800: '#320066',
        900: '#190033',
      },
      success: {
        50: '#e6ffe6',
        100: '#b3ffb3',
        200: '#80ff80',
        300: '#4dff4d',
        400: '#1aff1a',
        500: '#00ff00',
        600: '#00cc00',
        700: '#009900',
        800: '#006600',
        900: '#003300',
      },
      error: {
        50: '#ffe6e6',
        100: '#ffb3b3',
        200: '#ff8080',
        300: '#ff4d4d',
        400: '#ff1a1a',
        500: '#ff0000',
        600: '#cc0000',
        700: '#990000',
        800: '#660000',
        900: '#330000',
      },
    },
    gradients: {
      background: 'from-primary-100 via-primary-200 to-secondary-100',
      primary: 'from-primary-500 to-primary-600',
      secondary: 'from-secondary-500 to-secondary-600',
      success: 'from-success-200 to-success-300',
      error: 'from-error-200 to-error-300',
    },
  },
  {
    id: 'sunset',
    name: 'Sunset Vibes',
    colors: {
      primary: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12',
      },
      secondary: {
        50: '#fdf4ff',
        100: '#fae8ff',
        200: '#f5d0fe',
        300: '#f0abfc',
        400: '#e879f9',
        500: '#d946ef',
        600: '#c026d3',
        700: '#a21caf',
        800: '#86198f',
        900: '#701a75',
      },
      success: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
      },
      error: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
      },
    },
    gradients: {
      background: 'from-primary-100 via-secondary-100 to-primary-200',
      primary: 'from-primary-500 to-primary-600',
      secondary: 'from-secondary-500 to-secondary-600',
      success: 'from-success-200 to-success-300',
      error: 'from-error-200 to-error-300',
    },
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    colors: {
      primary: {
        50: '#f0fbff',
        100: '#d9f7ff',
        200: '#b3f0ff',
        300: '#8cebff',
        400: '#66e6ff',
        500: '#40e0ff',
        600: '#1adbff',
        700: '#00d6ff',
        800: '#00bfe6',
        900: '#00a8cc',
      },
      secondary: {
        50: '#fff0f9',
        100: '#ffe6f6',
        200: '#ffccee',
        300: '#ffb3e6',
        400: '#ff99dd',
        500: '#ff80d5',
        600: '#ff66cc',
        700: '#ff4dc4',
        800: '#ff33bb',
        900: '#ff1ab3',
      },
      success: {
        50: '#f0fff4',
        100: '#dcffe6',
        200: '#bfffcc',
        300: '#a3ffb3',
        400: '#86ff99',
        500: '#6aff80',
        600: '#4dff66',
        700: '#33ff4d',
        800: '#1aff33',
        900: '#00ff1a',
      },
      error: {
        50: '#fff0f0',
        100: '#ffe6e6',
        200: '#ffcccc',
        300: '#ffb3b3',
        400: '#ff9999',
        500: '#ff8080',
        600: '#ff6666',
        700: '#ff4d4d',
        800: '#ff3333',
        900: '#ff1a1a',
      },
    },
    gradients: {
      background: 'from-primary-200 via-secondary-200 to-primary-300',
      primary: 'from-primary-400 to-primary-600',
      secondary: 'from-secondary-400 to-secondary-600',
      success: 'from-success-300 to-success-400',
      error: 'from-error-300 to-error-400',
    },
  },
  {
    id: 'matrix',
    name: 'The Matrix',
    colors: {
      primary: {
        50: '#e6ffe6',
        100: '#ccffcc',
        200: '#99ff99',
        300: '#66ff66',
        400: '#33ff33',
        500: '#00ff00',  // Matrix green
        600: '#00cc00',
        700: '#009900',
        800: '#006600',
        900: '#003300',
      },
      secondary: {
        50: '#e6fff2',
        100: '#ccffe6',
        200: '#99ffcc',
        300: '#66ffb3',
        400: '#33ff99',
        500: '#00ff80',
        600: '#00cc66',
        700: '#00994d',
        800: '#006633',
        900: '#003319',
      },
      success: {
        50: '#e6ffe6',
        100: '#ccffcc',
        200: '#99ff99',
        300: '#66ff66',
        400: '#33ff33',
        500: '#00ff00',
        600: '#00cc00',
        700: '#009900',
        800: '#006600',
        900: '#003300',
      },
      error: {
        50: '#ffe6e6',
        100: '#ffcccc',
        200: '#ff9999',
        300: '#ff6666',
        400: '#ff3333',
        500: '#ff0000',
        600: '#cc0000',
        700: '#990000',
        800: '#660000',
        900: '#330000',
      },
    },
    gradients: {
      background: 'from-black to-gray-900',
      primary: 'from-primary-500 to-primary-600',
      secondary: 'from-secondary-500 to-secondary-600',
      success: 'from-success-300 to-success-400',
      error: 'from-error-300 to-error-400',
    },
  },
]; 