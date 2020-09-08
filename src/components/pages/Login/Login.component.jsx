// Import: Dependencies
import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

// Import: Themes
import lightTheme from "../../../themes/light";
import darkTheme from "../../../themes/dark";

// Import: Logo
import { ReactComponent as LogoLight } from "../../../assets/images/logo2-light.svg";
import { ReactComponent as LogoDark } from "../../../assets/images/logo2-dark.svg";
import { ReactComponent as LoginSplashLight } from "../../../assets/images/login-splash-light.svg";
import { ReactComponent as LoginSplashDark } from "../../../assets/images/login-splash-dark.svg";

// Import: subPages
import SignIn from "../../subPages/SignIn/SignIn.component";
import SignUp from "../../subPages/SignUp/SignUp.component";

// page: Login
function Login({ isDarkMode, setIsDarkMode }) {
  return (
    <LoginContainer>
      <LoginLeftContainer>
        <LoginLeft>
          <LoginLeftIntro>
            {isDarkMode ? (
              <LogoLight className="HeaderLogo" />
            ) : (
              <LogoDark className="HeaderLogo" />
            )}
            <p>Discover a social network for gamers all over the world.</p>
          </LoginLeftIntro>
          {isDarkMode ? (
            <LoginLeftSplash>
              <LoginSplashLight />
            </LoginLeftSplash>
          ) : (
            <LoginLeftSplash>
              <LoginSplashDark />
            </LoginLeftSplash>
          )}
        </LoginLeft>
      </LoginLeftContainer>

      <LoginRightContainer>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </LoginRightContainer>
    </LoginContainer>
  );
}

// Export: Login
export default Login;

// Styled: LoginContainer
const LoginContainer = styled.div`
  background: ${(props) => props.theme.colors.global.primaryBackground};
  display: flex;
  min-height: 100vh;

  & button {
    background: ${(props) => props.theme.colors.global.secondaryText};
    color: ${(props) => props.theme.colors.global.secondaryBackground};
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: capitalize;
    transition: all 150ms linear;
    width: 300px;

    &:hover {
      background: ${(props) => props.theme.colors.global.primaryText};
      color: ${(props) => props.theme.colors.global.secondaryBackground};
      transition: all 150ms linear;
    }
  }
`;

// Styled: LoginLeftContainer
const LoginLeftContainer = styled.div`
  background: ${(props) => props.theme.colors.global.secondaryBackground};
  display: grid;
  flex: 1;
  place-items: center;

  @media (max-width: 1255px) {
    display: none;
  }
`;

// Styled: LoginLeft
const LoginLeft = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 2rem;
  text-align: left;
  width: 80%;
`;

// Styled: LoginLeftIntro
const LoginLeftIntro = styled.div`
  height: 40%;
  width: 100%;

  & .HeaderLogo {
    height: 75px;
    width: auto;
  }

  & p {
    color: ${(props) => props.theme.colors.global.secondaryText};
    font-size: 1.6rem;
    font-weight: 600;
    padding: 2rem 0;
  }
`;

// Styled: LoginLeftSplash
const LoginLeftSplash = styled.div`
  height: 40%;
  width: 100%;

  display: grid;
  place-items: center;

  & svg {
    height: 100%;
    width: 100%;
  }
`;

// Styled: LoginRightContainer
const LoginRightContainer = styled.div`
  background: ${(props) => props.theme.colors.global.primaryBackground};
  display: grid;
  flex: 2;
  place-items: center;
`;
