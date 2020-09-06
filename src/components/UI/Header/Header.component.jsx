// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: StateProvider
import { useStateValue } from "../../../StateProvider";

// Import: Material UI Icons
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness7Icon from "@material-ui/icons/Brightness7";

// Import: Material Core
import { Avatar, IconButton } from "@material-ui/core";

// Import: Logo
import { ReactComponent as LogoLight } from "../../../assets/images/logo-light.svg";
import { ReactComponent as LogoDark } from "../../../assets/images/logo-dark.svg";
import { ReactComponent as Logo2Light } from "../../../assets/images/logo2-light.svg";
import { ReactComponent as Logo2Dark } from "../../../assets/images/logo2-dark.svg";

// UI: Header
function Header({ isDarkMode, setIsDarkMode }) {
  // Pulls user from StateProvider
  const [{ user }, dispatch] = useStateValue();

  return (
    <HeaderContainer>
      <HeaderLeft>
        {isDarkMode ? (
          <Logo2Light className="HeaderLogo" />
        ) : (
          <Logo2Dark className="HeaderLogo" />
        )}
      </HeaderLeft>

      <HeaderCenter></HeaderCenter>

      <HeaderRight>
        <IconButton
          onClick={() => {
            setIsDarkMode((isDarkMode) => !isDarkMode);
            localStorage.setItem("isDarkMode", (isDarkMode) => !isDarkMode);
          }}
        >
          {isDarkMode ? (
            <Brightness2Icon
              style={{
                color: "#878c92",
              }}
            />
          ) : (
            <Brightness7Icon
              style={{
                color: "#878c92",
              }}
            />
          )}
        </IconButton>

        <HeaderUserInfo>
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </HeaderUserInfo>

        <IconButton>
          <AddIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </HeaderRight>
    </HeaderContainer>
  );
}

// Export: Header
export default Header;

// Styled: HeaderContainer
const HeaderContainer = styled.div`
  background: ${(props) => props.theme.colors.global.primaryBackground};
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  transition: all 250ms linear;
  z-index: 100;
`;

// Styled: HeaderLeft
const HeaderLeft = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;

  & .HeaderLogo {
    margin: 0;
    padding: 0;
  }

  & img {
    height: 40px;
  }

  & .HeaderLogo {
    height: 40px;
    width: 100px;
  }
`;

// Styled: HeaderCenter
const HeaderCenter = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

// Styled: HeaderRight
const HeaderRight = styled.div`
  display: flex;

  & .MuiButtonBase-root {
    &:hover {
      background-color: ${(props) =>
        props.theme.colors.global.secondaryBackground};
      transition: all 250ms linear;
    }

    & .MuiIconButton-label {
      & .MuiSvgIcon-root {
        color: ${(props) => props.theme.colors.global.primaryText};
      }
    }
  }
`;

// Styled: HeaderUserInfo
const HeaderUserInfo = styled.div`
  align-items: center;
  display: flex;
  margin: 0 10px;

  & h4 {
    color: ${(props) => props.theme.colors.global.primaryText};
    font-weight: 600;
    margin-left: 10px;
  }
`;
