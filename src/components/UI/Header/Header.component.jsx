// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: Material UI Icons
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness7Icon from "@material-ui/icons/Brightness7";

// Import: Material Core
import { Avatar, IconButton } from "@material-ui/core";

// UI: Header
function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook Logo"
        />
        <IconButton
          onClick={() => {
            setIsDarkMode((isDarkMode) => !isDarkMode);
            localStorage.setItem("isDarkMode", (isDarkMode) => !isDarkMode);
          }}
        >
          {isDarkMode ? (
            <Brightness2Icon
              style={{
                color: "#ababae",
              }}
            />
          ) : (
            <Brightness7Icon
              style={{
                color: "#38383d",
              }}
            />
          )}
        </IconButton>
      </HeaderLeft>

      <HeaderCenter></HeaderCenter>

      <HeaderRight>
        <HeaderUserInfo>
          <Avatar src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80" />
          <h4>rizji</h4>
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
  padding: 5px 20px;
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

  & img {
    height: 40px;
  }

  & .MuiButtonBase-root {
    background: ${(props) => props.theme.colors.global.secondaryBackground};
    margin-left: 10px;
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
        color: ${(props) => props.theme.colors.global.secondaryText};
      }
    }
  }
`;

// Styled: HeaderUserInfo
const HeaderUserInfo = styled.div`
  align-items: center;
  display: flex;
  margin-right: 10px;

  & h4 {
    color: ${(props) => props.theme.colors.global.primaryText};
    font-weight: 600;
    margin-left: 10px;
  }
`;
