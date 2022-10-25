/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NavBar from './components/NavBar';

const mainWrapperStyles = css`
  display: flex;
  flex-direction: column;
  gap: 125px;

  .leftWrapper {
    display: flex;
  }

  .contentWrapperStyles {
    position: absolute;
    width: 540px;
    height: 400px;

    h1 {
      position: absolute;
      width: 540px;
      height: 161px;
      left: 165px;
      top: 234px;
      font-weight: 700;
      font-size: 80px;
      line-height: 80px;
      letter-spacing: -1.11111px;
      color: #151515;
    }

    p {
      position: absolute;
      width: 445px;
      height: 84px;
      left: 165px;
      top: 443px;
    }
  }

  .iconsWrapper {
    width: 477.63px;
    height: 35.9px;

    .firstIcon {
      position: absolute;
      width: 113.14px;
      height: 20px;
      left: 165.38px;
      top: 750px;
    }

    .secondIcon {
      position: absolute;
      width: 73px;
      height: 35.9px;
      left: 319px;
      top: 742px;
    }

    .thirdIcon {
      position: absolute;
      width: 89.31px;
      height: 20px;
      left: 432px;
      top: 750px;
    }

    .fourthIcon {
      position: absolute;
      width: 82.01px;
      height: 24px;
      left: 561px;
      top: 748px;
    }
  }
`;

const buttonStyles = css`
  position: absolute;
  width: 163px;
  height: 56px;
  left: 165px;
  top: 578px;
  background: #151515;
  border-color: #151515;
  border-radius: 15px;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.25px;
  color: #fafafa;

  :hover {
    cursor: pointer;
    background: #fff;
    color: #151515;
    border: 1px solid #151515;
    border-radius: 15px;
  }
`;

const heroImageStyles = css`
  position: absolute;
  width: 480px;
  height: 640px;
  left: 830px;
  top: 130px;
  background: url(/images/image-hero-desktop.png);
  background-size: cover;
`;

function App() {
  return (
    <div>
      <NavBar />
      <div css={mainWrapperStyles} className="mainWrapper">
        <div className="leftWrapper">
          <div className="contentWrapperStyles">
            <h1>Make remote work</h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button css={buttonStyles}>Learn more</button>
          </div>
          <div className="iconsWrapper">
            <img
              className="firstIcon"
              src="/images/client-databiz.svg"
              alt="databiz icon"
            />
            <img
              className="secondIcon"
              src="/images/client-audiophile.svg"
              alt="audiophil icon"
            />
            <img
              className="thirdIcon"
              src="/images/client-meet.svg"
              alt="meet icon"
            />
            <img
              className="fourthIcon"
              src="/images/client-maker.svg"
              alt="maker icon"
            />
          </div>
        </div>
        <div className="rightWrapper">
          <div css={heroImageStyles} />
        </div>
      </div>
    </div>
  );
}

export default App;
