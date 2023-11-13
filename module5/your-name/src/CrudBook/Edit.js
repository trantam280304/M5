import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Books from "../models/Books";
import App from '../App.css';


const rules = Yup.object().shape({
    title: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    quantity: Yup.string()
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
        'title' : '',
        'quantity' : ''
    })


    // Chạy 1 lần duy nhất
    useEffect( () => {
        // // Gọi API, có dữ liệu trả về
        // let Bookss = localStorage.getItem('Bookss');
        // if(Bookss){
        //  Bookss = JSON.parse(Bookss)
        // }else{
        //     Bookss = [];
        // }

        // // Thiết lập danh sách sản phẩm
        // setItems( Bookss );

        // setId( params.id );
        // // Thiết lập data cho form data
        // setFormData( Bookss[params.id] )

        setId( params.id );
        Books.find(params.id).then((res)=>{
            setFormData( res.data );    
        })
    },[] );
    

    const handleSubmit = (values) => {
        let data = values;
        Books.update(params.id, data).then((res)=>{
            alert('thanh cong')
            navigate("/")
        })
        // Chuyển hướng

    }
    return (
        <div>
           <h1 style={{ textAlign: 'center' }}>Edit {params.id}</h1>
<Formik
    initialValues={formData}
    validationSchema={rules}
    onSubmit={(values) => handleSubmit(values)}
    enableReinitialize={true}
>
    {({ errors, touched }) => (
        <Form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="form-field">
                <label htmlFor="title">Title</label><br/>
                <Field name="title" className={errors.title && touched.title ? 'input-error' : ''} />
                {errors.title && touched.title ? (
                    <div className="error-message">{errors.title}</div>
                ) : null}
            </div>

            <div className="form-field">
                <label htmlFor="quantity">Quantity</label><br/>
                <Field name="quantity" className={errors.quantity && touched.quantity ? 'input-error' : ''} />
                {errors.quantity && touched.quantity ? (
                    <div className="error-message">{errors.quantity}</div>
                ) : null}
            </div>

            <button type="submit" className="submit-button">Submit</button>
        </Form>
    )}
</Formik>
        </div>
    );
}

export default Edit;