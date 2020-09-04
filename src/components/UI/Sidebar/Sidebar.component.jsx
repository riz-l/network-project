// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: Material UI Icons
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

// Import: Components
import SidebarRow from "./SidebarRow/SidebarRow.component";

// UI: Sidebar
function Sidebar() {
  return (
    <SideBarContainer>
      <SidebarRow src="" title="rizji" />
    </SideBarContainer>
  );
}

// Export: Sidebar
export default Sidebar;

const SideBarContainer = styled.div`
  flex: 0.33;
  padding: 25px 10px;
`;
