// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: UI
import Container from "../../UI/Container/Container.component";
import Header from "../../UI/Header/Header.component";
import Sidebar from "../../UI/Sidebar/Sidebar.component";

// Import: subPages
import Home from "../../subPages/Home/Home.component";

// page: Dashboard
function Dashboard({ isDarkMode, setIsDarkMode }) {
  return (
    <DashboardContainer>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Container>
        <Sidebar />
        <Home />
      </Container>
    </DashboardContainer>
  );
}

// Export: Dashboard
export default Dashboard;

// Styled: DashboardContainer
const DashboardContainer = styled.div`
  height: 100%;
  width: 100%;
`;
