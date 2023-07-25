import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { getLocation } from './location';

// const API2 = `https://api.openweathermap.org/data/2.5/weather?`
const API = `http://api.openweathermap.org/data/2.5/forecast?id=524901&`
const GET_WEATHER = 'WEATHER_API/weather/GET_WEATHER';
const initialState = {
  weather: [],
  error:'',
};
const api = 'http://api.openweathermap.org/geo/1.0/direct?';
const apiId = '129be1eff3bfdd367c8cd6e187c2071a';
const getLocation = async (place) => {
  const response = await fetch(`${api}q=${place}&limit=5&appid=${apiId}`)
  .then((response) => response.json())
  .catch((error) => {
    throw (error);
  });
return response;
}


export const getWeather = createAsyncThunk(GET_WEATHER, async (location) => {
  console.log(location,"response");
  const response = await getLocation(location)
    .then((response) => fetch(`${API}lat=${response[0].lat}&lon=${response[0].lon}&appid=bcc12c86ae7c1acd9f949f96c7f03458`))
    .then((response)=> response.json());
    console.log(response.list);
  return response;
});

const weatherSlice = createSlice({
  name: 'weather report',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, action) => ({
      ...state,
      weather: [...state.weather,
        action.payload],
    }))
      .addCase(getWeather.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
      }));
  },

});

export const { resetState } = weatherSlice.actions;
export default weatherSlice.reducer;