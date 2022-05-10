import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import NumberFormat from 'react-number-format';

interface IPhoneProps extends IPhone {}

export interface IPhone {
  HinhAnh: string;
  tenSp: string;
  BoNho: string;
  GiaCa: number;
  Pin: string;
  BoNhoTrong: string;
}

const PhoneContainer = styled.div`
  width: 16.5em;
  min-height: 22.2em;
  max-height: 28.2em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        flex-col
        items-center
        p-3
        pb-4
        bg-white
        rounded-md
        m-1
        sm:m-3
        md:m-6
    `};
`;

const PhoneThumbnail = styled.div`
  width: 100%;
  height: 16rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const PhoneName = styled.h3`
  ${tw`
        text-base
        font-bold
        text-black
        mt-1
        mb-1
    `};
`;

const PricesContainer = styled.div`
  ${tw`
        w-full
        flex
        justify-start
        mt-3
    `};
`;

const Price = styled.h5`
  ${tw`
        text-red-500
        font-bold
        text-sm
        mr-3
    `};
`;

const SmallIcon = styled.span`
  ${tw`
        text-gray-400
        text-sm
        mr-1
    `};
`;

const PhoneDetailContainer = styled.div`
  ${tw`
        flex
        w-full
        justify-between
    `};
`;

const PhoneDetail = styled.span`
  ${tw`
        flex
        items-center
    `};
`;

const PhoneInfo = styled.h6`
  ${tw`
        text-gray-400
        text-xs
    `};
`;

const Seperator = styled.div`
  ${tw`
        flex
        bg-gray-300
        mt-2
        mb-2
    `};
`;

const BuyButton = styled(Button)`
  ${tw`
        min-w-full
        mt-5
    `};
`;

export function Phone(props: IPhoneProps) {
  const {
    HinhAnh,
    tenSp,
    BoNho,
    GiaCa,
    Pin,
    BoNhoTrong,
  } = props;

  return (
    <PhoneContainer>
      <PhoneThumbnail>
        <img src={HinhAnh} />
      </PhoneThumbnail>
      <PhoneName>{tenSp}</PhoneName>
      <PricesContainer>
        <Price>
        <NumberFormat value={GiaCa} displayType={'text'} decimalScale={2} decimalSeparator={','}  thousandSeparator={'.'} suffix={' ₫'} />
        </Price>
      </PricesContainer>
      <Seperator />
      <PhoneDetailContainer>
        <PhoneDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <PhoneInfo>{BoNho}</PhoneInfo>
        </PhoneDetail>
        <PhoneDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <PhoneInfo>{BoNhoTrong}</PhoneInfo>
        </PhoneDetail>
        <PhoneDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <PhoneInfo>{Pin}</PhoneInfo>
        </PhoneDetail>
      </PhoneDetailContainer>
      <BuyButton text="Buy Now" />
    </PhoneContainer>
  );
}
