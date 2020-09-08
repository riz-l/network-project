// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import Container from "../../UI/Container/Container.component";
import Header from "../../UI/Header/Header.component";
import Sidebar from "../../UI/Sidebar/Sidebar.component";

// page: Dashboard
function Dashboard({ isDarkMode, setIsDarkMode }) {
  return (
    <>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Container>
        <Sidebar />
      </Container>
    </>
  );
}

// Export: Dashboard
export default Dashboard;
