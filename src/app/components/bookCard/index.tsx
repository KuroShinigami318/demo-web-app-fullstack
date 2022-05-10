import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Marginer } from "../marginer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-6
        md:pr-6
    `};
`;

const ItemContainer = styled.div`
  ${tw`flex relative`};
`;

const Icon = styled.span`
  ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `};
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    select-none
`};
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `};
`;

const DateCalendar = styled(Calendar)<{ offset?: any }>`
  position: absolute;
  max-width: none;
  top: 2em;
  left: 0em;
  user-select: none;

  ${({ offset }) =>
    offset &&
    css`
      left: -7.2em;
    `};

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-700
    fill-current
    text-xs
    md:text-base
    ml-1
  `};
`;

export function BookCard() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isCalendarOpen1, setCalendarOpen1] = useState(false);
  const [isCalendarOpen2, setCalendarOpen2] = useState(false);
  const toggleStartDateCalendar = () => {
    setCalendarOpen1(!isCalendarOpen1);
  };
  const toggleReturnDateCalendar = () => {
    setCalendarOpen2(!isCalendarOpen2);
  };

  const clickHandler = function (event: MouseEvent) {
    const calButtons = document.getElementsByClassName("calButton");
    const calendars = document.getElementsByClassName("calendar");
    for (let i = 0; i < calButtons.length; i++) {
      if (calendars[0] === undefined) {
        document.removeEventListener("click", clickHandler);
        return;
      }
      if (
        !calButtons[i].contains(event.target as Node) &&
        !calendars[0].contains(event.target as Node)
      ) {
        switch (i) {
          case 0:
            setCalendarOpen1(false);
            break;
          case 1:
            setCalendarOpen2(false);
            break;
          default:
            break;
        }
      }
    }
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name
          className="calButton"
          onClick={() => {
            if (!isCalendarOpen1)
              document.addEventListener("click", clickHandler);
            toggleStartDateCalendar();
          }}
        >
          Pick Up Date
        </Name>
        {isCalendarOpen1 && (
          <DateCalendar
            className="calendar"
            value={startDate}
            onChange={setStartDate as any}
          />
        )}
        <SmallIcon>
          <FontAwesomeIcon icon={isCalendarOpen1 ? faCaretUp : faCaretDown} />
        </SmallIcon>
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name
          className="calButton"
          onClick={() => {
            if (!isCalendarOpen2)
              document.addEventListener("click", clickHandler);
            toggleReturnDateCalendar();
          }}
        >
          Return Date
        </Name>
        {isCalendarOpen2 && (
          <DateCalendar
            offset
            className="calendar"
            value={returnDate}
            onChange={setReturnDate as any}
          />
        )}
        <SmallIcon>
          <FontAwesomeIcon icon={isCalendarOpen2 ? faCaretUp : faCaretDown} />
        </SmallIcon>
      </ItemContainer>
      <Marginer margin="2em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
}
