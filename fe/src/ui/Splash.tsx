import useTimeout from "@/lib/hooks";
import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

interface SplashProps {
  children: React.ReactNode;
}

export const Splash: React.FC<SplashProps> = ({ children }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [fullFadeOut, setFullFadeOut] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useTimeout(() => setFadeOut(true), 300);
  useTimeout(() => setFullFadeOut(true), 800);
  useTimeout(() => setIsRemoved(true), 1000);

  if (isRemoved) return <>{children}</>;

  return (
    <StyledContainer isFadeOut={fullFadeOut}>
      <StyledLogo>
        <StyledImage src="/splash-logo.svg" alt="loading" isFadeOut={fadeOut} />
      </StyledLogo>
      .
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ isFadeOut?: boolean }>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #333;
  text-align: center;
  color: #fff;

  ${({ isFadeOut }) =>
    isFadeOut
      ? css`
          animation-name: ${fullFadeOutAnime};
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
          opacity: 0;
        `
      : css``};
`;
const StyledLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const StyledImage = styled.img<{ isFadeOut?: boolean }>`
  width: 260px;
  ${({ isFadeOut }) =>
    isFadeOut
      ? css``
      : css`
          animation-name: ${fadeUpAnime};
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
          opacity: 0;
        `};
`;

const fullFadeOutAnime = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const fadeUpAnime = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
