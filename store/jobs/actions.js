import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/api";

export const getJobs = createAsyncThunk(
  "jobs/list",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      console.log("token", token);
      const response = await api.jobs.getJobs(token);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const createJob = createAsyncThunk(
  "jobs/create",
  async (
    { title, company, salary, description },
    { rejectWithValue, getState },
  ) => {
    try {
      const token = getState().auth.token;
      const response = await api.jobs.createJob(
        { title, company, salary, description },
        token,
      );

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
