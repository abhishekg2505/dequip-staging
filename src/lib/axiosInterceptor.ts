import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const get = async <T = any>(url: string, params?: any): Promise<T> => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    };

    const response = await axiosInstance.get(url, {
      params,
      headers: headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (url: string, data: any, params?: any) => {
  try {
    // const token = await getToken();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    };
    const response = await axiosInstance.post(url, data, { params, headers });
    return response;
  } catch (error) {
    return error;
  }
};

export default axiosInstance;
