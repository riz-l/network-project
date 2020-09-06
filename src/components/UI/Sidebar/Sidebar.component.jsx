// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: Material UI Icons
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import BuildIcon from "@material-ui/icons/Build";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import SettingsIcon from "@material-ui/icons/Settings";

// Import: UI
import SidebarRow from "./SidebarRow/SidebarRow.component";

// UI: Sidebar
function Sidebar() {
  return (
    <SideBarContainer>
      <SidebarRow
        src="https://gamespot1.cbsistatic.com/uploads/scale_landscape/mig/6/2/0/6/2236206-gabe_newell_59018_screen.jpg"
        title="Gabe Newell"
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
