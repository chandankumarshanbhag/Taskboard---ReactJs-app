import Router from "./router";
import {ThemeProvider} from "@material-ui/core"
import {
  LightTheme,
  DarkTheme
} from "./theme"

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
