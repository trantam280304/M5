import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import App from '../App.css';
import Product from '../models/Product';
import { useParams } from 'react-router-dom';
function List(props) {
    // Làm việc với dữ liệu
    const [items, setItems] = useState([]);
    // Chạy 1 lần duy nhất
    useEffect(() => {
        Product.getAll().then((res) => {
            setItems(res.data)
        });

    }, []);

    const params = useParams();
    const [id, setId] = useState(0);

    const handleDelete = (id) => {
        Product.destroy(id).then((res) => {
            alert('Thành công');
            // Chuyển hướng
            window.location.reload();
        }).catch((res) => {
            alert('Thất bại');
        })
    }




    return (
        <div>
            <Link to={'/create'} class ="add-link">Thêm mới</Link>
            <h1 style={{textAlign:'center'}}> Hiên thị danh sách</h1>
            <table style={{ border: '1px solid black', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '5px' }}>ID</th>
                        <th style={{ border: '1px solid black', padding: '5px' }}>Name</th>
                        <th style={{ border: '1px solid black', padding: '5px' }}>Price</th>
                        <th style={{ border: '1px solid black', padding: '5px' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.length ? items.map((item, key) => (
                            <tr key={key}>
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                                <td style={{ border: '1px solid black', padding: '5px',textAlign:'center'  }}>{key}</td>
                                <td style={{ border: '1px solid black', padding: '5px',textAlign:'center'  }}>{item.name}</td>
                                <td style={{ border: '1px solid black', padding: '5px',textAlign:'center' }}>{item.price}</td>
                                <td style={{ border: '1px solid black', padding: '5px', textAlign: 'center' }}>
                                    <Link class="edit" to={'edit/' + item.id} style={{ marginRight: '5px' }}>
                                        <i class="fas fa-edit"></i>
                                    </Link>
                                    <Link class="btn" onClick={() => handleDelete(item.id)}>
                                        <i class="fas fa-trash"></i>
                                    </Link>
                                </td>
                            </tr>
                        )) : ''
                    }
                </tbody>
            </table>
        </div>
    );
}
export default List;