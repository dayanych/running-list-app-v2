import { alpha, PaletteOptions } from '@mui/material/styles';

export const grey = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

export const primary = {
  light: '#73BAFB',
  main: '#1877F2',
  dark: '#0C44AE',
  contrastText: '#FFFFFF',
};

export const secondary = {
  light: '#C684FF',
  main: '#8E33FF',
  dark: '#5119B7',
  contrastText: '#FFFFFF',
};

export const info = {
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  contrastText: '#FFFFFF',
};

export const success = {
  light: '#5BE49B',
  main: '#00A76F',
  dark: '#007867',
  contrastText: '#FFFFFF',
};

export const warning = {
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  contrastText: grey[800],
};

export const error = {
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  contrastText: '#FFFFFF',
};

const common = {
  black: '#000000',
  white: '#FFFFFF',
};

const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
  action,
};

export const palette = (): PaletteOptions => {
  return {
    ...base,
    mode: 'light',
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: '#FFFFFF',
      default: grey[100],
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };
};
