import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IPhone, Phone } from "../../components/Phone";
import { Title } from "./bookingSteps";
import phoneImg from "../../../assets/images/402.png";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import phoneService from "../../services/phoneService";
import { GetPhones_phones } from "../../services/phoneService/__generated__/GetPhones";
import { setTopPhones } from "./slice";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectTopPhones } from "./selectors";
import { createSelector } from "reselect";
import { MoonLoader } from "react-spinners";
import { setTimeout } from "timers";

const TopPhonesContainer = styled.div`
  ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `};
`;

const PhonesContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `};
`;

const EmptyPhones = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;
const LoadingContainer = styled.div`
  ${tw`
    w-full
    flex
    mt-9
    justify-center
    items-center
    text-base
    text-black
  `};
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopPhones: (phones: GetPhones_phones[]) => dispatch(setTopPhones(phones)),
});

const stateSelector = createSelector(makeSelectTopPhones, (topPhones) => ({
  topPhones,
}));

export function TopPhones() {
  const [current, setCurrent] = useState(1);

  const [isLoading, setLoading] = useState(false);

  const wait = (timeout: number) =>
    new Promise((rs) => setTimeout(rs, timeout));

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const isTablet = useMediaQuery({ maxWidth: "900px" });

  const { topPhones } = useSelector(stateSelector);

  const { setTopPhones } = actionDispatch(useDispatch());

  const fetchTopPhones = async () => {
    setLoading(true);
    let phones = await phoneService.getPhones().catch((err) => {
      console.log("Error: ", err);
      setLoading(false);
    });

    await wait(2000);

    if (phones) {
      setLoading(false);
      setTopPhones(phones);
    }
  };

  useEffect(() => {
    fetchTopPhones();
  }, []);

  const isEmptyTopPhones = !topPhones || topPhones.length === 0;

  const Phones =
    (!isEmptyTopPhones &&
      topPhones.map((phone) => (
        <Phone
          BoNho={phone.phoneDetail.BoNho}
          Pin={phone.phoneDetail.Pin}
          BoNhoTrong={phone.phoneDetail.BoNhoTrong}
          {...phone}
          HinhAnh={phone.phoneDetail.HinhAnh}
        />
      ))) ||
    [];

  let nums = () => {
    if (isMobile) return Phones.length;
    else if (isTablet) return Math.ceil(Phones.length / 2) + 2;
    else return Math.ceil(Phones.length / 3) + 2;
  };

  return (
    <TopPhonesContainer>
      <Title>Explore Our Top Deals</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={20} />
        </LoadingContainer>
      )}
      {!isLoading && isEmptyTopPhones && <EmptyPhones>No Phones To Show</EmptyPhones>}
      {!isEmptyTopPhones && !isLoading && (
        <PhonesContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={Phones}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: { numberOfSlides: 3 },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots value={current} onChange={setCurrent} number={nums()} />
        </PhonesContainer>
      )}
    </TopPhonesContainer>
  );
}
