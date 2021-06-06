import axios from "axios";

const API_URL = "http://localhost:3000/api/employee/";

class employee {
    create(data) {
        return axios.post(API_URL + "add", data).then((response) => {
            return response.data;
        });
    }
    async viewOne(data) {
        const res = await axios.post(API_URL + "view", data)
        return res.data;
    }
    async view() {
        const res = await axios.get(API_URL + "viewAll");
        return res.data;
    }
    async edit(data) {
        const res = await axios.post(API_URL + "edit", data)
        return res.data;
    }
    async delete(data) {
        const res = await axios.post(API_URL + "delete", data)
        return res.data;
    }
}

export default new employee();