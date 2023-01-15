"use client";

import { useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

export default function Home() {
  const [activeHamburger, setActiveHamburger] = useState(false);
  return (
    <StyledHomeContainer>
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
      <StyledMain>
        <StyledSlogan>
          함께
          <br />
          <strong>성장</strong>하는
          <br />
          즐거움
        </StyledSlogan>
      </StyledMain>
      <StyledFooter></StyledFooter>
    </StyledHomeContainer>
  );
}

const StyledHomeContainer = styled.div`
  position: relative;
`;
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
  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
`;

const StyledOpenBtn = styled.div<{ isActive?: boolean }>`
  position: relative;
  background-color: #6500fc;
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
 * Main
 */
const StyledMain = styled.main``;
const StyledSlogan = styled.h1`
  margin-top: 64px;
  padding-right: 16px;
  padding-left: 16px;
  font-size: 3.6rem;

  strong {
    color: #6500fc;
  }
`;

/**
 * Footer
 */

const StyledFooter = styled.footer``;
