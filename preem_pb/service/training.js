import axios from "axios";

const API_URL = "http://localhost:3000/api/training/";

class train {
    createTrain(data) {
        return axios
            .post(
                API_URL + "add" + "/info", data
            )
            .then((response) => {
                return response.data;
            });
    }
    createEmp(data2) {
        return axios
            .post(
                API_URL + "add" + "/emp", data2
            )
            .then((response) => {
                return response.data;
            });
    }
    async view() {
        const res = await axios.get(API_URL + "view");
        return res.data;
    }
    async viewOne(data) {
        const res = await axios.post(API_URL + "viewOne", data)
        return res.data;
    }
    async deleteTrain(data) {
        const res = await axios.post(API_URL + "delete", data)
        return res.data;
    }
}

export default new train();