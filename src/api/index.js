import axios from "axios";
const base_url = "http://localhost:3000";
export default {
  get(url, params, config) {
    return axios
      .get(base_url + url, { params }, config)
      .then(res => {
        if (res.status === 200) {
          return res;
        }
        throw Error("status is not equal 200");
      })
      .catch(err => {
        console.error("get api error:" + err);
      });
  },
  post(url, data, config) {
    return axios.post(base_url + url, data, config);
  }
};
