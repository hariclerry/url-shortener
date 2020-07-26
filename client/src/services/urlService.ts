import axios from "axios";
import { NotificationManager } from "react-notifications";
import config from "../config/config";

type ResponseBody = any;

interface ResponseData {
  responseBody?: ResponseBody;
}

const get = async (apiEndpoint: string): Promise<ResponseData | void> => {
  try {
    const response = await axios.get(config.baseUrl + apiEndpoint);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const post = async (
  apiEndpoint: string,
  payload: any
): Promise<ResponseData | void> => {
  try {
    const response = await axios.post(config.baseUrl + apiEndpoint, payload);
    return response.data;
  } catch (error) {
    console.log(error);
    NotificationManager.error(
      "Error message",
      "Please enter a valid URL",
      5000
    );
  }
};

export const urlService = {
  get,
  post,
};
