import axios from "axios";

class ProductModel {
    constructor() {
		// Khai báo thuộc tính
		this.api_url = 'http://127.0.0.1:8000/api/products';
	}
    // Lấy tất cả 
    all() {
        //  dùng Promise
        return new Promise((reslove, reject) => {
            axios.get(this.api_url).then((res) => {
                reslove(res);
            }).catch((res) => {
                reject(res);
            });
        })

    }

    find(id) {
        return new Promise((reslove, reject) => {
            axios.get(this.api_url  +"/"+ id).then((res) => {
                reslove(res);
            }).catch((res) => {
                reject(res);
            })
        })

    }
    
    // Xử lý cập nhật
    update(id, data) {
        return new Promise((reslove, reject) => {
            axios.put(this.api_url + "/" + id , data).then((res) => {
                reslove(res);
            }).catch((res) => {
                reject(res);
            })
        })
    }
    // xử lý xóa
    destroy(id) {
        return new Promise((reslove, reject) => {
            axios.delete(this.api_url + "/" + id).then((res) => {
                reslove(res);
            }).catch((res) => {
                reject(res);
            })
        })

    }
    // xử lý thêm
    store(data) {
        return new Promise((reslove, reject) => {
            axios.post(this.api_url + "/" , data).then((res) => {
                reslove(res);
            }).catch((res) => {
                reject(res);
            });
        })
    }
}


export default new ProductModel;