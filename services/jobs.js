import base from "./base";

export default {
  getJobs: async (token) => {
    const response = await base.get("/jobs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },
  getJob: async (id, token) => {
    const response = await base.get(`/jobs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },
  createJob: async (data, token) => {
    const response = await base.post("/jobs", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },
  updateJob: async (data, token) => {
    const response = await base.put(`/jobs/${data.id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },
  deleteJob: async (id, token) => {
    const response = await base.delete(`/jobs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },
};
