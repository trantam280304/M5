import axios from "axios";

class Product {
	constructor() {
		// Khai báo thuộc tính
		this.api_url = 'https://654c35a477200d6ba8589e36.mockapi.io/Products';
	}

	// Lấy tất cả    
	all() {
		// Promise
		return new Promise( (reslove, reject) => {
			axios.get( this.api_url ).then( (res) => {
				reslove(res)
			}).catch( (res) => {
				reject(res);
			});
		})
	}

	// Lấy tất cả 
	async getAll(){
		return await axios.get( this.api_url );
	}

	// Lấy chi tiết
	find( id ){
		return new Promise( (reslove, reject) => {
			axios.get( this.api_url + '/' + id ).then( (res) => {
				reslove(res)
			}).catch( (res) => {
				reject(res);
			});
		})
	}

// 	// find(id) {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(this.api_url + "/" + id)
//       .then((res) => {
//         resolve(res.data); // Truyền dữ liệu từ res.data vào resolve()
//       })
//       .catch((error) => {
//         reject(error); // Truyền lỗi error vào reject()
//       });
//   });
// }

	// Xử lý cập nhật
	update( id, data ){
		return new Promise( (reslove, reject) => {
			axios.put( this.api_url + '/' + id , data ).then( (res) => {
				reslove(res)
			}).catch( (res) => {
				reject(res);
			});
		})
	}
	// Xử lý xóa
	destroy( id ){
		return new Promise( (reslove, reject) => {
			axios.delete( this.api_url + '/' + id ).then( (res) => {
				reslove(res)
			}).catch( (res) => {
				reject(res);
			});
		})
	}

	// Xử lý
	store( data ){
		return new Promise( (reslove, reject) => {
			axios.post( this.api_url , data ).then( (res) => {
				reslove(res)
			}).catch( (res) => {
				reject(res);
			});
		})
	}

	show(id) {
		return new Promise((resolve, reject) => {
		  axios
			.get(this.api_url + "/" + id)
			.then((res) => {
			  resolve(res.data); // Truyền dữ liệu từ res.data vào resolve()
			})
			.catch((error) => {
			  reject(error); // Truyền lỗi error vào reject()
			});
		});
	  }
}

export default new Product;