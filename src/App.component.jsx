// Import: Dependencies
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

// Import: Styling
import "./App.styles.scss";

// Import: Themes
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";

// Import: pages
import Login from "./components/pages/Login/Login.component";

// Import: UI
import Container from "./components/UI/Container/Container.component";
import Header from "./components/UI/Header/Header.component";
import Sidebar from "./components/UI/Sidebar/Sidebar.component";

// Component: App
function App() {
  // State = isDarkMode
  const [isDarkMode, setIsDarkMode] = React.useState(getInitialMode());

  // Sets user preference for light/dark theme
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // If returning user expressed preference for dark theme previously,
  // theme is set to dark
  // otherwise, theme is set to light
  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();

    // if mode was saved, sets to light/dark
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark, sets them to dark
    } else if (userPrefersDark) {
      return true;
      // otherwise sets theme to light
    } else {
      return false;
    }
  }

  // Looks for user's preferred color scheme
  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // User control
  const user = null;

  return (
    <>
      {!user ? (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <Login isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Container>
            <Sidebar />
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}

// Export: App
export default App;
