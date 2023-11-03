import React, { Component } from 'react';

class MayTinh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soA: 0,
            soB: 0,
            toanTu: '',
            ketQua: '',
        };
    }
    xuLyCong = () => {
        let soA = parseInt(this.state.soA);
        let soB = parseInt(this.state.soB);
        let kq = soA + soB;
        this.setState({ ketQua: kq });
    }
    xuLyTru = () => {
        let soA = parseInt(this.state.soA);
        let soB = parseInt(this.state.soB);
        let kq = soA - soB;
        this.setState({ ketQua: kq });
    }
    xuLyNhan = () => {
        let soA = parseInt(this.state.soA);
        let soB = parseInt(this.state.soB);
        let kq = soA * soB;
        this.setState({ ketQua: kq });
    }
    xuLyChia = () => {
        let soA = parseInt(this.state.soA);
        let soB = parseInt(this.state.soB);
        let kq = soA / soB;
        this.setState({ ketQua: kq });
    }
    setsoA = (e) => {
        this.setState({ soA: e.target.value });
    };
    setsoB = (e) => {
        this.setState({ soB: e.target.value });
    }
    render() {

        return (
            <div>
                soA : {this.state.soA}  
                <br></br>
                soB : {this.state.soB}
                <br />
                So thu nhat : <input type="number" onChange={this.setsoA} />
                <br />
                So thu hai : <input type="number" onChange={this.setsoB} />
                <br />
                <button onClick={this.xuLyCong}> + </button>
                <button onClick={this.xuLyTru}> - </button>
                <button onClick={this.xuLyNhan}> * </button>
                <button onClick={this.xuLyChia}> / </button>
                <br />
                Ket qua la: {this.state.ketQua}

            </div>
        )
    }
}
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
export default MayTinh;
