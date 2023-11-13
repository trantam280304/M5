import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import App from '../App.css';
import Books from '../models/Books';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DEPOSIT, DRAW } from '../redux/action';

function List(props) {
    // khai bao amount
    const amount = useSelector(state => state.amount)
    const dispatch = useDispatch();

    const [items, setItems] = useState([]);

    useEffect(() => {
        Books.getAll().then((res) => {
            setItems(res.data);
        });
    }, []);

    const params = useParams();
    const [id, setId] = useState(0);

    const handleDelete = (id) => {
        Books.destroy(id)
            .then((res) => {
                alert('Bạn muốn xóa không');
                window.location.reload();
            })
            .catch((res) => {
                alert('Thất bại');
            }); // Added closing parentheses
    };
    const handleDeposit = () => {
        let action = {
            type: DEPOSIT,
            payload: 10
        };
        dispatch(action)
    }
    const handleDraw = () => {
        if (amount === 0) {
            alert('Số dư của bạn không đủ !');
        } else {
            let action = {
                type: DRAW,
                payload: 10
            };
            dispatch(action);
        }
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }} >Số dư tài khoản : {amount} $</h1>
            <div className="button-container">
                <button onClick={handleDeposit}>Nạp</button>
                <button onClick={handleDraw}>Rút</button>
            </div>
            <br />
            <br />
            <Link to={'/create'} className="add-link">Create</Link>
            <h1 style={{ textAlign: 'center' }}>Library</h1>
            <table style={{ border: '0,5px solid black', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '5px' }}>ID</th>
                        <th style={{ border: '1px solid black', padding: '5px' }}>title</th>
                        <th style={{ border: '1px solid black', padding: '5px' }}>quantity</th>
                        <th style={{ border: '1px solid black', padding: '5px' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length ? (
                        items.map((item, key) => (
                            <tr key={key}>
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

                                <td style={{ border: '1px solid black', padding: '5px', textAlign: 'center' }}>
                                    {key + 1}
                                </td>
                                <td style={{ border: '1px solid black', padding: '5px', textAlign: 'center' }}>
                                    {item.title}
                                </td>
                                <td style={{ border: '1px solid black', padding: '5px', textAlign: 'center' }}>
                                    {item.quantity}
                                </td>

                                <td style={{ border: '1px solid black', padding: '5px', textAlign: 'center' }}>
                                    <Link class="edit" to={'edit/' + item.id} style={{ marginRight: '5px' }}>
                                        <i class="fas fa-edit"></i>
                                    </Link>
                                    <Link class="btn" onClick={() => handleDelete(item.id)}>
                                        <i class="fas fa-trash"></i>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>

                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default List;