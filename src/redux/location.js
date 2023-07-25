import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const api = 'http://api.openweathermap.org/geo/1.0/direct?';
const apiId = 'abafcaf6654d7d047002bef3579e4df7';
const GET_LOCATION = 'POLLUTIONCHECK/getLocation/GET_LOCATION';
const initialState = null;
export const getLocation = createAsyncThunk(GET_LOCATION, async (place) => {
  console.log(place,"place");  
  const response = await fetch(`${api}q=${place}&limit=5&appid=${apiId}`)
      .then((response) => response.json())
      .catch((error) => {
        throw (error);
      });
    return response;
});

const LocationSlice = createSlice({
  name: 'LOCATION',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLocation.fulfilled, (state, action) => (action.payload))
      .addCase(getLocation.rejected, (state, action) => action.error);
  },

});

export default LocationSlice.reducer;