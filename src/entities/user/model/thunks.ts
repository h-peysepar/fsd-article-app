import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { loginUser } from "../api";
import {
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
  setUserToLocalStorage,
} from "../lib";

export const login = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }, thunkAPI) => {
    try {
      const user = await loginUser(payload.email, payload.password);
      setUserToLocalStorage(user);
      return { user };
    } catch (error: any) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Асинхронна дія для логауту
export const logout = createAsyncThunk("auth/logout", async () => {
  removeUserFromLocalStorage();
});

// Асинхронна дія для перевірки аутентифікації
export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, thunkAPI) => {
    try {
      const user = getUserFromLocalStorage();
      if (!user) throw new Error("Not authenticated");
      return { user };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
