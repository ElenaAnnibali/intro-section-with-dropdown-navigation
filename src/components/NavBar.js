/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Dropdown from './DropDown';

const navBarStyles = css`
  display: flex;

  a:hover {
    color: #000;
  }

  img {
    position: absolute;
    width: 83.5px;
    height: 26.58px;
    left: 41.26px;
    top: 42px;
  }

  .firstDropdown {
    position: absolute;
    width: 56px;
    height: 16px;
    left: 187px;
    top: 42px;
    color: #686868;
  }

  .firstList {
    position: absolute;
    left: 165px;
    top: 50px;
    width: 153px;
    height: 190px;
    padding-left: 30px;
    text-align: left;

    background: #ffffff;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.149126);
    border-radius: 10px;
  }

  .secondDropdown {
    position: absolute;
    // width: 81px;
    // height: 16px;
    left: 306px;
    top: 10px;
    color: #686868;
  }

  .secondList {
    position: absolute;
    left: 290px;
    top: 10px;
    width: 120px;
    height: 140px;

    text-align: left;

    background: #ffffff;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.149126);
    border-radius: 10px;
  }

  .careers {
    position: absolute;
    width: 56px;
    height: 16px;
    left: 427px;
    top: 42px;
    font-size: 14px;
    line-height: 16px;
  }

  .about {
    position: absolute;
    width: 42px;
    height: 16px;
    left: 523px;
    top: 42px;
    font-size: 14px;
    line-height: 16px;
  }
`;

const rightSideStyles = css`
  position: absolute;
  width: 182px;
  height: 42px;
  left: 1218px;
  top: 21px;
  font-size: 14px;

  .login {
    position: absolute;
    height: 16px;
    left: 0%;
    right: 79.12%;
    top: 21px;
  }

  div {
    width: 104px;
    height: 42px;
    position: absolute;
    left: 42.86%;
    right: 0%;
    top: 28%;
    bottom: 0%;
    border: 1.5px solid #686868;
    border-radius: 14px;

    :hover {
      border: 1.5px solid #000;
    }
  }

  .register {
    position: absolute;
    height: 16px;
    left: 20%;
    right: 21.15%;
    top: calc(40% - 16px / 2);
  }
`;

export default function NavBar() {
  return (
    <div css={navBarStyles}>
      <img src="/images/logo.svg" alt="snap logo" />
      <Dropdown />
      <a className="careers">Careers</a>
      <a className="about">About</a>
      <div css={rightSideStyles}>
        <a className="login">Login</a>
        <div>
          <a className="register">Register</a>
        </div>
      </div>
    </div>
  );
}
