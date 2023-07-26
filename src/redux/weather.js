import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const weatherAPI = `http://api.openweathermap.org/data/2.5/forecast?id=524901&`;
const geoAPI = "http://api.openweathermap.org/geo/1.0/direct?";
const apiId = "129be1eff3bfdd367c8cd6e187c2071a";
const GET_WEATHER = "WEATHER_API/weather/GET_WEATHER";
const initialState = {
  weather: [],
  error: null,
  loading: null,
};

export const getWeather = createAsyncThunk(GET_WEATHER, async (location) => {
  const response = await fetch(`${geoAPI}q=${location}&limit=5&appid=${apiId}`)
    .then((response) => response.json())
    .then((response) =>
      fetch(
        `${weatherAPI}lat=${response[0].lat}&lon=${response[0].lon}&appid=${apiId}`
      )
    )
    .then((response) => response.json());
  return response;
});

const weatherSlice = createSlice({
  name: "weather report",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => ({
        ...state,
        loading: "Loading ...",
      }))
      .addCase(getWeather.fulfilled, (state, action) => ({
        ...state,
        weather: [action.payload],
        loading: null,
      }))
      .addCase(getWeather.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
        loading: null,
      }));
  },
});

export const { resetState } = weatherSlice.actions;
export default weatherSlice.reducer;
