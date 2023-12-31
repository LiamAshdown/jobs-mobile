import base from "./base";

export default {
  register: async ({ email, password }) => {
    const response = await base.post("/auth/register", {
      email,
      password,
    });

    return response;
  },
  login: async ({ email, password }) => {
    const response = await base.post("/auth/login", {
      email,
      password,
    });

    return response;
  },
};
