import Router from "./router";
import { ThemeProvider } from "@material-ui/core"
import {
  LightTheme,
  DarkTheme
} from "./theme"
import useApp from "./provider/app_provider";

function App() {
  const { darkTheme, setDarkTheme } = useApp();
  return (
    <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
