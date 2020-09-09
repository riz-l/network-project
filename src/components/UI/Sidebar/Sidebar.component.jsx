// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: StateProvider
import { useStateValue } from "../../../StateProvider";

// Import: Material UI Icons
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import FlagIcon from "@material-ui/icons/Flag";
import BuildIcon from "@material-ui/icons/Build";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import SettingsIcon from "@material-ui/icons/Settings";

// Import: UI
import SidebarRow from "./SidebarRow/SidebarRow.component";

// UI: Sidebar
function Sidebar() {
  // Pulls user from StateProvider
  const [{ user }, dispatch] = useStateValue();

  return (
    <SideBarContainer>
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={GroupIcon} title="Looking for Group" />
      <SidebarRow Icon={FlagIcon} title="Pages" />
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
  position: fixed;
`;
