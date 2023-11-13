import axios from 'axios';
import React, { Component } from 'react';

class Books {
    constructor() {
        this.api_url = "https://654c35a477200d6ba8589e36.mockapi.io/Book"
    }
    //    lấy tất cả 
    async getAll() {
        return await axios.get(this.api_url);
    }
    // lay chi tiet
    find(id) {
        return new Promise((reslove, reject) => {
            axios.get(this.api_url + '/' + id).then((res) => {
                reslove(res);
                reject(res);
            })
        })
    }
    // xử lý cập nhật 
    update(id, data) {
        return new Promise((reslove, reject) => {
            axios.put(this.api_url + '/' + id, data).then((res) => {
                reslove(res);
            }).catch((res) => {
                reject(res);
            })
        })
    }

    //  xu ly xoa 
    destroy(id) {
        return new Promise((reslove, reject) => {
            axios.delete(this.api_url + '/' + id).then((res) => {
                reslove(res);
            }).catch((res) => {
                reject(res);
            });
        })
    }
    // xu ly them 
    store( data) {
        return new Promise((reslove, reject) => {
            axios.post(this.api_url  ,data).then((res) => {
                reslove(res);
            }).catch((res) => {
                reject(res);
            })
        })
    }

}

export default new Books;
