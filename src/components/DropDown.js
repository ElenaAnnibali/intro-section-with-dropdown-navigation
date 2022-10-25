/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const dropdownStyles = css`
  font-size: 14px;
  line-height: 16px;

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  li {
    // display: block;
    // float: left;
    padding: 1rem;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;
    line-height: 16px;

    .icon {
      position: absolute;
      width: 16px;
      height: 16px;
      left: -16px;
      top: 16px;
    }

    .todoIcon {
      background: url('/images/icon-todo.svg');
      background-repeat: no-repeat;
    }

    .calendarIcon {
      background: url('/images/icon-calendar.svg');
      background-repeat: no-repeat;
    }

    .remindersIcon {
      background: url('/images/icon-reminders.svg');
      background-repeat: no-repeat;
    }

    .planningIcon {
      background: url('/images/icon-planning.svg');
      background-repeat: no-repeat;
    }
  }

  li a {
    width: 5rem;
    color: #686868;
  }

  a:hover {
    color: #000;

    .arrow {
      background: url('/images/icon-arrow-up.svg');
      background-repeat: no-repeat;
      width: 13px;
      height: 9px;
      position: absolute;
      left: 65px;
      top: 34.5%;
      fill: #000;
    }
  }

  li:hover,
  li:focus-within {
    cursor: pointer;
  }

  li:focus-within a {
    outline: none;
  }

  ul li ul {
    visibility: hidden;
    opacity: 0;
    min-width: 5rem;
    position: absolute;
    transition: all 0.5s ease;
    margin-top: 1rem;
    left: 0;
    display: none;
  }

  ul li:hover > ul,
  ul li:focus-within > ul,
  ul li ul:hover,
  ul li ul:focus {
    visibility: visible;
    opacity: 1;
    display: block;
  }

  ul li ul li {
    clear: both;
    width: 100%;
  }

  .arrow {
    background: url('/images/icon-arrow-down.svg');
    background-repeat: no-repeat;
    width: 13px;
    height: 9px;
    position: absolute;
    left: 65px;
    top: 34.5%;
  }

  .secondArrow {
    left: 68px;
  }
`;

export default function Dropdown() {
  return (
    <div css={dropdownStyles}>
      <nav role="navigation">
        <ul>
          <li>
            <a className="firstDropdown" href="/">
              Features <i className="arrow" />
            </a>

            <ul className="firstList">
              <li>
                <a href="/">
                  <i className="icon todoIcon" />
                  Todo List
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="icon calendarIcon" />
                  Calendar
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="icon remindersIcon" />
                  Reminders
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="icon planningIcon" />
                  Planning
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="secondDropdown" href="/">
              Company <i className="arrow secondArrow" />
            </a>
            <ul className="secondList">
              <li>
                <a href="/">History</a>
              </li>
              <li>
                <a href="/">Our Team</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
