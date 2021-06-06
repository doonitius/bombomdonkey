import axios from "axios";

const API_URL = "http://localhost:3000/api/history/";

class his {
    createEdu(data1) {
        return axios
            .post(
                API_URL + "add" + "/education", data1
            )
            .then((response) => {
                return response.data;
            });
    }
    createWork(data2) {
        return axios
            .post(
                API_URL + "add" + "/work", data2
            )
            .then((response) => {
                return response.data;
            });
    }
    async viewEdu(data) {
        const res = await axios.post(API_URL + "viewEdu", data)
        return res.data;
    }
    async viewWork(data) {
        const res = await axios.post(API_URL + "viewWork", data)
        return res.data;
    }
}

export default new his();