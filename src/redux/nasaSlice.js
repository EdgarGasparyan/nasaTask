import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const key = "tu9Bnra4ZuMTz2JYRgZ9OY34vwytqPedfOhk18B1";

export const fetchNasaSigleData = createAsyncThunk(
  "nasa/fetchBySigleStatus",
  async (day) => {
    const respons = await axios(
      `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${day}`
    );
    
    return respons.data;
  }
);

export const fetchNasaDubleData = createAsyncThunk(
  "nasa/fetchByDubleStatus",
  async ({ start, end }) => {
   // console.log(start, end);

    const respons = await axios(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${key}`
    );

    const valuesObjectData = Object.values(respons.data.near_earth_objects).map(
      function (objectValues, index) {
        return objectValues;
      }
    );

    const data = valuesObjectData.map((items) => items);

    return data;
  }
);

const initialState = {
  currentData: {},
  dayRangeData: null,
  loading: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNasaSigleData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNasaSigleData.fulfilled, (state, action) => {
        state.loading = false;
        state.currentData = action.payload;
      })
      .addCase(fetchNasaDubleData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNasaDubleData.fulfilled, (state, action) => {
        state.loading = false;
        state.dayRangeData = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
