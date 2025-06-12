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
    id: 'crimson',
    name: 'Crimson',
    colors: {
      primary: {
        50: '#ffebee',
        100: '#ffcdd2',
        200: '#ef9a9a',
        300: '#e57373',
        400: '#ef5350',
        500: '#f44336',
        600: '#e53935',
        700: '#d32f2f',
        800: '#c62828',
        900: '#b71c1c',
      },
      secondary: {
        50: '#fce4ec',
        100: '#f8bbd0',
        200: '#f48fb1',
        300: '#f06292',
        400: '#ec407a',
        500: '#e91e63',
        600: '#d81b60',
        700: '#c2185b',
        800: '#ad1457',
        900: '#880e4f',
      },
      success: {
        50: '#e8f5e9',
        100: '#c8e6c9',
        200: '#a5d6a7',
        300: '#81c784',
        400: '#66bb6a',
        500: '#4caf50',
        600: '#43a047',
        700: '#388e3c',
        800: '#2e7d32',
        900: '#1b5e20',
      },
      error: {
        50: '#fff3e0',
        100: '#ffe0b2',
        200: '#ffcc80',
        300: '#ffb74d',
        400: '#ffa726',
        500: '#ff9800',
        600: '#fb8c00',
        700: '#f57c00',
        800: '#ef6c00',
        900: '#e65100',
      },
    },
    gradients: {
      background: 'from-gray-900 via-red-900 to-black',
      primary: 'from-red-500 to-red-700',
      secondary: 'from-pink-500 to-pink-700',
      success: 'from-green-500 to-green-700',
      error: 'from-orange-500 to-orange-700',
    },
  },
  {
    id: 'cyberpunk',
    name: 'Forest',
    colors: {
      primary: {
        50: '#f1f8e9',
        100: '#dcedc8',
        200: '#c5e1a5',
        300: '#aed581',
        400: '#9ccc65',
        500: '#8bc34a',
        600: '#7cb342',
        700: '#689f38',
        800: '#558b2f',
        900: '#33691e',
      },
      secondary: {
        50: '#e0f2f1',
        100: '#b2dfdb',
        200: '#80cbc4',
        300: '#4db6ac',
        400: '#26a69a',
        500: '#009688',
        600: '#00897b',
        700: '#00796b',
        800: '#00695c',
        900: '#004d40',
      },
      success: {
        50: '#e8f5e9',
        100: '#c8e6c9',
        200: '#a5d6a7',
        300: '#81c784',
        400: '#66bb6a',
        500: '#4caf50',
        600: '#43a047',
        700: '#388e3c',
        800: '#2e7d32',
        900: '#1b5e20',
      },
      error: {
        50: '#ffebee',
        100: '#ffcdd2',
        200: '#ef9a9a',
        300: '#e57373',
        400: '#ef5350',
        500: '#f44336',
        600: '#e53935',
        700: '#d32f2f',
        800: '#c62828',
        900: '#b71c1c',
      },
    },
    gradients: {
      background: 'from-green-100 via-teal-100 to-green-200',
      primary: 'from-primary-500 to-primary-600',
      secondary: 'from-secondary-500 to-secondary-600',
      success: 'from-success-500 to-success-600',
      error: 'from-error-500 to-error-600',
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