/* eslint-disable @next/next/no-img-element */
import { User } from "@/types/interfaces";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import styled, { css } from "styled-components";

interface UserCardProps extends User {
  bgNum: number;
}

const UserCard: React.FC<UserCardProps> = (props) => {
  const [activeTab, setActiveTab] = useState<"about" | "contact">("about");
  console.log(props.bgNum);
  return (
    <StyledCard className="card">
      <div className="card-header">
        <div
          className="card-cover"
          style={{
            backgroundImage: `url(${`/members/backgrounds/bg${props.bgNum}.jpg`})`,
          }}
        />
        <Image
          width={100}
          height={100}
          className="card-avatar"
          src={props.profileImg}
          alt="avatar"
        />
        <p className="card-fullname">{props.username}</p>
        <p className="card-jobtitle">{props.jobTitle}</p>
        <span className="card-jobplace">{props.jobPlace}</span>
      </div>
      <div className="card-main">
        <StyledUserCardSection
          className="card-section"
          id="about"
          isActive={activeTab === "about"}
        >
          <div className="card-content">
            <div className="card-subtitle">ABOUT</div>
            <p className="card-desc">{props.about}</p>
          </div>
          <div className="card-social">
            {/* facebook */}
            {props.sns?.facebook ? (
              <a
                href={`https://www.facebook.com/${props.sns.facebook}/`}
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
                </svg>
              </a>
            ) : null}
            {/* twitter */}
            {props.sns?.twitter ? (
              <a
                href={`https://twitter.com/${props.sns.twitter}/`}
                target="_blank"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                </svg>
              </a>
            ) : null}
            {/* instagram */}
            {props.sns?.instagram ? (
              <a
                href={`https://www.instagram.com/${props.sns.instagram}/`}
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                  <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                  <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                </svg>
              </a>
            ) : null}
            {/* linkedIn */}
            {props.sns?.linkedIn ? (
              <a
                href={`https://www.linkedin.com/in/${props.sns.linkedIn}/`}
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                </svg>
              </a>
            ) : null}
          </div>
        </StyledUserCardSection>
        <StyledUserCardSection
          className="card-section"
          id="contact"
          isActive={activeTab === "contact"}
        >
          <div className="card-content">
            <div className="card-subtitle">CONTACT</div>
            <div className="card-contact-wrapper">
              {props.address ? (
                <div className="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {props.address}
                </div>
              ) : null}
              {props.phone ? (
                <div className="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  {props.phone}
                </div>
              ) : null}
              {props.email ? (
                <div className="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  {props.email}
                </div>
              ) : null}
              {props.customLink ? (
                <a
                  className="contact-me"
                  href={props.customLink.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.customLink.text}
                </a>
              ) : null}
            </div>
          </div>
        </StyledUserCardSection>
        <UserCardButtons>
          <UserCardButton
            data-section="#about"
            isActive={activeTab === "about"}
            onClick={() => setActiveTab("about")}
          >
            ABOUT
          </UserCardButton>
          <UserCardButton
            data-section="#contact"
            isActive={activeTab === "contact"}
            onClick={() => setActiveTab("contact")}
          >
            CONTACT
          </UserCardButton>
        </UserCardButtons>
      </div>
    </StyledCard>
  );
};

export default UserCard;

const StyledCard = styled.div`
  width: 260px;
  height: 520px;

  ${({ theme }) => theme.media.laptop`
    width: 340px;
    height: 520px;
  `};

  margin: auto;
  overflow-y: auto;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
  border: 1px solid #eaeaea;

  .card-header {
    position: relative;
    display: flex;
    height: 200px;
    flex-shrink: 0;
    width: 100%;
    transition: 0.3s;

    * {
      transition: 0.3s;
    }
  }

  .card-cover {
    width: 100%;
    height: 100%;
    position: absolute;
    height: 160px;
    top: -15%;
    left: 0;
    will-change: top;
    background-size: cover;
    background-position: center;
    filter: blur(3px);
    transform: scale(1.2);
    transition: 0.5s;
  }

  .card-avatar {
    width: 100px;
    height: 100px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    object-position: center;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-64px);
  }

  .card-fullname {
    position: absolute;
    bottom: 12px;
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    transform: translateY(-10px) translateX(-50%);
    left: 50%;
  }

  .card-jobtitle {
    position: absolute;
    bottom: 0;
    font-size: 0.6rem;
    white-space: nowrap;
    font-weight: 500;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-7px);
  }

  .card-jobplace {
    position: absolute;
    bottom: -12px;
    font-size: 0.4rem;
    white-space: nowrap;
    font-weight: 500;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-7px);
    color: #6f6f7b;
  }

  .card-main {
    position: relative;
    flex: 1;
    display: flex;
    padding-top: 10px;
    flex-direction: column;
  }

  .card-subtitle {
    font-weight: 700;
    font-size: 13px;
    margin-bottom: 8px;
  }

  .card-content {
    padding: 20px;
  }

  .card-desc {
    line-height: 1.6;
    color: #636b6f;
    font-size: 14px;
    margin: 0;
    font-weight: 400;
    font-family: "DM Sans", sans-serif;
    height: 80px;
    min-height: 70px;
    max-height: 80px;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }

  .card-social {
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 30px;
    svg {
      fill: rgb(165, 181, 206);
      width: 16px;
      display: block;
      transition: 0.3s;
    }
    a {
      color: #8797a1;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      background-color: rgba(93, 133, 193, 0.05);
      border-radius: 50%;
      margin-right: 10px;

      &:hover {
        svg {
          fill: darken(rgb(165, 181, 206), 20%);
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
    }
  }

  .card-contact-wrapper {
    margin-top: 20px;
  }

  .card-contact {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #6f6f7b;
    font-family: "DM Sans", sans-serif;
    line-height: 1.6;
    cursor: pointer;

    & + & {
      margin-top: 16px;
    }

    svg {
      flex-shrink: 0;
      width: 30px;
      min-height: 34px;
      margin-right: 12px;
      transition: 0.3s;
      padding-right: 12px;
      border-right: 1px solid #dfe2ec;
    }
  }

  .contact-me {
    display: block;
    text-align: center;
    border: 0;
    outline: none;
    background: linear-gradient(
      to right,
      rgba(195, 87, 225, 0.8) 0%,
      ${({ theme }) => theme.colors.primary} 96%
    );
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    color: #fff;
    padding: 12px 16px;
    width: 100%;
    border-radius: 5px;
    margin-top: 25px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    font-family: "Jost", sans-serif;
    transition: 0.3s;
  }
`;

const StyledUserCardSection = styled.div<{ isActive?: boolean }>`
  display: none;
  ${({ isActive }) =>
    isActive &&
    css`
      display: block;
      animation: fadeIn 0.6s both;
    `};
`;

const UserCardButtons = styled.div`
  display: flex;
  background-color: #fff;
  margin-top: auto;
  position: sticky;
  bottom: 0;
  left: 0;
`;

const UserCardButton = styled.button<{ isActive?: boolean }>`
  flex: 1 1 auto;
  user-select: none;
  background: 0;
  font-size: 13px;
  border: 0;
  padding: 15px 5px;
  cursor: pointer;
  color: #5c5c6d;
  transition: 0.3s;
  font-family: "Jost", sans-serif;
  font-weight: 500;
  outline: 0;
  border-bottom: 3px solid transparent;

  &:hover {
    color: #2b2c48;
    border-bottom: 3px solid #8a84ff;
    background: linear-gradient(
      to bottom,
      rgba(127, 199, 231, 0) 0%,
      rgba(207, 204, 255, 0.2) 44%,
      rgba(211, 226, 255, 0.4) 100%
    );
  }
  ${({ isActive }) =>
    isActive &&
    css`
      color: #2b2c48;
      border-bottom: 3px solid #8a84ff;
      background: linear-gradient(
        to bottom,
        rgba(127, 199, 231, 0) 0%,
        rgba(207, 204, 255, 0.2) 44%,
        rgba(211, 226, 255, 0.4) 100%
      );
    `};
`;
