import axios from "axios";

const API_URL = "http://localhost:3000/api/behavior/";

class behavior {
    create(data) {
        return axios
            .post(
                API_URL + "add", data
            )
            .then((response) => {
                return response.data;
            });
    }
}

export default new behavior();