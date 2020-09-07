// Import: Dependencies
import React from "react";
import styled from "styled-components";

// Import: Themes
import lightTheme from "../../../themes/light";
import darkTheme from "../../../themes/dark";

// Import: Logo
import { ReactComponent as LogoLight } from "../../../assets/images/logo2-light.svg";
import { ReactComponent as LogoDark } from "../../../assets/images/logo2-dark.svg";

// Import: Material UI Icons
import TwitterIcon from "@material-ui/icons/Twitter";

// Import: Material UI Core
import { Button } from "@material-ui/core";

// Import: auth, provider
import { auth, provider } from "../../../firebase";

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
      .signInWithPopup(provider)
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
        </LoginLeft>
      </LoginLeftContainer>

      <LoginRightContainer>
        <LoginRight>
          <span>
            Not a member? <span>Sign up now</span>
          </span>

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
              <input className="InputContainer" type="email" />
            </LoginRightInput>
            <LoginRightInput>
              <h3>Password</h3>
              <input className="InputContainer" type="password" />
            </LoginRightInput>
            <Button>Sign in</Button>
          </LoginRightSignIn>
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
  height: 100vh;

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

// Styled: LoginLeftContainer
const LoginLeftContainer = styled.div`
  background: ${(props) => props.theme.colors.global.secondaryBackground};
  flex: 1;
`;

// Styled: LoginLeft
const LoginLeft = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4rem;
  text-align: left;

  & svg {
    height: 75px;
    width: auto;
  }

  & p {
    color: ${(props) => props.theme.colors.global.secondaryText};
    font-size: 1.6rem;
    font-weight: 600;
    margin: 2rem 0;
  }
`;

// Styled: LoginRightContainer
const LoginRightContainer = styled.div`
  background: ${(props) => props.theme.colors.global.primaryBackground};
  flex: 2;
`;

// Styled: LoginRight
const LoginRight = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 8rem 4rem;
  text-align: left;
`;

// Styled: LoginRightSignIn
const LoginRightSignIn = styled.div`
  height: 100%;
  width: 45%;

  & h2 {
    color: ${(props) => props.theme.colors.global.primaryText};
    font-size: 1.6rem;
  }

  & p {
    color: ${(props) => props.theme.colors.global.secondaryText};
    text-align: center;
  }

  & button {
    margin-top: 1rem;
    width: 180px;
  }
`;

// Styled: LoginRightButtonContainer
const LoginRightButtonContainer = styled.div`
  display: flex;
  margin: 0 0 2rem 0;

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
    background: ${(props) => props.theme.colors.global.tertiaryBackground};
    flex: 1;
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
    background: ${(props) => props.theme.colors.global.tertiaryBackground};
    border: 0;
    border-radius: 4px;
    color: ${(props) => props.theme.colors.global.primaryBackground};
    display: flex;
    padding: 10px;
    margin-top: 10px;
    width: 100%;

    & input {
      background-color: transparent;
      border: none;
      font-size: 14px;
      outline-width: 0;
    }
  }
`;
