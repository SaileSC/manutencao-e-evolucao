import axios from "axios";
import { RequestAPI, RequestAPIResponse } from "../types/requests";
import api from "./api";

export const createRequest = async (request: RequestAPI) => {
  try {
    const respose = await api.post("/request", request);
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
