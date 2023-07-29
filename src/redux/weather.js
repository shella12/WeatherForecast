import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const weatherAPI = `http://api.openweathermap.org/data/2.5/forecast?id=524901&`;
const geoAPI = "http://api.openweathermap.org/geo/1.0/direct?";
const apiId = process.env.REACT_APP_WEATHER_API_API_KEY;
const GET_WEATHER = "WEATHER_API/weather/GET_WEATHER";
const initialState = {
  weather: null,
  favourites: localStorage.getItem('favouriteCities') ? JSON.parse(localStorage.getItem('favouriteCities')) : [],
  error: null,
  loading: false,
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
    console.log(response);
  return response;
});

const weatherSlice = createSlice({
  name: "weather report",
  initialState,
  reducers: {
    addFavouriteCities: (state, action) => {
      return {
        favourites: [
          ...state.favourites,
             action.payload,
        ],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getWeather.fulfilled, (state, action) => ({
        ...state,
        weather: action.payload,
        loading: false,
      }))
      .addCase(getWeather.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
        loading: false,
      }));
  },
});

export const { addFavouriteCities } = weatherSlice.actions;
export default weatherSlice.reducer;
