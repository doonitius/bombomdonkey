import axios from "axios";

const API_URL = "http://localhost:3000/api/home/";

class home {
    async ana() {
        const res = await axios.get(API_URL + "ana");
        return res.data;
    }
    async countdepart() {
        const res = await axios.get(API_URL + "countdep");
        return res.data;
    }
    async hardwork() {
        const res = await axios.get(API_URL + "hardwork");
        return res.data;
    }
}

export default new home();