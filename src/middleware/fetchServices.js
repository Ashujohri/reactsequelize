import axios from "axios";
const ServerURL = "http://localhost:6005";

const getDataAxios = async (Url) => {
  try {
    let url = `${ServerURL}/${Url}`;
    let config = {
      headers: {
        "Content-type": "application/json",
        // Authorization: `Bearer`,
      },
    };
    var response = await axios.get(url, config);
    var result = response.data;
    return result;
  } catch (error) {
    return error;
  }
};

const postDataAxiosWithoutToken = async (Url, body) => {
  try {
    let url = `${ServerURL}/${Url}`;
    let config = { "Content-type": "application/json;charset=utf-8" };
    let response = await axios.post(url, body, config);
    let result = response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { getDataAxios, postDataAxiosWithoutToken };
