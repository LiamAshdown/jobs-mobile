import base from "./base";

export default {
  getJobs: async (token) => {
    const response = await base.get("/jobs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);

    return response;
  },
  createJob: async ({ title, company, salary, description }, token) => {
    const response = await base.post(
      "/jobs",
      {
        title,
        company,
        salary,
        description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response;
  },
};
