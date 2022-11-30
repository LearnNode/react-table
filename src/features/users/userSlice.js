import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import mockData from '../../../MOCK_DATA.json';

const initialState = {
  users: [],
  selectedUser: null
}

export const fetchUsers = createAsyncThunk('users/fetchUsers',
  async () => {
    try {
      const res = await axios.get('http://localhost:4000/users');
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }
);

export const updatedUsers = createAsyncThunk('users/updateUser', 
  async ({ id, values }, {dispatch}) => {
    try {
      const res = await axios.put(`http://localhost:4000/users/${id}`, values);
      console.log(res);
      dispatch(fetchUsers());
      return { id, values };
    } catch (error) {
      console.log(error)
    }
  }
)

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
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      console.log(action.payload)
      state.users = action.payload
    })
    builder.addCase(updatedUsers.fulfilled, (state, action) => {
      state.users.map((user) => user.id === action.payload.id ? action.payload : user);
    })
  }
});

export const { selectUser, updateUsers } = userSlice.actions;

export default userSlice.reducer;