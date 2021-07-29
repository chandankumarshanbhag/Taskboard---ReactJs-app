import { createMuiTheme, colors } from '@material-ui/core';
import shadows from "./strong_shadows"
import typography from "./typography"

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        color: "#fff"
      }
    },
    MuiSvgIcon: {
      root: {
        color: "#fff"
      }
    },
    MuiInputBase: {
      input: {
        color: "#fff"
      }
    },
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden'
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32
      }
    },
    MuiChip: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.075)'
      }
    }
  },
  palette: {
    type: 'dark',
    action: {
      active: 'rgba(255, 255, 255, 0.54)',
      hover: 'rgba(255, 255, 255, 0.04)',
      selected: 'rgba(255, 255, 255, 0.08)',
      disabled: 'rgba(255, 255, 255, 0.26)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      focus: 'rgba(255, 255, 255, 0.12)'
    },
    background: {
      default: '#212121',
      dark: '#222431',
      paper: '#2a2d3d'
    },
    primary: {
      main: '#a67dff'
    },
    secondary: {
      main: '#a67dff'
    },
    text: {
      primary: '#f6f5f8',
      secondary: '#9699a4'
    },
  },
  shadows,
  typography,
});

export default theme;