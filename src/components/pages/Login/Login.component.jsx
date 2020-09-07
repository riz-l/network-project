// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: Themes
import lightTheme from "../../../themes/light";
import darkTheme from "../../../themes/dark";

// Import: Logo
import { ReactComponent as LogoLight } from "../../../assets/images/logo2-light.svg";
import { ReactComponent as LogoDark } from "../../../assets/images/logo2-dark.svg";
import { ReactComponent as LoginSplashLight } from "../../../assets/images/login-splash-light.svg";
import { ReactComponent as LoginSplashDark } from "../../../assets/images/login-splash-dark.svg";

// Import: Material UI Icons
import TwitterIcon from "@material-ui/icons/Twitter";

// Import: Material UI Core
import { Button } from "@material-ui/core";

// Import: auth, provider
import { auth, googleProvider } from "../../../firebase";

// Import: StateProvider, reducer
import { useStateValue } from "../../../StateProvider";
import { actionTypes } from "../../../reducer";

// page: Login
function Login({ isDarkMode, setIsDarkMode }) {
  // Enables extraction of properties from StateProvider
  const [state, dispatch] = useStateValue();

  // Sign in function
  const signIn = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginLeftContainer>
        <LoginLeft>
          {isDarkMode ? (
            <LogoLight className="HeaderLogo" />
          ) : (
            <LogoDark className="HeaderLogo" />
          )}
          <p>Discover a social network for gamers all over the world.</p>
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
        <LoginRight>
          <LoginRightSignIn>
            <h2>Sign in to rizji</h2>
            <LoginRightButtonContainer>
              <Button className="GoogleButton" type="submit" onClick={signIn}>
                Sign in with Google
              </Button>
              <Button className="TwitterButton">
                <TwitterIcon />
              </Button>
            </LoginRightButtonContainer>
            <p>Or</p>
            <LoginRightInput>
              <h3>Email Address</h3>
              <input
                className="InputContainer"
                type="email"
                placeholder="Email address"
              />
            </LoginRightInput>
            <LoginRightInput>
              <h3>Password</h3>
              <input
                className="InputContainer"
                type="password"
                placeholder="Password"
              />
            </LoginRightInput>
            <Button>Sign in</Button>
          </LoginRightSignIn>

          <LoginRightSignUp>
            <span className="LoginRightSignUp__text">
              Not a member?
              <span className="LoginRightSignUp__link">Sign up now</span>
            </span>
          </LoginRightSignUp>
        </LoginRight>
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
`;

// Styled: LoginLeft
const LoginLeft = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 2rem;
  text-align: left;
  width: 80%;

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
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  & svg {
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

// Styled: LoginRight
const LoginRight = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

// Styled: LoginRightSignIn
const LoginRightSignIn = styled.div`
  height: 100%;
  width: 100%;

  & h2 {
    color: ${(props) => props.theme.colors.global.primaryText};
    font-size: 1.6rem;
  }

  & p {
    align-items: center;
    color: ${(props) => props.theme.colors.global.secondaryText};
    display: flex;
    font-size: 1.2rem;
    justify-content: center;
    padding: 1rem 0;
    text-align: center;
    width: 100%;

    &:before,
    &:after {
      content: "";
      border-top: 1px solid;
      flex: 1 0 20px;
      margin: 0 20px 0 0;
    }

    &:after {
      margin: 0 0 0 20px;
    }
  }

  & button {
    margin-top: 1rem;
    width: 180px;
  }
`;

// Styled: LoginRightButtonContainer
const LoginRightButtonContainer = styled.div`
  display: flex;
  margin: 1rem 0 2rem 0;

  & .GoogleButton {
    background: ${(props) => props.theme.colors.global.googleHighlight};
    color: ##ffffff;
    flex: 9;
    margin-right: 20px;

    &:hover {
      background: ${(props) => props.theme.colors.global.googleHighlightHover};
      color: #edeef2;
    }
  }

  & .TwitterButton {
    background: ${(props) => props.theme.colors.global.secondaryBackground};
    flex: 1;
    transition: all 150ms linear;

    & svg {
      color: ${(props) => props.theme.colors.global.secondaryText};
      transition: all 150ms linear;
    }

    &:hover {
      background: ${(props) => props.theme.colors.global.tertiaryBackground};
      transition: all 150ms linear;

      & svg {
        color: ${(props) => props.theme.colors.global.secondaryBackground};
        transition: all 150ms linear;
      }
    }
  }
`;

// Styled: LoginRightInput
const LoginRightInput = styled.div`
  margin: 2rem 0;

  & h3 {
    color: ${(props) => props.theme.colors.global.secondaryText};
  }

  & .InputContainer {
    align-items: center;
    background: ${(props) => props.theme.colors.global.secondaryBackground};
    border: 0;
    border-radius: 4px;
    color: ${(props) => props.theme.colors.global.primaryText};
    display: flex;
    padding: 10px;
    margin-top: 15px;
    transition: all 150ms linear;
    width: 100%;

    &:hover {
      box-shadow: 0 0 10px
        ${(props) => props.theme.colors.global.primaryHighlight};
      transition: all 150ms linear;
    }

    &:focus {
      box-shadow: 0 0 10px
        ${(props) => props.theme.colors.global.secondaryHighlight};
      outline: none !important;
      transition: all 150ms linear;
    }

    & input {
      background-color: transparent;
      border: none;
      font-size: 16px;
      outline-width: 0;
    }
  }
`;

// Styled: LoginRightSignUp
const LoginRightSignUp = styled.div`
  padding: 5rem 0;
  text-align: center;

  & .LoginRightSignUp__text {
    color: ${(props) => props.theme.colors.global.secondaryText};

    & .LoginRightSignUp__link {
      color: ${(props) => props.theme.colors.global.primaryHighlight};
      cursor: pointer;
      padding: 1rem 0.5rem;
      transition: all 150ms linear;

      &:hover {
        color: ${(props) => props.theme.colors.global.secondaryHighlight};
        transition: all 150ms linear;
      }
    }
  }
`;
