import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from 'formik';
import App from "../App.css";

function List() {
    const [name, setName] = useState([]);
    const [form, setForm] = useState({});
    const [indexSelected, setIndexSelected] = useState(-1);

    const handleValidate = (values) => {
        let errors = {};

        if (!values.title) {
            errors.title = "Điền vào ô trống";
        }
        if (!values.name) {
            errors.name = "Vui lòng chọn";
        }
        return errors;
    }

    const handleSelect = (name, index) => {
        setForm(name);
        setIndexSelected(index);
    };

    const handleDelete = (index) => {
        const newName = [...name];
        newName.splice(index, 1);
        setName(newName);
    };

    const handleSubmit = (values) => {
        const newName = [...name];
        if (indexSelected > -1) {
            newName.splice(indexSelected, 1, values);
        } else {
            newName.push(values);
        }
        setName(newName);
        setForm({});
        setIndexSelected(-1);
    };

    return (
        <div className="list-container">
            <h2>QUẢN LÝ CÔNG VIỆC</h2>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="form-container">
                        <div>
                            <label>Chức vụ :</label><br />
                            <Field
                                style={{ width: '90%' }}
                                type="text"
                                name="title"
                            /><br />
                            <ErrorMessage name="title" component="span" className="error-message" />
                        </div>
                        <div>
                            <label>Công việc :</label>
                            <Field as="select" name="name">
                                <option value="">-- Vui lòng chọn --</option>
                                <option value="Lau nhà">Lau nhà</option>
                                <option value="Quét nhà">Quét nhà</option>
                                <option value="Rửa chén">Rửa chén</option>
                            </Field><br />
                            <ErrorMessage name="name" component="span" className="error-message" />
                        </div>
                        <button type="submit">Gửi</button>
                    </form>
                )}
            </Formik><br />
            <table border={1}>
                <thead>
                    <tr>
                        <th>Chức vụ</th>
                        <th>Công việc</th>
                        <th>Tùy chỉnh</th>
                    </tr>
                </thead>
                <tbody>
                    {name.map((name, index) => (
                        <tr key={index}>
                            <td>{name.title}</td>
                            <td>{name.name}</td>
                            <td>
                                <button onClick={() => {
                                    if (window.confirm("Bạn có muốn xóa nó không?")) {
                                        handleDelete(index);
                                    }
                                    
                                }}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default List;