import { createSlice } from "@reduxjs/toolkit";
import mockData from '../../../MOCK_DATA.json';

const initialState = {
  users: mockData,
  selectedUser: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    updateUsers: (state, action) => {
      state.users.map((user) => user.id === action.payload.id ? action.payload : user);
    }
  },
});

export const { selectUser, updateUsers } = userSlice.actions;

export default userSlice.reducer;