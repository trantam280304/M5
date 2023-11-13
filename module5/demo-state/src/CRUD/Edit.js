import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const rules = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    price: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
});

function Edit(props) {
    let navigate = useNavigate();
    const params = useParams();
    const [id,setId] = useState(0);
    const [items,setItems] = useState([]);
    const [formData,setFormData] = useState({
        'name' : '',
        'price' : ''
    })


    // Chạy 1 lần duy nhất
    useEffect( () => {
        // Gọi API, có dữ liệu trả về
        let products = localStorage.getItem('products');
        if(products){
         products = JSON.parse(products)
        }else{
            products = [];
        }

        // Thiết lập danh sách sản phẩm
        setItems( products );

        setId( params.id );
        // Thiết lập data cho form data
        setFormData( products[params.id] )
    },[] );
    

    const handleSubmit = (values) => {
        let data = values;
        // Sao chép lại mảng items
        let new_items = [...items];
        // Thêm phần tử vào new_items
        new_items[params.id] = data
        // Chuyển đổi mảng sang json
        new_items = JSON.stringify(new_items);
        // Lưu vào local storage
        localStorage.setItem('products',new_items);
        // Chuyển hướng
        navigate("/")

    }
    return (
        <div>
            <h1>Edit {params.id}</h1>
            <Formik
                initialValues={formData}
                validationSchema={rules}
                onSubmit={ (values) => handleSubmit(values)  }
                enableReinitialize={true}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field name="name" />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}

                        <label htmlFor="price">Price</label>
                        <Field name="price" />
                        {errors.price && touched.price ? (
                            <div>{errors.price}</div>
                        ) : null}
                        <label htmlFor="email">Price</label>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Edit;