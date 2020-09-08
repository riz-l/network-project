// Import: Dependencies
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import: Material UI Icons
import TwitterIcon from "@material-ui/icons/Twitter";

// Import: Material UI Core
import { Button } from "@material-ui/core";

// Import: auth, provider
import { auth, googleProvider } from "../../../firebase";

// Import: StateProvider, reducer
import { useStateValue } from "../../../StateProvider";
import { actionTypes } from "../../../reducer";

// subPage: SignIn
function SignIn() {
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
    <SignInContainer>
      <SignInMain>
        <h2>Sign in to rizji</h2>
        <SignInButtonContainer>
          <Button className="GoogleButton" type="submit" onClick={signIn}>
            Sign in with Google
          </Button>
          <Button className="TwitterButton">
            <TwitterIcon />
          </Button>
        </SignInButtonContainer>
        <p>Or</p>
        <SignInInput>
          <h3>Email Address</h3>
          <input
            className="InputContainer"
            type="email"
            placeholder="Email address"
          />
        </SignInInput>
        <SignInInput>
          <SignInPassword>
            <h3>Password</h3>
            <Link to="/password-reset">
              <span>Forgot password?</span>
            </Link>
          </SignInPassword>
          <input
            className="InputContainer"
            type="password"
            placeholder="Password"
          />
        </SignInInput>
        <Button>Sign in</Button>
        <SignInFooter>
          <span className="SignInFooter__text">
            Not a member?
            <Link to="/sign-up">
              <span className="SignInFooter__link">Sign up now</span>
            </Link>
          </span>
        </SignInFooter>
      </SignInMain>
    </SignInContainer>
  );
}

// Export: SignIn
export default SignIn;

// Styled: SignInContainer
const SignInContainer = styled.div`
  display: grid;
  place-items: center;
`;

// Styled: SignInMain
const SignInMain = styled.div`
  height: 100%;
  width: 60%;

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

// Styled: SignInButtonContainer
const SignInButtonContainer = styled.div`
  display: flex;
  margin: 1rem 0 2rem 0;

  & .GoogleButton {
    background: ${(props) => props.theme.colors.global.googleHighlight};
    flex: 9;
    margin-right: 20px;

    &:hover {
      background: ${(props) => props.theme.colors.global.googleHighlightHover};
      color: #edeef2;
    }

    & span {
      color: #ffffff;
      text-transform: none;
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

// Styled: SignInInput
const SignInInput = styled.div`
  margin: 2rem 0;

  & h3 {
    color: ${(props) => props.theme.colors.global.secondaryText};
    margin-bottom: 4px;
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
        ${(props) => props.theme.colors.global.googleHighlight};
      transition: all 150ms linear;
    }

    &:focus {
      box-shadow: 0 0 10px
        ${(props) => props.theme.colors.global.googleHighlightHover};
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

// Styled: SignInPassword
const SignInPassword = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  & span {
    color: ${(props) => props.theme.colors.global.primaryHighlight};
    cursor: pointer;
    display: inline-block;
    position: relative;
    text-decoration: none;
    transition: all 150ms linear;

    &:hover {
      color: ${(props) => props.theme.colors.global.secondaryHighlight};
      transition: all 150ms linear;
    }

    &:after {
      border-bottom: solid 2px
        ${(props) => props.theme.colors.global.secondaryHighlight};
      content: "";
      display: block;
      margin-top: 4px;
      transform: scaleX(0);
      transform-origin: 100% 50%;
      transition: transform 250ms ease-in-out;
    }

    &:hover:after,
    &:focus:after,
    &:active:after {
      transform: scaleX(1);
      transform-origin: 0 50%;
    }
  }

  & a {
    outline: none;
  }
`;

// Styled: SignInFooter
const SignInFooter = styled.div`
  padding-top: 1rem;
  text-align: center;

  & .SignInFooter__text {
    color: ${(props) => props.theme.colors.global.secondaryText};

    & a {
      outline: none;
    }

    & .SignInFooter__link {
      color: ${(props) => props.theme.colors.global.primaryHighlight};
      cursor: pointer;
      display: inline-block;
      padding: 1rem 0.5rem;
      position: relative;
      text-decoration: none;
      transition: all 150ms linear;

      &:hover {
        color: ${(props) => props.theme.colors.global.secondaryHighlight};
        transition: all 150ms linear;
      }

      &:after {
        border-bottom: solid 2px
          ${(props) => props.theme.colors.global.secondaryHighlight};
        content: "";
        display: block;
        margin-top: 4px;
        transform: scaleX(0);
        transform-origin: 100% 50%;
        transition: transform 250ms ease-in-out;
      }

      &:hover:after,
      &:focus:after,
      &:active:after {
        transform: scaleX(1);
        transform-origin: 0 50%;
      }
    }
  }
`;
