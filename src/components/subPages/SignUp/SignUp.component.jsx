// Import: Dependencies
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import: Material UI Core
import { Button } from "@material-ui/core";

// Import: auth, provider
import { auth, googleProvider } from "../../../firebase";

// Import: StateProvider, reducer
import { useStateValue } from "../../../StateProvider";
import { actionTypes } from "../../../reducer";

// subPage: SignUp
function SignUp() {
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
    <SignUpContainer>
      <SignUpMain>
        <h2>Sign up to rizji</h2>
        <SignUpButtonContainer>
          <Button className="GoogleButton" type="submit" onClick={signIn}>
            Sign up with Google
          </Button>
        </SignUpButtonContainer>
        <p>Or</p>
        <SignUpInput>
          <h3>Username</h3>
          <input
            className="InputContainer"
            type="email"
            placeholder="Username"
          />
        </SignUpInput>
        <SignUpInput>
          <h3>Email Address</h3>
          <input
            className="InputContainer"
            type="email"
            placeholder="Email address"
          />
        </SignUpInput>
        <SignUpInput>
          <h3>Password</h3>
          <input
            className="InputContainer"
            type="password"
            placeholder="Password"
          />
        </SignUpInput>
        <SignUpInput>
          <h3>Confirm Password</h3>
          <input
            className="InputContainer"
            type="password"
            placeholder="Password"
          />
        </SignUpInput>
        <Button>Create Account</Button>
        <SignUpFooter>
          <span className="SignUpFooter__text">
            Already a member?
            <Link to="/">
              <span className="SignUpFooter__link">Sign in</span>
            </Link>
          </span>
        </SignUpFooter>
      </SignUpMain>
    </SignUpContainer>
  );
}

// Export: SignUp
export default SignUp;

// Styled: SignUpContainer
const SignUpContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  min-width: 60%;
  text-align: left;
`;

// Styled: SignUpMain
const SignUpMain = styled.div`
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

// Styled: SignUpButtonContainer
const SignUpButtonContainer = styled.div`
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

// Styled: SignUpInput
const SignUpInput = styled.div`
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

// Styled: SignUpFooter
const SignUpFooter = styled.div`
  margin: 2rem 0;
  text-align: center;

  & .SignUpFooter__text {
    color: ${(props) => props.theme.colors.global.secondaryText};

    & .SignUpFooter__link {
      color: ${(props) => props.theme.colors.global.primaryHighlight};
      cursor: pointer;
      padding: 1rem 0.5rem;
      transition: all 150ms linear;

      position: relative;
      text-decoration: none;
      display: inline-block;

      &:hover {
        color: ${(props) => props.theme.colors.global.secondaryHighlight};
        transition: all 150ms linear;
      }

      &:after {
        display: block;
        content: "";
        border-bottom: solid 2px
          ${(props) => props.theme.colors.global.secondaryHighlight};
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        transform-origin: 100% 50%;
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
