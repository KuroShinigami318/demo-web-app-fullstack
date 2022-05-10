import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  //min-height: 24em;
  background-color: rgb(31 42 76);
  ${tw`
        flex
        flex-col
        min-w-full
        pt-10
        md:pt-16
        items-center
        justify-center
    `};
`;

const InnerContainer = styled.div`
  ${tw`
        flex
        max-w-screen-2xl
        w-full
        h-full
        flex-wrap
    `};
`;

const BottomContainer = styled.div`
  ${tw`
  w-full
  justify-center
  md:justify-start
  flex
  mt-7
  md:mt-1
  max-w-screen-2xl
  `};
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`text-gray-300`};
`;

const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col
        md:mr-16
        mr-2
        pl-10
        pr-10
        md:pl-3
        md:pr-3
    `};
`;

const AboutText = styled.p`
  ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        mt-2
    `};
`;

const SectionContainer = styled.div`
  ${tw`
        flex
        flex-col
        mr-2
        md:mr-16
        w-full
        md:w-auto
        pl-10
        pr-10
        md:pl-3
        md:pr-3
        mt-7
        md:mt-0
    `};
`;

const LinksList = styled.ul`
  ${tw`
        outline-none
        list-none
        flex
        flex-col
    `};
`;

const ListItem = styled.li`
  ${tw`
        mb-3
    `};

  & > a {
    ${tw`
        text-sm
        text-white
        transition-all
        `};
  }

  & > a:hover {
    ${tw`text-gray-400`};
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
        text-xl
        font-bold
        text-white
        mb-3
    `};
`;

const HorizontalContainer = styled.div`
  ${tw`
  flex
  items-center
  `};
`;

const RedIcon = styled.span`
  ${tw`
        w-9
        h-9
        bg-red-500
        rounded-full
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
    `};
`;

const SmallText = styled.h6`
  ${tw`
        text-sm
        text-white
    `};
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" />
          <AboutText>
            Yourphone is an indie Company that is selling many trusted phones around
            the world.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="">Home</a>
            </ListItem>
            <ListItem>
              <a href="">About Us</a>
            </ListItem>
            <ListItem>
              <a href="">Contact</a>
            </ListItem>
            <ListItem>
              <a href="">Report</a>
            </ListItem>
            <ListItem>
              <a href="">Fu*k yeah</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="">Support</a>
            </ListItem>
            <ListItem>
              <a href="">Whatever</a>
            </ListItem>
            <ListItem>
              <a href="">I don't know</a>
            </ListItem>
            <ListItem>
              <a href="">Privacy</a>
            </ListItem>
            <ListItem>
              <a href="">Term &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+84 837-455-01</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail Us Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>duongngocbao318@gmail.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Yourphone. All Right
          Reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}
