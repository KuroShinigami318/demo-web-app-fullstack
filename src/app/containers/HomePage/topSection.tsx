import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import bestPhone from "../../../assets/images/653.png";
import { Button } from "../../components/button";
import { SCREENS } from "../../components/responsive";
//import blobImg from "../../../assets/images/174.png";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
     w-full
     max-w-screen-2xl
     flex
     justify-between
     pl-3
     pr-3
     lg:pl-12
     lg:pr-12   
`};
`;

const LeftContainer = styled.div`
  ${tw`
        w-1/2
        flex
        flex-col
    `}
`;

const RightContainer = styled.div`
  ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `}
`;

const Slogan = styled.h1`
  ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-extrabold
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `};
`;

const Description = styled.p`
  ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
    `};
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
`;

const StandalonePhone = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.mb}) {
    height: 10em;
    right: -1em;
    top: -4.5em;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 15em;
    right: -2.5em;
    top: -6em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -2em;
    top: -5em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 21em;
    right: -2em;
    top: -5em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
  flex
  flex-wrap
  mt-4
`};
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Buy the Best Quality Phone With Us</Slogan>
        <Description>
          Always choose the best quality phone from our local stores with the
          best prices for you
        </Description>
        <ButtonsContainer>
          <Button text="Top Sales" />
          <Button theme="filled" text="Newest" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        {/* <BlobContainer>
          <img src={blobImg} />
        </BlobContainer> */}
        <StandalonePhone>
          <img src={bestPhone} />
        </StandalonePhone>
      </RightContainer>
    </TopSectionContainer>
  );
}
