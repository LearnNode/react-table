import { createSlice } from "@reduxjs/toolkit";
import mockData from '../../../MOCK_DATA.json';

const initialState = {
  users: mockData,
  selectedUser: {}
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    }
  },
});

export const { selectUser } = userSlice.actions;

export default userSlice.reducer;