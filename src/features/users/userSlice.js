import { createSlice } from "@reduxjs/toolkit";
import mockData from '../../../MOCK_DATA.json';

const initialState = {
  users: mockData,
  selectedUser: {}
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;