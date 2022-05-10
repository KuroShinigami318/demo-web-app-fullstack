import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import Image from "../../../assets/images/188.png";

const AboutUSContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        items-center
        2xl:justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-white
    `};
`;

const PhoneContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -30px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
        w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `};
`;

const Title = styled.h1`
  ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `};
`;

const InfoText = styled.p`
  ${tw`
        max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        mt-4
    `};
`;

export function AboutUs() {
  return (
    <AboutUSContainer>
      <PhoneContainer>
        <img src={Image} />
      </PhoneContainer>
      <InfoContainer>
        <Title>Fell the best experience with our deal.</Title>
        <InfoText>
          dasddsad s asd dehjhbfehj bba jek fbkjawebfl huBWIOBF HWe bflhbEHJWBFJ
          h bkjehb jhBEJHFB lhbe bkjdbf kJBWEJL BFjjbefi ujbnaef jnsjnok g
          jsklngoi ah r isddasdlan kjs kj dakjsbd jwkjlb dksa dk;bqwkb dksjd
          kjand kjnabsdjkbqwkjbdkjabd;j qwjkb dqbkj dqbw;kj bqw;jb
          kj;fbkj;bgj;kbs;jkrngkjdfsngkj ndflkh nsknh;dklsn.
        </InfoText>
      </InfoContainer>
    </AboutUSContainer>
  );
}
