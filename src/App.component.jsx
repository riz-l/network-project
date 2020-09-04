// Import: Dependencies
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

// Import: Styling
import "./App.styles.scss";

// Import: Themes
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";

// Import: Components
import Button from "./components/UI/Button/Button.component";
import Card from "./components/UI/Card/Card.component";
import Container from "./components/UI/Container/Container.component";

// Component: App
function App() {
  // Checks to see if user has darkMode preference
  const stored = localStorage.getItem("isDarkMode");

  // State = isDarkMode
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Card>
          Dark Mode is {isDarkMode ? "Enabled" : "Disabled"}
          <Button
            onClick={() => {
              setIsDarkMode((isDarkMode) => !isDarkMode);
              localStorage.setItem("isDarkMode", (isDarkMode) => !isDarkMode);
            }}
          >
            Toggle Dark Mode
          </Button>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

// Export: App
export default App;
