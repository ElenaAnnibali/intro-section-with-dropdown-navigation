/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Select from 'react-select';

const navBarStyles = css`
  display: flex;

  img {
    position: absolute;
    width: 83.5px;
    height: 26.58px;
    left: 41.26px;
    top: 42px;
  }

  a {
    position: absolute;
    width: 56px;
    height: 16px;
    left: 598px;
    top: 42px;
  }

  .about {
    left: 696px;
  }
`;
const dropdownStyles = css`
  position: absolute;
  width: 160px;
  height: 16px;
  left: 187px;
  top: 34px;
`;

const secondDropdownStyles = css`
  position: absolute;
  width: 160px;
  height: 16px;
  left: 396px;
  top: 34px;
`;

const rightSideStyles = css`
  position: absolute;
  width: 182px;
  height: 42px;
  left: 1218px;
  top: 21px;

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
  }

  .register {
    position: absolute;
    height: 16px;
    left: 14%;
    right: 21.15%;
    top: calc(40% - 16px / 2);
  }
`;

const featuresOptions = [
  { value: 'Todo List', label: 'Todo List' },
  { value: 'Calendar', label: 'Calendar' },
  { value: 'Reminders', label: 'Reminders' },
  { value: 'Planning', label: 'Planning' },
];

const companyOptions = [
  { value: 'History', label: 'History' },
  { value: 'Our Team', label: 'Our Team' },
  { value: 'Blog', label: 'Blog' },
];

export default function NavBar() {
  const [selectedFeatOption, setSelectedFeatOption] = useState(null);
  const [selectedCompOption, setSelectedCompOption] = useState(null);

  return (
    <div css={navBarStyles}>
      <img src="/images/logo.svg" alt="snap logo" />
      <Select
        css={dropdownStyles}
        defaultValue={selectedFeatOption}
        onChange={setSelectedFeatOption}
        options={featuresOptions}
        placeholder="Features"
      />
      <Select
        css={secondDropdownStyles}
        className="SecondDropdown"
        defaultValue={selectedCompOption}
        onChange={setSelectedCompOption}
        options={companyOptions}
        placeholder="Company"
      />
      <a>Careers</a>
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
