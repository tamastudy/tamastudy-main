import { useState } from "react";
import styled, { css, keyframes, useTheme } from "styled-components";
import Image from "next/image";
import StickyBox from "react-sticky-box";
import { Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useScrollBlock } from "@/lib/hooks";
import { Link as ScrollLink } from "react-scroll";
import { Element } from "react-scroll";
import ProgressBar from "react-progressbar-on-scroll";

export default function IndexPage() {
  const [activeHamburger, setActiveHamburger] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const theme = useTheme();

  const handleHamburger = () => {
    if (activeHamburger) {
      allowScroll();
    } else {
      blockScroll();
    }
    setActiveHamburger(!activeHamburger);
  };

  return (
    <StyledIndexContainer>
      <ProgressBar color={theme.colors?.primary ?? "#6500fc"} />
      <StickyBox>
        <StyledHeader>
          <Image src="/t-p.svg" alt="" width={32} height={32} />
        </StyledHeader>
      </StickyBox>
      <StyledOpenBtn
        role="button"
        aria-pressed="false"
        onClick={handleHamburger}
        isActive={activeHamburger}
      >
        <span></span>
        <span></span>
        <span></span>
      </StyledOpenBtn>

      <StyledGlobalNav isPanelactive={activeHamburger}>
        <div>
          <ul>
            <li>
              <ScrollLink
                activeClass={"mobile-menu__active"}
                spy={true}
                smooth={true}
                duration={500}
                to="top"
                offset={-64}
                role="link"
                aria-label={`internal scroll link`}
                onClick={handleHamburger}
              >
                <span>TOP</span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass={"mobile-menu__active"}
                spy={true}
                smooth={true}
                duration={500}
                to="about"
                offset={-64}
                role="link"
                aria-label={`internal scroll link`}
                onClick={handleHamburger}
              >
                <span>BACKGROUND</span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass={"mobile-menu__active"}
                spy={true}
                smooth={true}
                duration={500}
                to="members"
                offset={-64}
                role="link"
                aria-label={`internal scroll link`}
                onClick={handleHamburger}
              >
                <span>MEMBERS</span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass={"mobile-menu__active"}
                spy={true}
                smooth={true}
                duration={500}
                to="contact"
                offset={-64}
                role="link"
                aria-label={`internal scroll link`}
                onClick={handleHamburger}
              >
                <span>CONTACT</span>
              </ScrollLink>
            </li>
          </ul>
        </div>
      </StyledGlobalNav>
      <StyledCircleBg isCircleActive={activeHamburger} />
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
          <Element name="top">
            <StyledSection1>
              <StyledSlogan>
                <span>함</span>
                <span>께</span>
                <br />
                <strong>
                  <span>성</span>
                  <span>장</span>
                </strong>
                <span>하</span>
                <span>는</span>
                <br />
                <span>즐</span>
                <span>거</span>
                <span>움</span>
              </StyledSlogan>
            </StyledSection1>
          </Element>

          <Element name="about">
            <StyledSection2>
              <h2>
                <strong>A</strong>BOUT
              </h2>
              <p>
                타지에서 혼자 공부하기에는 정보의 부족이 심각했습니다. 또한
                공부를 목적으로 모이는 사람들에게 항상 자신의 이익을 위해
                접근하는 사람들 또한 문제 였습니다. 그래서 저희는 타마스터디를
                통해 사람들에게 선한 영향력을 주고 외국에서 서로 힘이 되어주는
                커뮤니티를 만들게 되었습니다.
              </p>
            </StyledSection2>
          </Element>

          <Element name="members">
            <StyledSection3>
              <h2>
                <strong>M</strong>embers
              </h2>
              <StyledSwiperWrapper>
                <Swiper
                  modules={[Autoplay, A11y]}
                  spaceBetween={50}
                  slidesPerView={1.4}
                  onSlideChange={() => console.log("slide change")}
                  autoplay={{ delay: 3000 }}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <StyledMemberWrapper>
                      <StyledMemberAvatar>
                        <Image
                          src="default-avatar.svg"
                          alt="avatar"
                          width={80}
                          height={80}
                        />
                      </StyledMemberAvatar>
                      <StyledMemberInfoWrapper>
                        <StyledMemberInfoName>
                          Jongseok Lee
                        </StyledMemberInfoName>
                        <StyledMemberInfoJob>
                          Frontend Developer
                        </StyledMemberInfoJob>
                        <StyledMemberInfoJobPlace>
                          LINE
                        </StyledMemberInfoJobPlace>
                      </StyledMemberInfoWrapper>
                    </StyledMemberWrapper>
                  </SwiperSlide>
                  <SwiperSlide>
                    <StyledMemberWrapper>
                      <StyledMemberAvatar>
                        <Image
                          src="default-avatar.svg"
                          alt="avatar"
                          width={80}
                          height={80}
                        />
                      </StyledMemberAvatar>
                      <StyledMemberInfoWrapper>
                        <StyledMemberInfoName>
                          Jeonghan Gam
                        </StyledMemberInfoName>
                        <StyledMemberInfoJob>
                          Software Engineer
                        </StyledMemberInfoJob>
                        <StyledMemberInfoJobPlace>
                          Amazon JP
                        </StyledMemberInfoJobPlace>
                      </StyledMemberInfoWrapper>
                    </StyledMemberWrapper>
                  </SwiperSlide>
                  <SwiperSlide>
                    <StyledMemberWrapper>
                      <StyledMemberAvatar>
                        <Image
                          src="default-avatar.svg"
                          alt="avatar"
                          width={80}
                          height={80}
                        />
                      </StyledMemberAvatar>
                      <StyledMemberInfoWrapper>
                        <StyledMemberInfoName>
                          Dongmin Park
                        </StyledMemberInfoName>
                        <StyledMemberInfoJob>
                          Frontend Engineer
                        </StyledMemberInfoJob>
                        <StyledMemberInfoJobPlace>
                          TORIHADA
                        </StyledMemberInfoJobPlace>
                      </StyledMemberInfoWrapper>
                    </StyledMemberWrapper>
                  </SwiperSlide>
                  <SwiperSlide>
                    <StyledMemberWrapper>
                      <StyledMemberAvatar>
                        <Image
                          src="default-avatar.svg"
                          alt="avatar"
                          width={80}
                          height={80}
                        />
                      </StyledMemberAvatar>
                      <StyledMemberInfoWrapper>
                        <StyledMemberInfoName>
                          Hyeongil Park
                        </StyledMemberInfoName>
                        <StyledMemberInfoJob>
                          Backend Engineer
                        </StyledMemberInfoJob>
                        <StyledMemberInfoJobPlace>
                          teamLab
                        </StyledMemberInfoJobPlace>
                      </StyledMemberInfoWrapper>
                    </StyledMemberWrapper>
                  </SwiperSlide>
                </Swiper>
              </StyledSwiperWrapper>
            </StyledSection3>
          </Element>

          <Element name="contact">
            <StyledSection4>
              <h2>
                <strong>C</strong>ontact
              </h2>
            </StyledSection4>
          </Element>
        </StyledMain>
      </StyledContainer>
      <StyledFooter>
        <Image
          src="/logo-small.svg"
          width={240}
          height={120}
          alt="footer-logo"
        />
      </StyledFooter>
    </StyledIndexContainer>
  );
}

const StyledIndexContainer = styled.div``;
const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 16px;
  background: linear-gradient(to bottom, #fff, #fff 80%, #fff 30%, transparent);
  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
`;

const StyledOpenBtn = styled.div<{ isActive?: boolean }>`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
  cursor: pointer;
  width: 50px;
  height: 50px;
  z-index: 999999;
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
  flex-grow: 1;
  /* comment and uncomment the next line to see the effect */
  min-width: 0;
  margin-left: 8px;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
`;

/**
 * Section 1
 */

const StyledSection1 = styled.section`
  padding-top: 248px;
  height: calc(100vh - 64px);
`;

const StyledSlogan = styled.h1`
  padding-right: 16px;
  padding-left: 16px;
  font-size: 3.6rem;

  strong {
    color: ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
  }
`;

/**
 * Section 2 - Introduction
 */

const StyledSection2 = styled.section`
  margin-bottom: 248px;

  h2 {
    color: ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
    font-size: 2rem;
    strong {
      font-size: 2.8rem;
    }
    margin-bottom: 8px;
  }

  p {
    line-height: 1.6;
  }
`;

/**
 * Section 3 - Members
 */

const StyledSection3 = styled.section`
  margin-bottom: 248px;
  h2 {
    text-align: right;
    color: ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
    font-size: 2rem;
    strong {
      font-size: 2.8rem;
    }
    margin-bottom: 48px;
  }

  p {
    line-height: 1.6;
  }
`;

const StyledSwiperWrapper = styled.div`
  isolation: isolate;
  position: relative;
  z-index: 1;
`;

/**
 * Footer
 */

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
`;

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

/**
 * GlobalNav
 */

const GnaviAnime = keyframes`
  0% {opacity: 0}
  100% {opacity: 1}
`;

const StyledGlobalNav = styled.nav<{ isPanelactive?: boolean }>`
  position: fixed;
  > div {
    display: none;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }

  ul {
    opacity: 0;
    position: absolute;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;

    li a {
      display: inline-block;
      text-decoration: none;
      color: #fff;
      padding: 10px;
    }
  }

  ${({ isPanelactive }) =>
    isPanelactive &&
    css`
      z-index: 999;
      top: 0;
      width: 100%;
      height: 100vh;
      > div {
        display: block;
      }

      ul {
        opacity: 1;

        li {
          animation-name: ${GnaviAnime};
          animation-duration: 1s;
          animation-delay: 0.2s;
          animation-fill-mode: forwards;
          opacity: 0;
        }
      }
    `};
`;

const StyledCircleBg = styled.div<{ isCircleActive?: boolean }>`
  position: fixed;
  z-index: 5;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
  transform: scale(0);
  right: 0;
  top: 0;
  transition: all 0.6s;

  ${({ isCircleActive }) =>
    isCircleActive &&
    css`
      transform: scale(50);
    `};
`;

/**
 * Member
 */
const StyledMemberWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledMemberAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 50%;
    overflow: hidden;
    width: 80px;
    height: 80px;
  }
`;
const StyledMemberInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledMemberInfoName = styled.h4`
  font-size: 1.66rem;
  margin-bottom: 4px;
  font-weight: 700;
`;
const StyledMemberInfoJob = styled.span`
  font-size: 1.1rem;
  margin-bottom: 4px;
`;
const StyledMemberInfoJobPlace = styled.span`
  font-size: 0.8rem;
  color: #3c3c3c;
`;

/**
 * Contact
 */
const StyledSection4 = styled.section`
  margin-bottom: 248px;
  h2 {
    color: ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
    font-size: 2rem;
    strong {
      font-size: 2.8rem;
    }
    margin-bottom: 8px;
  }

  p {
    line-height: 1.6;
  }
`;
