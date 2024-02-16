import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  user_name: string;
  startTime: string;
  finishTime: string;
  mobile: string;
  company: string;
  department: string;
  status: string;
  dialogues: string;
};
export type TFormData = Omit<TUser, "id">;
type UsersState = {
  entities: TUser[];
  loading: boolean;
};

const initialState: UsersState = {
  entities: [
    {
      id: "45",
      firstName: "Jhon",
      lastName: "Smith",
      user_name: "Jhon_77",
      startTime: "2024-02-17T08:00",
      finishTime: "2024-02-17T18:30",
      mobile: "+8985899889",
      company: "Rosneft",
      department: "QA",
      status: "active",
      dialogues: "Lorem ipsum dolor sit amet c ",
    },
    {
      id: "23",
      firstName: "Omonjon",
      lastName: "Yakubov",
      user_name: "falcon75",
      startTime: "2024-02-17T08:00",
      finishTime: "2024-02-17T18:30",
      mobile: "+8985899889",
      company: "Tatneft",
      department: "FullStack",
      status: "no-active",
      dialogues: "some dialogs",
    },
  ],
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<TFormData>) {
      const buffer: TUser = {
        id: nanoid(),
        ...action.payload,
      };
      state.entities.push(buffer);
    },
    removeUser(state, action: PayloadAction<TUser["id"]>) {
      const index = state.entities.findIndex((e) => e.id === action.payload);
      state.entities.splice(index, 1);
    },
    updateUser(state, action: PayloadAction<TUser>) {
      state.entities = state.entities.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const { addUser, removeUser, updateUser } = usersSlice.actions;
