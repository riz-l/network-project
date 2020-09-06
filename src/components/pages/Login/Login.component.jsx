// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: Themes
import lightTheme from "../../../themes/light";
import darkTheme from "../../../themes/dark";

// Import: Logo
import { ReactComponent as LogoLight } from "../../../assets/images/logo-light.svg";
import { ReactComponent as LogoDark } from "../../../assets/images/logo-dark.svg";
import { ReactComponent as Logo2Light } from "../../../assets/images/logo2-light.svg";
import { ReactComponent as Logo2Dark } from "../../../assets/images/logo2-dark.svg";

// Import: Material UI Core
import { Button } from "@material-ui/core";

// page: Login
function Login({ isDarkMode, setIsDarkMode }) {
  // Sign in function
  const signIn = () => {
    // Sign in...
  };

  return (
    <LoginContainer>
      {isDarkMode ? (
        <Logo2Light className="HeaderLogo" />
      ) : (
        <Logo2Dark className="HeaderLogo" />
      )}
      <h1>Login</h1>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </LoginContainer>
  );
}

// Export: Login
export default Login;

// Styled: LoginContainer
const LoginContainer = styled.div`
  background: ${(props) => props.theme.colors.global.primaryBackground};
  display: grid;
  height: 100vh;
  place-items: center;

  & svg {
    object-fit: contain;
    height: 200px;
  }

  & button {
    background: ${(props) => props.theme.colors.global.secondaryText};
    color: ${(props) => props.theme.colors.global.secondaryBackground};
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: capitalize;
    transition: all 250ms linear;
    width: 300px;

    &:hover {
      background: ${(props) => props.theme.colors.global.primaryText};
      color: ${(props) => props.theme.colors.global.secondaryBackground};
      transition: all 250ms linear;
    }
  }
`;
