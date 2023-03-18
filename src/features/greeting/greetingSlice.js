import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchRandomGreeting from './messageAPI';

const initialState = {
  value: 'hello',
  status: 'idle',
};

export const messageAsync = createAsyncThunk(
  'fetchRandomGreeting',
  async () => {
    const response = await fetchRandomGreeting();
    return response.message;
  },
);

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(messageAsync.pending, (state) => ({
        value: state.value,
        status: 'loading',
      }))
      .addCase(messageAsync.fulfilled, (state, action) => ({
        value: action.payload,
        status: 'idle',
      }));
  },
});

export default greetingSlice.reducer;
