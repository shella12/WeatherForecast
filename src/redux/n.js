const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?id=524901&`;
const geoAPI = "https://maps.googleapis.com/maps/api/geocode/json?";
const apiId = process.env.REACT_APP_WEATHER_API_API_KEY;
const GET_WEATHER = "WEATHER_API/weather/GET_WEATHER";
const initialState = {
  weather: null,
  favourites: localStorage.getItem('favouriteCities') ? JSON.parse(localStorage.getItem('favouriteCities')) : [],
  error: null,
  loading: false,
};

export const getWeather = createAsyncThunk(GET_WEATHER, async (location) => {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyAJXEfnHg0GO52LRMGf0Oz3lfQeOrDUR34`)
    .then((response) => response.json())
    .then((response) =>
      fetch(
        `${weatherAPI}lat=${response.results[0].geometry.location.lat}&lon=${response.results[0].geometry.location.lng}&appid=${apiId}`
      )
    )
    .then((response) => response.json());
    console.log(response,"response here")
  return response;
});

const weatherSlice = createSlice({
  name: "weather report",
  initialState,
  reducers: {
    addFavouriteCities: (state, action) => {
      const newState = {
        ...state,
        favourites: [
          ...state.favourites,
             action.payload,
        ],
      }
      localStorage.setItem('favouriteCities', JSON.stringify(newState.favourites));
      return newState;
    },
    removeFavouriteCities: (state, action) => {
      const newFav = state.favourites.filter((city) => city !== action.payload);
      const newState = {
        ...state,
        favourites: newFav,
      }
      localStorage.setItem('favouriteCities', JSON.stringify(newState.favourites));
      return newState
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

export const { addFavouriteCities, removeFavouriteCities } = weatherSlice.actions;
export default weatherSlice.reducer;
