import axios from "axios";

const API_URL = "http://localhost:3000/api/bonus/";

class bonus {
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

export default new bonus();