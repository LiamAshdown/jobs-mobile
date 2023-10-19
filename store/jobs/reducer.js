import { createSlice } from "@reduxjs/toolkit";

import { getJobs, createJob, getJob, updateJob, deleteJob } from "./actions";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    job: {},
    error: {},
    loading: false,
  },
  reducers: {
    clearError: (state, action) => {
      state.error = {};
    },
  },
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
      })
      .addCase(getJob.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getJob.fulfilled, (state, action) => {
        state.job = action.payload.job;
        state.loading = false;
      })
      .addCase(getJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateJob.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.job = action.payload.job;

        // Find the job that was updated and replace it with the new one
        const index = state.jobs.findIndex(
          (job) => job.id === action.payload.job.id,
        );

        state.jobs[index] = action.payload.job;

        state.loading = false;
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteJob.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        console.log(action.payload);
        state.jobs = state.jobs.filter((job) => job.id !== action.payload.id);
        state.loading = false;
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = jobsSlice.actions;
export default jobsSlice.reducer;
