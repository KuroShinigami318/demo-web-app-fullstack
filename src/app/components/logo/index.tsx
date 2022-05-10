import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import LogoImg from "../../../assets/images/logo-dt.png";

interface IlogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
        flex
        items-center
    `};
`;

const LogoText = styled.div<{ color?: any }>`
  ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1
    `};
  ${({ color }) => (color === "white" ? tw`text-white` : tw`text-black`)}
`;

const Image = styled.div`
  width: auto;
  ${tw`
        h-6
        md:h-9
    `};

  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo(props: IlogoProps) {
  const { color, bgColor } = props;
  return (
    <LogoContainer>
      <Image>
        <img src={LogoImg} />
      </Image>
      <LogoText color={color || "dark"}>YourPhone.</LogoText>
    </LogoContainer>
  );
}
