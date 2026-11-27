import { ThemeProvider } from "next-themes";
import Landing from "./pages/Landing";

const App = () => (
  <ThemeProvider attribute="class" forcedTheme="dark" enableSystem={false}>
    <Landing />
  </ThemeProvider>
);

export default App;
