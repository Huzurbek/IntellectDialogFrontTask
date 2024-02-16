// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = createAsyncThunk(
//   "users/fetchUsers",
//   async (_, thunkApi) => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       ).then((data) => data.json());
//       return response;
//     } catch (error: any) {
//       const message = error.message;
//       return thunkApi.rejectWithValue(message);
//     }
//   }
// );
