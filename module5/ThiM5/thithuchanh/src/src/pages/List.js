import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../models/Product";

function List(props) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        Products.getAll().then((res) => {
            setItems(res.data)
            console.log(res.data);
        });
    }, []);
    const handleDelete = (id) => {
        Products.destroy(id).then((res) => {
            alert('Thành công');
            // Chuyển hướng
            window.location.reload();
        }).catch((res) => {
            alert('Thất bại');
        })
    }
    return (
        <div>
            <h1>Sản phẩm</h1>
            <Link to={'/create'}>Thêm</Link>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Tồn kho</th>
                        <th>hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.length ? items.map((item, key) => (
                            <tr key={key}>
                                <td> {item.id} </td>
                                <td> {item.name} </td>
                                <td> {item.price} </td>
                                <td> {item.quantity} </td>
                                <td> <Link to={'edit/' + item.id}>Sửa</Link> |
                                    <Link onClick={() => handleDelete(item.id)}>Xóa</Link>
                                </td>
                            </tr>
                        )) : ''
                    }
                </tbody>
            </table>
        </div>
    )
}
export default List;