import axios from "axios";

export const apiHandle = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Authorization: "Bearer ",
  },
});

export const Get = (endPoint: string, id?: string | number) => {
  return apiHandle.get(`${endPoint}/${id ? id : ""}`);
};

export const Post = (endPoint: string, modal: {}) => {
  return apiHandle.post(`${endPoint}`, modal);
};

export const Put = (endPoint: string, id: string | number, modal: {}) => {
  return apiHandle.put(`${endPoint}/${id}`, modal);
};

export const Delete = (endPoint: string, id: string | number) => {
  return apiHandle.delete(`${endPoint}/${id}`);
};
