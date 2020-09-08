// Import: Dependencies
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import: Material UI Core
import { Button } from "@material-ui/core";

// subPage: PasswordReset
function PasswordReset() {
  return (
    <PasswordResetContainer>
      <PasswordResetMain>
        <h2>Forgot your password?</h2>
        <p>
          Enter the email address you used when joining rizji and we'll send you
          instructions to reset your password.
        </p>
        <PasswordResetInput>
          <h3>Email Address</h3>
          <input
            className="InputContainer"
            type="email"
            placeholder="Email address"
          />
        </PasswordResetInput>
        <Button>Reset Password</Button>
        <PasswordResetFooter>
          <span className="PasswordResetFooter__text">
            Not a member?
            <Link to="/sign-up">
              <span className="PasswordResetFooter__link">Sign up now</span>
            </Link>
          </span>
        </PasswordResetFooter>
      </PasswordResetMain>
    </PasswordResetContainer>
  );
}

// Export: PasswordReset
export default PasswordReset;

// Styled: PasswordResetContainer
const PasswordResetContainer = styled.div`
  display: grid;
  place-items: center;
  width: 40%;
`;

// Styled: PasswordResetMain
const PasswordResetMain = styled.div`
  height: 100%;
  width: 100%;

  & h2 {
    color: ${(props) => props.theme.colors.global.primaryText};
    font-size: 1.6rem;
  }

  & p {
    color: ${(props) => props.theme.colors.global.secondaryText};
    font-size: 1rem;
    padding: 1rem 0;
    text-align: left;
  }
`;

// Styled: PasswordResetInput
const PasswordResetInput = styled.div`
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

// Styled: PasswordResetFooter
const PasswordResetFooter = styled.div`
  padding-top: 1rem;
  text-align: center;

  & .PasswordResetFooter__text {
    color: ${(props) => props.theme.colors.global.secondaryText};

    & a {
      outline: none;
    }

    & .PasswordResetFooter__link {
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
