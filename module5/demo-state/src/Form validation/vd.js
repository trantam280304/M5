// import React, { useState } from "react";

// function Form2() {
//   const [state, setState] = useState({
//     username: "",
//     age: null
//   });
//   const handleChange = event => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     if (nam === "age") {
//       if (!Number(val)) {
//         alert("Vui lòng nhập số nhé ");
//       }
//     }
//     setState({ ...state, [nam]: val });
//   };

//   return (
//     <form>
//       <h1>
//         Xin chào :   {state.username} {state.age}
//       </h1>
//       <p>Tên của bạn:</p>
//       <input type="text" name="username" onChange={handleChange} />
//       <p>Tuổi của bạn:</p>
//       <input type="text" name="age" onChange={handleChange} />
//     </form>
//   );
// }

// export default Form2;    


// ví dụ 2
// import React, { useState } from "react";

// function Form2() {
//   const [state, setState] = useState({
//     username: "",
//     age: null
//   });
//   const handleChange = event =>
//     setState({ ...state, [event.target.name]: event.target.value });

//   const handleSubmit = event => {
//     event.preventDefault();
//     if (!Number(state.age)) {
//       alert("Vui lòng nhập số ");
//     }else{
//         alert("thành công")
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>
//         Xin chào {state.username} {state.age}
//       </h1>
//       <p>Tên của bạn:</p>
//       <input type="text" name="username" onChange={handleChange} />
//       <p>Tuổi của bạn:</p>
//       <input type="text" name="age" onChange={handleChange} />
//       <br />
//       <br />
//       <input type="submit" />
//     </form>
//   );
// }
// export default Form2;


// Thêm Error Message

// import React, { useState, useEffect } from "react";
// function Form2() {
//   const [state, setState] = useState({
//     username: "",
//     age: null,
//     errormessage: ""
//   });
//   const handleChange = event => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     let err = "";
//     if (nam === "age") {
//       if (val !== "" && !Number(val)) {
//         err = "Vui lòng nhập số";
//       }
//     }
//     setState({
//          ...state,
//           [nam]: val, 
//           errormessage: err 
//         });
//   };

//   return (
//     <form>
//       <h1>
//         Xin chào {state.username} {state.age}
//       </h1>
//       <p>Tên của bạn :</p>
//       <input type="text" name="username" onChange={handleChange} />
//       <p>Tuổi của bạn:</p>
//       <input type="text" name="age" onChange={handleChange} /><br/>
//       {state.errormessage}
//     </form>
//   );
// }

// export default Form2;