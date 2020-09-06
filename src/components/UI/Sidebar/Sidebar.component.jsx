// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: Material UI Icons
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import BuildIcon from "@material-ui/icons/Build";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import SettingsIcon from "@material-ui/icons/Settings";

// Import: Components
import SidebarRow from "./SidebarRow/SidebarRow.component";

// UI: Sidebar
function Sidebar() {
  return (
    <SideBarContainer>
      <SidebarRow
        src="https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        title="rizji"
      />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={GroupIcon} title="Looking for Group" />
      <SidebarRow Icon={BuildIcon} title="Builds" />
      <SidebarRow Icon={PermMediaIcon} title="Media" />
      <SidebarRow Icon={SettingsIcon} title="Settings" />
    </SideBarContainer>
  );
}

// Export: Sidebar
export default Sidebar;

const SideBarContainer = styled.div`
  flex: 0.33;
  padding: 25px 10px;
`;
