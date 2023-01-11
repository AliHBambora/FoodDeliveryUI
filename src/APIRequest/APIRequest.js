import axios from "axios";
import app_constants from "../constants/app_constants";

export class APIRequest {
  static async get(endpoint) {
    const res = await axios({
      url: "http://localhost:4000/getProducts" + endpoint,
      method: app_constants.GET,
    });
    if (res.data.response === app_constants.SUCCESS) {
      console.log(res.data);
      return { status: app_constants.SUCCESS, data: res.data };
    } else {
      return { status: app_constants.FAILED, Message: res.data.Message };
    }
  }

  static async post(endpoint, body) {
    const res = await axios({
      url: app_constants.API_URL + endpoint,
      method: app_constants.POST,
      data: body,
    });
    if (res.data.response === app_constants.SUCCESS) {
      console.log(res.data);
      return { status: app_constants.SUCCESS, data: res.data };
    } else {
      return { status: app_constants.FAILED, Message: res.data.Message };
    }
  }
}
