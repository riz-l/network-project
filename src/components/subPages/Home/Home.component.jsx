// Import: Dependencies
import React from "react";
import styled from "styled-components";

// subPage: Home
function Home() {
  return (
    <HomeContainer>
      <h1>Hello, world</h1>
    </HomeContainer>
  );
}

// Export: Home
export default Home;

// Styled: HomeContainer
const HomeContainer = styled.div`
  background: ${(props) => props.theme.colors.global.primaryBackground};
  flex: auto;
  height: 100%;
  width: 100%;
`;
