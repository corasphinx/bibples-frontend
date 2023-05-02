import type { PaletteMode } from '@mui/material';
import { createTheme as createMuiTheme, alpha } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

interface ThemeProps {
  mode: PaletteMode;
}

// Create a theme instance.
const createTheme = ({ mode }: ThemeProps) => {
  return createMuiTheme({
    palette: {
      mode,
      background: {
        default: mode === 'dark' ? '#111111' : '#EEEEEE',
      },
      text: {
        primary: mode === 'dark' ? '#FFFFFF' : '#000000',
        secondary: mode === 'dark' ? '#434343' : '#C7C7C7',
      },
      primary: {
        main: mode === 'dark' ? alpha('#686868', 0.22) : alpha('#FFFFFF', 0.56),
        contrastText: mode === 'dark' ? '#F0F0F0' : '#565A7F',
      },
      secondary: {
        main: mode === 'dark' ? alpha('#000000', 0.43) : alpha('#FFFFFF', 0.56),
        contrastText: mode === 'dark' ? alpha('#000000', 0.43) : '#565A7F',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1500,
        xxl: 1800,
      },
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            boxShadow: 'none',
            borderRadius: '15px',
          },
        },
      },
    },
  });
};

export default createTheme;
