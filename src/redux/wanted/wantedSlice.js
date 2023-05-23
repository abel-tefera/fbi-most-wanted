import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constants';

const initialState = {
  wantedList: [],
  status: 'idle',
  current: null,
  error: null,
};

export const fetchWanted = createAsyncThunk('GET_WANTED', async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
});

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
        const wanted = action.payload.items.map((wanted, i) => ({
          ...wanted,
          wanted_id: i,
          wantedFor: wanted.description.split(';'),
        }));
        state.wantedList = state.wantedList.concat(wanted);
      })
      .addCase(fetchWanted.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllWanted = (state) => state.wanted.wantedList;
export const selectCurrentWanted = (state) => state.wanted.current;
export const getWantedStatus = (state) => state.wanted.status;
export const getWantedError = (state) => state.wanted.error;

export const { getSingleWanted } = wantedSlice.actions;

export default wantedSlice.reducer;
