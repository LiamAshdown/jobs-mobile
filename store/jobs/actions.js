import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../services/api";

export const getJobs = createAsyncThunk(
  "jobs/list",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      const response = await api.jobs.getJobs(token);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getJob = createAsyncThunk(
  "jobs/get",
  async (id, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      const response = await api.jobs.getJob(id, token);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const createJob = createAsyncThunk(
  "jobs/create",
  async (data, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      const response = await api.jobs.createJob(data, token);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateJob = createAsyncThunk(
  "jobs/update",
  async (data, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      const response = await api.jobs.updateJob(data, token);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteJob = createAsyncThunk(
  "jobs/delete",
  async (id, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      const response = await api.jobs.deleteJob(id, token);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
