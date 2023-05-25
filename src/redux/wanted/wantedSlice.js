import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constants';

const initialState = {
  wantedList: [],
  status: 'idle',
  current: null,
  subjects: [],
  error: null,
};

export const fetchWanted = createAsyncThunk('GET_WANTED', async () => Promise.all(
  Array.from({ length: 48 }, (_, k) => k + 1).map(async (page) => {
    const response = await axios.get(`${BASE_URL}`, { params: { page } });
    return response.data;
  }),
));

export const wantedSlice = createSlice({
  name: 'wanted',
  initialState,
  reducers: {
    getSingleWanted: (state, action) => {
      const single = state.wantedList.find(
        ({ wanted_id }) => wanted_id.toString() === action.payload.toString(),
      );
      state.current = single;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWanted.pending, (state, _) => {
        state.status = 'loading';
      })
      .addCase(fetchWanted.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const wanted = action.payload
          .map(({ items }) => items.map((wanted) => ({
            aliases: wanted.aliases,
            age_max: wanted.age_max,
            age_min: wanted.age_min,
            age_range: wanted.age_range,
            complexion: wanted.complexion,
            caution: wanted.caution,
            coordinates: wanted.coordinates,
            dates_of_birth_used: wanted.dates_of_birth_used,
            details: wanted.details,
            eyes: wanted.eyes,
            hair: wanted.hair,
            images: wanted.images,
            height_max: wanted.height_max,
            height_min: wanted.height_min,
            nationality: wanted.nationality,
            occupations: wanted.occupations,
            place_of_birth: wanted.place_of_birth,
            reward_max: wanted.reward_max,
            reward_min: wanted.reward_min,
            reward_text: wanted.reward_text,
            sex: wanted.sex,
            subjects: wanted.subjects,
            title: wanted.title,
            warning_message: wanted.warning_message,
            weight: wanted.weight,
            wanted_id: wanted.uid,
            description: wanted.description,
          })))
          .flat()
          .filter(({ reward_max }) => reward_max > 0);
        // .sort((a, b) => b.reward_max - a.reward_max);

        state.wantedList = state.wantedList.concat(wanted);
      })
      .addCase(fetchWanted.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllWanted = (state) => state.wanted.wantedList;
export const selectAllSubjects = (state) => state.wanted.subjects;
export const selectCurrentWanted = (state) => state.wanted.current;
export const getWantedStatus = (state) => state.wanted.status;
export const getWantedError = (state) => state.wanted.error;

export const { getSingleWanted } = wantedSlice.actions;

export default wantedSlice.reducer;
