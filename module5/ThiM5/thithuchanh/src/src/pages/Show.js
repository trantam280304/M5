import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Product from "../models/Product";




function Show(props) {
     const { id } = useParams();
const [product, setProduct] = useState({});
useEffect(() => {
    Product.show(id)
      .then((data) => {
        setProduct(data); // Cập nhật dữ liệu từ res.data vào state product
      })
      .catch((error) => {
        console.error("Lỗi xảy ra: ", error);
      });
  }, [id]);
return (
    <div>
    <h1>Chi Tiết Sản Phẩm</h1>
    <table>
      <tbody>
        <tr>
          <td>Tên sản phẩm:</td>
          <td>{product.name}</td>
        </tr>
        <tr>
          <td>Giá:</td>
          <td>{product.price}</td>
        </tr>
        <tr>
          <td>Tồn kho:</td>
          <td>{product.quantity}</td>
        </tr>
        <tr>
          <td>Mô tả:</td>
          <td>{product.description}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <button className="add-btn">
        <Link to="/" className="button-link">Danh sách</Link>
      </button>
    </div>
  </div>
);
}

export default Show;