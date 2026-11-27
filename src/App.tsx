
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Legal from "./pages/Legal";

const App = () => (
  <ThemeProvider attribute="class" forcedTheme="dark" enableSystem={false}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
