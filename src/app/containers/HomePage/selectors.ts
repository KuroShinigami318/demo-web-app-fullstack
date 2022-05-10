import { createSelector } from "reselect";
import { IRootAppState } from "../../../typings";

const selectHomePage = (state: IRootAppState) => state.homePage;

export const makeSelectTopPhones = createSelector(selectHomePage, (homePage) => homePage.topPhones)