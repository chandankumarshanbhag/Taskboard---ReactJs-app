import { createMuiTheme } from '@material-ui/core';
import mixins from "./mixins";
import shadows from "./strong_shadows";
import typography from "./typography";

const theme = createMuiTheme({

  palette: {
    type: 'dark',


    primary: {
      main: '#a67dff'
    },
    secondary: {
      main: '#a67dff'
    },

  },
  shadows,
  typography,
  mixins
});

export default theme;