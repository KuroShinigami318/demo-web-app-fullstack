import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { Footer } from "../../components/Footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navBar";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import { TopPhones } from "./TopPhones";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
      <Marginer direction="vertical" margin="8em" />
      <TopPhones />
      <Footer />
    </PageContainer>
  );
}