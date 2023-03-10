import { useScrollBlock, useScrollPosition } from "@/lib/hooks";
import { History } from "@/ui/History";
import { Splash } from "@/ui/Splash";
import UserCard from "@/ui/UserCard";
import { yupResolver } from "@hookform/resolvers/yup";
import parse from "html-react-parser";
import Image from "next/image";
import { Suspense, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ProgressBar from "react-progressbar-on-scroll";
import { Element, Link as ScrollLink } from "react-scroll";
import StickyBox from "react-sticky-box";
import { CSSTransition } from "react-transition-group";
import styled, { css, keyframes, useTheme } from "styled-components";
import { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import * as yup from "yup";
// Fetching data from the JSON file
import { zIndex } from "@/lib/consts";
import { shuffle } from "@/lib/utils";
import { User } from "@/types/interfaces";
import GridGallery from "@/ui/GridGallery";
import News from "@/ui/News";
import { QueryErrorResetBoundary, useQuery } from "@tanstack/react-query";
import fsPromises from "fs/promises";
import { GetServerSideProps, NextPage } from "next";
import path from "path";
import { ErrorBoundary } from "react-error-boundary";
import MainSection from "@/ui/MainSection";

const SCROLL_LINK_OFFSET = -64 - 16;

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  users: User[];
}> = async () => {
  const filePath = path.join(process.cwd(), "src/data/user-cards.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData: User[] = JSON.parse(jsonData.toString());

  return {
    props: {
      users: shuffle(objectData).map((user) => ({
        ...user,
      })),
    },
  };
};

interface IndexPageProps {
  users: User[];
}

const IndexPage: NextPage<IndexPageProps> = ({ users }) => {
  const [activeHamburger, setActiveHamburger] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const scrollPosition = useScrollPosition();
  const theme = useTheme();
  const { data: userData } = useQuery<User[]>(
    ["users"],
    () => {
      return users;
    },
    {
      initialData: users,
      suspense: true,
    }
  );

  const handleHamburger = () => {
    if (activeHamburger) {
      allowScroll();
    } else {
      blockScroll();
    }
    setActiveHamburger(!activeHamburger);
  };

  return (
    <Splash>
      <StyledIndexContainer>
        <StyledInnerContainer>
          <StyledHeaderWrapper
            isNavActive={activeHamburger}
            isScrolled={scrollPosition > 64}
          >
            <ProgressBar color={theme.colors?.primary ?? "#6500fc"} />
            <StyledHeader>
              <Image src="/t-p.svg" alt="" width={32} height={32} />
              <div>
                <ul>
                  <li>
                    <ScrollLink
                      activeClass={"active"}
                      spy={true}
                      smooth={true}
                      duration={500}
                      to="top"
                      offset={SCROLL_LINK_OFFSET}
                      role="link"
                      aria-label={`internal scroll link`}
                    >
                      <span>TOP</span>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass={"active"}
                      spy={true}
                      smooth={true}
                      duration={500}
                      to="about"
                      offset={SCROLL_LINK_OFFSET}
                      role="link"
                      aria-label={`internal scroll link`}
                    >
                      <span>ABOUT</span>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass={"active"}
                      spy={true}
                      smooth={true}
                      duration={500}
                      to="members"
                      offset={SCROLL_LINK_OFFSET}
                      role="link"
                      aria-label={`internal scroll link`}
                    >
                      <span>MEMBERS</span>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass={"active"}
                      spy={true}
                      smooth={true}
                      duration={500}
                      to="news"
                      offset={SCROLL_LINK_OFFSET}
                      role="link"
                      aria-label={`internal scroll link`}
                    >
                      <span>NEWS</span>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass={"active"}
                      spy={true}
                      smooth={true}
                      duration={500}
                      to="gallery"
                      offset={SCROLL_LINK_OFFSET}
                      role="link"
                      aria-label={`internal scroll link`}
                    >
                      <span>GALLERY</span>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass={"active"}
                      spy={true}
                      smooth={true}
                      duration={500}
                      to="faq"
                      offset={SCROLL_LINK_OFFSET}
                      role="link"
                      aria-label={`internal scroll link`}
                    >
                      <span>FAQ</span>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass={"active"}
                      spy={true}
                      smooth={true}
                      duration={500}
                      to="contact"
                      offset={SCROLL_LINK_OFFSET}
                      role="link"
                      aria-label={`internal scroll link`}
                    >
                      <span>CONTACT</span>
                    </ScrollLink>
                  </li>
                </ul>
              </div>
            </StyledHeader>
          </StyledHeaderWrapper>
        </StyledInnerContainer>
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
                  activeClass={"active"}
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="top"
                  offset={SCROLL_LINK_OFFSET}
                  role="link"
                  aria-label={`internal scroll link`}
                  onClick={handleHamburger}
                >
                  <span>TOP</span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass={"active"}
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="about"
                  offset={SCROLL_LINK_OFFSET}
                  role="link"
                  aria-label={`internal scroll link`}
                  onClick={handleHamburger}
                >
                  <span>ABOUT</span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass={"active"}
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="members"
                  offset={SCROLL_LINK_OFFSET}
                  role="link"
                  aria-label={`internal scroll link`}
                  onClick={handleHamburger}
                >
                  <span>MEMBERS</span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass={"active"}
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="news"
                  offset={SCROLL_LINK_OFFSET}
                  role="link"
                  aria-label={`internal scroll link`}
                  onClick={handleHamburger}
                >
                  <span>NEWS</span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass={"active"}
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="gallery"
                  offset={SCROLL_LINK_OFFSET}
                  role="link"
                  aria-label={`internal scroll link`}
                  onClick={handleHamburger}
                >
                  <span>GALLERY</span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass={"active"}
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="faq"
                  offset={SCROLL_LINK_OFFSET}
                  role="link"
                  aria-label={`internal scroll link`}
                  onClick={handleHamburger}
                >
                  <span>FAQ</span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass={"active"}
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="contact"
                  offset={SCROLL_LINK_OFFSET}
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
        <StyledInnerContainer>
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
              <MainSection elementName="top" isFirst>
                <StyledSlogan>
                  <span>???</span>
                  <span>???</span>
                  <br />
                  <strong>
                    <span>???</span>
                    <span>???</span>
                  </strong>
                  <span>???</span>
                  <span>???</span>
                  <br />
                  <span>???</span>
                  <span>???</span>
                  <span>???</span>
                </StyledSlogan>
              </MainSection>
              <MainSection elementName="about" hasTitle>
                <StyledAbout>
                  <History />
                  <p>
                    ???????????? ?????? ?????????????????? ????????? ????????? ??????????????????.
                    ????????? ???????????? ????????? ??????????????? ?????? ????????? ????????? ??????
                    ???????????? ????????? ?????? ?????? ????????????. ????????? ????????? ???????????????
                    ?????? ???????????? ?????? ???????????? ?????? ?????? ???????????? ???????????????
                    ???????????? ?????????????????????. ??? ?????? ??????????????? ?????? ????????????
                    ?????? ???????????? ?????????????????? ???????????? ????????????.
                  </p>
                </StyledAbout>
              </MainSection>
              <MainSection elementName="members" hasTitle>
                <QueryErrorResetBoundary>
                  {({ reset }) => {
                    return (
                      <ErrorBoundary
                        FallbackComponent={ErrorFallback}
                        onReset={reset}
                      >
                        <Suspense fallback={<p>Loading member...</p>}>
                          <StyledSwiperWrapper>
                            <Swiper
                              modules={[A11y]}
                              spaceBetween={16}
                              slidesPerView="auto"
                              grabCursor
                            >
                              {userData.map((user) => (
                                <SwiperSlide key={user.id}>
                                  <UserCard
                                    {...user}
                                    bgNum={userData.length % 3}
                                  />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </StyledSwiperWrapper>
                        </Suspense>
                      </ErrorBoundary>
                    );
                  }}
                </QueryErrorResetBoundary>
              </MainSection>
              <MainSection elementName="news" hasTitle>
                <News />
              </MainSection>
              <MainSection elementName="gallery" hasTitle>
                <GridGallery />
              </MainSection>
              <MainSection elementName="faq" hasTitle>
                <div>
                  <StyledAccordionArea>
                    <Accordion
                      title="?????? ????????? ????????? ??????????"
                      description="?????? 2??? ?????? ????????? ???????????? ???????????? ????????? ?????? ???????????????."
                    />
                    <Accordion
                      title="???????????? ??????????"
                      description="????????? ?????? ???????????? ?????? ??? ????????????. <br />?????? 1??? 3,000??? ~ 5,000??? ???????????????."
                    />
                    <Accordion
                      title="????????? ????????????????"
                      description="????????? ?????? ??????????????? ???????????????."
                    />
                    <Accordion
                      title="?????? ????????? ????????? ??????????"
                      description="?????? Contact ????????? ??????????????????."
                    />
                  </StyledAccordionArea>
                </div>
              </MainSection>
              <MainSection elementName="contact" hasTitle>
                <ContactForm />
              </MainSection>
            </StyledMain>
          </StyledContainer>
        </StyledInnerContainer>
        <StyledFooter>
          <div role="button">
            <ScrollLink
              activeClass={"active"}
              spy={true}
              smooth={true}
              duration={500}
              to="top"
              offset={SCROLL_LINK_OFFSET}
              role="link"
              aria-label={`internal scroll link`}
            >
              TOP
            </ScrollLink>
          </div>
          <Image
            src="/logo-small.svg"
            width={240}
            height={120}
            alt="footer-logo"
          />
        </StyledFooter>
      </StyledIndexContainer>
    </Splash>
  );
};

export default IndexPage;

const StyledIndexContainer = styled.div``;
const StyledInnerContainer = styled.div`
  ${({ theme }) => theme.media.laptop`
    width: 62rem;
    margin: 0 auto;
  `};
`;

const StyledHeaderWrapper = styled.header<{
  isNavActive?: boolean;
  isScrolled?: boolean;
}>`
  position: fixed;
  z-index: ${zIndex.gbHeader};
  padding-top: 4px;
  width: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 86%,
    rgba(255, 255, 255, 0.7553396358543417) 92%,
    rgba(255, 255, 255, 0) 100%
  );
  ${({ isScrolled }) => isScrolled && css``};
  ${({ isNavActive, theme }) => isNavActive && css``};
  ${({ theme }) => theme.media.laptop`
    width: 62rem;
    margin: 0 auto;
  `};
`;

const StyledHeader = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 16px 16px 32px;
  transition: all 500ms ease-in-out;

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
  > div {
    display: none;

    ${({ theme }) => theme.media.laptop`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `};
    ul {
      display: flex;
      list-style: none;
      li {
        cursor: pointer;
        &:not(:last-of-type) {
          margin-right: 32px;
        }
        a {
          &.active {
            font-weight: 700;
            color: ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
          }
        }
      }
    }
  }
`;

const StyledOpenBtn = styled.div<{ isActive?: boolean }>`
  position: fixed;
  top: 8px;
  right: 8px;
  z-index: ${zIndex.gbBtn};
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

  ${({ theme }) => theme.media.laptop`
    display: none;
  `};
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

const StyledSlogan = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  font-size: 3.6rem;

  strong {
    color: ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
  }
`;

/**
 * Section 2 - Members
 */

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  > ul {
    order: 2;
  }
  > p {
    order: 1;
  }
  ${({ theme }) => theme.media.laptop`
    flex-direction: row;
    justify-content: space-around;
    > ul {
      order: 1;
    }
    > p {
      order: 2;
      width: 320px;
    }
  `};
`;

/**
 * Section 3 - Members
 */

const StyledSwiperWrapper = styled.div`
  isolation: isolate;
  position: relative;
  z-index: 1;
  .swiper-slide {
    width: auto;
  }
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
  position: relative;
  > div {
    position: absolute;
    top: calc(-50px - 16px);
    right: 16px;
    width: 50px;
    height: 50px;
    border: 1px solid ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
    cursor: pointer;
    font-size: 0.8rem;
    &:hover {
      color: #fff;
      background-color: ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
    }
  }
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
    z-index: ${zIndex.gbNav};
    width: 100%;
    height: 100vh;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }

  ul {
    opacity: 0;
    position: absolute;
    z-index: ${zIndex.gbNav};
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
      z-index: ${zIndex.gbNav - 1};
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
  z-index: ${zIndex.gbNav - 2};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
  transform: scale(0);
  right: -12px;
  top: -12px;
  transition: all 0.6s;

  ${({ isCircleActive }) =>
    isCircleActive &&
    css`
      transform: scale(50);
    `};
`;

/**
 * Accordion
 */

const StyledAccordionArea = styled.ul`
  list-style: none;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  li {
    margin: 16px 0;
  }

  section {
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
    background-color: ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
  }
`;

const StyledAccordionTitle = styled.h4<{ isClose?: boolean }>`
  position: relative;
  cursor: pointer;
  font-size: 1rem;
  font-weight: normal;
  padding: 3% 3% 3% 50px;
  transition: all 0.5s ease;
  color: ${({ theme }) => theme.colors?.white ?? "#ffffff"};
  font-weight: 700;

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 15px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors?.white ?? "#ffffff"};
  }

  &::before {
    top: 48%;
    left: 15px;
    transform: rotate(0deg);
    ${({ isClose }) =>
      isClose
        ? css`
            transform: rotate(45deg);
          `
        : css``}
  }

  &::after {
    top: 48%;
    left: 15px;
    transform: rotate(90deg);
    ${({ isClose }) =>
      isClose
        ? css`
            transform: rotate(-45deg);
          `
        : css``}
  }
`;
const StyledAccordionBox = styled.div`
  background: ${({ theme }) => theme.colors?.white ?? "#ffffff"};

  height: 160px;
  max-height: 160px;

  &.accordion-enter {
    height: 0px;
  }
  &.accordion-enter-active {
    height: 160px;
    transition: all 0.3s ease;
  }
  &.accordion-exit {
    height: 160px;
  }
  &.accordion-exit-active {
    height: 0px;
    transition: all 0.3s ease;
  }
  p {
    padding: 24px;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors?.primary ?? "#6500fc"};
  }
`;

const Accordion: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  return (
    <li>
      <section>
        <StyledAccordionTitle
          isClose={inProp}
          onClick={() => setInProp((prev) => !prev)}
        >
          {title}
        </StyledAccordionTitle>
        <CSSTransition
          nodeRef={nodeRef}
          in={inProp}
          timeout={300}
          classNames="accordion"
          unmountOnExit
        >
          <StyledAccordionBox ref={nodeRef}>
            <p>{parse(description)}</p>
          </StyledAccordionBox>
        </CSSTransition>
      </section>
    </li>
  );
};

interface IFormInputs {
  username: string;
  email: string;
  age: number;
  message: string;
  kakaoId?: string;
  lineId?: string;
}

const schema = yup
  .object({
    username: yup
      .string()
      .required("????????? ??????????????????.")
      .typeError("????????? ??????????????????."),
    email: yup
      .string()
      .email("????????? ???????????? ??????????????????.")
      .required("???????????? ??????????????????."),
    age: yup
      .number()
      .required("????????? ??????????????????.")
      .typeError("????????? ??????????????????."),
    message: yup
      .string()
      .required("???????????? ??????????????????.")
      .typeError("????????? ??????????????????."),
    kakaoId: yup.string().typeError("????????? ??????????????????."),
    lineId: yup.string().typeError("????????? ??????????????????."),
  })
  .required();

const generatePlaceholder = (name: string) => `${name}???/??? ??????????????????.`;

const ContactForm: React.FC<any> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => alert(JSON.stringify(data, null, 2));

  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">??????</label>
        <div>
          <input
            {...register("username")}
            id="username"
            placeholder={generatePlaceholder("??????")}
          />
          <p>{errors.username?.message}</p>
        </div>
      </div>
      <div>
        <label htmlFor="email">?????????</label>
        <div>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder={generatePlaceholder("?????????")}
          />
          <p>{errors.email?.message}</p>
        </div>
      </div>
      <div>
        <label htmlFor="age">??????</label>
        <div>
          <input
            {...register("age")}
            id="age"
            type="number"
            defaultValue={25}
            placeholder={generatePlaceholder("??????")}
          />
          <p>{errors.age?.message}</p>
        </div>
      </div>
      <div>
        <label htmlFor="message">?????????</label>
        <div>
          <textarea
            {...register("message")}
            id="message"
            placeholder={generatePlaceholder("?????????")}
          />
          <p>{errors.message?.message}</p>
        </div>
      </div>
      <div>
        <label htmlFor="lineId">??????</label>
        <div>
          <input
            {...register("lineId")}
            id="lineId"
            placeholder={generatePlaceholder("?????? ?????????")}
          />
          <p>{errors.lineId?.message}</p>
        </div>
      </div>
      <div>
        <label htmlFor="kakaoId">?????????</label>
        <div>
          <input
            {...register("kakaoId")}
            id="kakaoId"
            placeholder={generatePlaceholder("????????? ?????????")}
          />
          <p>{errors.kakaoId?.message}</p>
        </div>
      </div>
      <button type="submit">??????</button>
    </StyledContactForm>
  );
};

const StyledContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    height: 48px;
    padding: 8px;
  }

  textarea {
    width: 100%;
    height: calc(48px * 3);
    resize: none;
    font-family: sans-serif;
    padding: 8px;
  }

  /* error message */
  p {
    margin-top: 4px;
    color: red;
    font-size: 0.8rem;
  }

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    min-height: 0;
    min-width: 0;
    margin-bottom: 16px;
    > label {
      flex: 1;
      text-align: left;
      margin-top: 8px;
    }
    > div {
      flex: 4;
    }
  }

  button {
    margin-top: 16px;
    cursor: pointer;
    display: inline-block;
    padding: 16px;
    border-radius: 30px;
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    outline: none;
    transition: all 0.4s ease-out;
    background: inherit;

    &:hover {
      border-color: transparent;
      color: #fff;
      background: linear-gradient(
        270deg,
        ${({ theme }) => theme.colors.primary} 0%,
        #fff 60%,
        #fff 100%
      );
      background-size: 200% auto;
      background-position: right center;
      box-shadow: 0 5px 10px rgb(250, 108, 159, 0.4);
    }
  }
`;
