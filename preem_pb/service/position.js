import axios from "axios";

const API_URL = "http://localhost:3000/api/position/";

class posi {
    create(data) {
        return axios.post(API_URL + "add", data).then((response) => {
            return response.data;
        });
    }
    createDe(data) {
        return axios.post("http://localhost:3000/api/department/add", data).then((response) => {
            return response.data;
        });
    }
}

export default new posi();