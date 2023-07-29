// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   favourites: null,
//   error: null,
//   loading: false,
// };


// const weatherSlice = createSlice({
//   name: "weather report",
//   initialState,
//   reducers: {
//     resetState: () => initialState,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getWeather.pending, (state) => ({
//         ...state,
//         loading: true,
//       }))
//       .addCase(getWeather.fulfilled, (state, action) => ({
//         ...state,
//         weather: action.payload,
//         loading: false,
//       }))
//       .addCase(getWeather.rejected, (state, action) => ({
//         ...state,
//         error: action.error.message,
//         loading: false,
//       }));
//   },
// });

// export const { resetState } = weatherSlice.actions;
// export default weatherSlice.reducer;
