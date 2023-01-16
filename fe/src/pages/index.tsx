import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import StickyBox from "react-sticky-box";

export default function IndexPage() {
  const [activeHamburger, setActiveHamburger] = useState(false);

  return (
    <StyledIndexContainer>
      <StickyBox>
        <StyledHeader>
          <Image src="/t-p.svg" alt="" width={32} height={32} />
          <StyledOpenBtn
            role="button"
            aria-pressed="false"
            onClick={() => setActiveHamburger(!activeHamburger)}
            isActive={activeHamburger}
          >
            <span></span>
            <span></span>
            <span></span>
          </StyledOpenBtn>
        </StyledHeader>
      </StickyBox>
      <StyledContainer>
        <StyledSubArea>
          <nav>
            <ul id="g-navi">
              <li>
                <a
                  href="https://www.instagram.com/tamastudy__tokyo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/insta.svg" alt="instagram" />
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noreferrer">
                  <img src="/twitter-outlined.svg" alt="twitter" />
                </a>
              </li>
            </ul>
          </nav>
        </StyledSubArea>

        <StyledMain>
          <StyledSlogan>
            함께
            <br />
            <strong>성장</strong>하는
            <br />
            즐거움
          </StyledSlogan>
        </StyledMain>
      </StyledContainer>
      <StyledFooter></StyledFooter>
    </StyledIndexContainer>
  );
}

const StyledIndexContainer = styled.div``;
const StyledHeader = styled.header`
  position: sticky;
  height: 80px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-right: 16px;
  padding-left: 16px;
  background: linear-gradient(to bottom, #fff, #fff 80%, #fff 30%, transparent);
  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
`;

const StyledOpenBtn = styled.div<{ isActive?: boolean }>`
  position: relative;
  background-color: ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
  cursor: pointer;
  width: 50px;
  height: 50px;

  span {
    display: inline-block;
    transition: all 0.4s;
    position: absolute;
    left: 14px;
    height: 3px;
    border-radius: 2px;
    background-color: #fff;
    width: 45%;

    &:nth-of-type(1) {
      top: 15px;
    }

    &:nth-of-type(2) {
      top: 23px;
    }

    &:nth-of-type(3) {
      top: 31px;
    }
  }

  ${({ isActive }) =>
    isActive
      ? css`
          span:nth-of-type(1) {
            top: 18px;
            left: 18px;
            transform: translateY(6px) rotate(-45deg);
            width: 30%;
          }
          span:nth-of-type(2) {
            opacity: 0;
          }
          span:nth-of-type(3) {
            top: 30px;
            left: 18px;
            transform: translateY(-6px) rotate(45deg);
            width: 30%;
          }
        `
      : css``};
`;

/**
 * Container
 */
const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

/**
 * Main
 */
const StyledMain = styled.main`
  flex: 1;
  height: 600vh;
`;
const StyledSlogan = styled.h1`
  margin-top: 64px;
  padding-right: 16px;
  padding-left: 16px;
  font-size: 3.6rem;

  strong {
    color: ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
  }
`;

/**
 * Footer
 */

const StyledFooter = styled.footer``;

/**
 * Aside
 */
const StyledSubArea = styled(StickyBox)`
  height: 100vh;
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 16px;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      li {
        a {
          img {
            width: 22px;
            height: 22px;
          }
        }
      }
    }
  }
`;
