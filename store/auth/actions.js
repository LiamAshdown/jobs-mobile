import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/api";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await api.auth.register({ email, password });

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
