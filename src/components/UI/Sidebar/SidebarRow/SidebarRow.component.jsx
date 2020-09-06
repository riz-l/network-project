// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: Material Core
import { Avatar } from "@material-ui/core";

// UI: SidebarRow
function SidebarRow({ src, Icon, title }) {
  return (
    <SideBarRowContainer>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </SideBarRowContainer>
  );
}

// Export: SidebarRow
export default SidebarRow;

const SideBarRowContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 10px;
  transition: all 250ms linear;

  &:hover {
    background: ${(props) => props.theme.colors.global.primaryBackground};
    border-radius: 10px;

    & h4 {
      color: ${(props) => props.theme.colors.global.primaryText};
    }
  }

  & h4 {
    color: ${(props) => props.theme.colors.global.secondaryText};
    font-weight: 400;
    margin-left: 20px;
  }

  & .MuiSvgIcon-root {
    color: ${(props) => props.theme.colors.global.secondaryText};
    font-size: xx-large;
  }
`;
