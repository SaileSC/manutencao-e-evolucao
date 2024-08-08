import axios from "axios";
import { RequestAPI, RequestAPIResponse, ResponseAPI } from "../types/requests";
import api from "./api";

export const createRequest = async (
  request: RequestAPI
): Promise<ResponseAPI> => {
  try {
    const respose = await api.post("/request", request);
    return respose.data;
  } catch (error) {
    throw error;
  }
};

export const listRequests = async (): Promise<RequestAPIResponse[] | null> => {
  try {
    const respose = await api.get("/request/list");
    return respose.data;
  } catch (error) {
    throw error;
  }
};

export const detailRequest = async (
  id: string
): Promise<RequestAPIResponse | null> => {
  try {
    const respose = await api.get(`/request/${id}`);
    return respose.data;
  } catch (error) {
    throw error;
  }
};
