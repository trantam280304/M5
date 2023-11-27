import axios from "axios";

class OrderModel {
    constructor() {
        this.api_url = 'hhttp://127.0.0.1:8000/api/order';
    }


    async checkout(data) {
        const res = await axios.post(this.api_url + '/checkout' , data)
        return res.data;
    }  

}

export default new OrderModel();