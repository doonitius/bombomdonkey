import axios from "axios";

const API_URL = "http://localhost:3000/api/promotionhistory/";

class promoHis {
    create(data) {
        return axios
            .post(
                API_URL + "add", data
            )
            .then((response) => {
                return response.data;
            });
    }
    async viewOne(data) {
        const res = await axios.post(API_URL + "viewOne", data)
        return res.data;
    }
}

export default new promoHis();