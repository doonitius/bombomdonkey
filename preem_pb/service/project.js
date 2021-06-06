import axios from "axios";
const API_URL = "http://localhost:3000/api/project/";

class project {
    createPro(data) {
        return axios
            .post(
                API_URL + "addProject", data
            )
            .then((response) => {
                return response.data;
            });
    }
    createPar(data1) {
        return axios
            .post(
                API_URL + "addParti", data1
            )
            .then((response) => {
                return response.data;
            });
    }
    async viewAll() {
        const res = await axios.get(API_URL + "viewAll");
        return res.data;
    }
    async viewOne(data) {
        const res = await axios.post(API_URL + "viewOne", data)
        return res.data;
    }
    async deleteProject(data) {
        const res = await axios.post(API_URL + "deleteProject", data)
        return res.data;
    }
    async editProject(data) {
        const res = await axios.post(API_URL + "editProject", data)
        return res.data;
    }
}

export default new project();