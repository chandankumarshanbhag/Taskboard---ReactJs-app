import { createMuiTheme, colors } from '@material-ui/core';
import shadows from "./shadows"
import typography from "./typography"

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        color: "#000"
      }
    },
    MuiSvgIcon: {
      root: {
        color: "#000"
      }
    },
    MuiInputBase: {
      input: {
        color: "#000"
      }
    },
    MuiCssBaseline: {
      "@global": {
        'body::-webkit-scrollbar': {
          width: '0.2em'
        },
        'body::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        'body::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid slategrey'
        }

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
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: colors.indigo[500]
    },
    secondary: {
      main: colors.indigo[500]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    },
  },
  shadows,
  typography
});

export default theme;