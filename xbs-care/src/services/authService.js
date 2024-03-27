import axios from "axios";
import qs from "qs";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const login = async (data) => {
  try {
    const response = await axios.post(
      BASE_URL + `/oauth2/token`,
      qs.stringify(data),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if (response.status === 200) {
      const {
        access_token,
        refresh_token,
        firstName,
        scope,
        id_token,
        pk,
        token_type,
        expires_in,
      } = response;
      localStorage.setItem("token", response.data.access_token);
      console.log(localStorage.getItem("token"), 'Local Storage Token');
      return response;
    } else {
      throw new Error(response.error);
    }
  } catch (error) {
    throw new Error("Failed to submit form data");
  }
};

