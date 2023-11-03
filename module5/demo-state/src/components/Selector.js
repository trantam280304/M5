import { useState, useEffect } from "react";
function Selector() {
    let [selected, setSelected] = useState("0");
    let [valueSelected, setValueSelected] = useState("");
    let [color, setColor] = useState("0");
    let [valueColor, setValueColor] = useState("");
    const choice = e => {
        setSelected(e.target.value);
    }
    const choice1 = e => {
        setColor(e.target.value);
    }
    useEffect(() => {
        switch (selected) { 
            case "0":
                setValueSelected("OTO");
                break;
            case "1":
                setValueSelected("XE MÁY");
                break;
            case "2":
                setValueSelected("XE ĐẠP");
                break;
            case "3":
                setValueSelected("MÁY BAY");
                break;
            default:
        }
    }, [selected]);
    
    useEffect(() => {
        switch (color) {
            case "0":
                setValueColor("HỒNG");
                break;
            case "1":
                setValueColor("ĐỎ");
                break;
            case "2":
                setValueColor("TÍM");
                break;
            case "3":
                setValueColor("VÀNG");
                break;
            default:
        }
    }, [color]);
    return (
        <div>
            Phương tiện :
            <select
                onChange={e => {
                    choice(e);
                }}
            >
                <option value="0">OTO</option>
                <option value="1">XE MÁY</option>
                <option value="2">XE ĐẠP</option>
                <option value="3">MÁY BAY</option>
            </select>
            Màu sắc :
            <select
                onChange={e => {
                    choice1(e);
                }}
            >
                <option value="0">hồng</option>
                <option value="1">đỏ</option>
                <option value="2">tím</option>
                <option value="3">vàng</option>
            </select>
            <h2>Phương tiên bạn lái: {valueSelected}- màu {valueColor}</h2>
        </div>
    );
}
export default Selector;
