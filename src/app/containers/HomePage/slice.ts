import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "./type";

const initialState: IHomePageState = {
    topPhones: [],
}

const homePageSlice = createSlice({
    name: "homepage",
    initialState,
    reducers: {
        setTopPhones: (state, action) => {
            state.topPhones = action.payload;
        }
    }
});

export const { setTopPhones } = homePageSlice.actions;
export default homePageSlice.reducer;