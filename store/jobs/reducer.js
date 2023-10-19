import { createSlice } from "@reduxjs/toolkit";

import { getJobs, createJob } from "./actions";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    error: {},
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.jobs = action.payload.jobs;
        state.loading = false;
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createJob.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload.job);
        state.loading = false;
      })
      .addCase(createJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default jobsSlice.reducer;
