// import React from "react";

// const MyForm = () => {
//   return (
//     <form>
//       <h1>Xin chào</h1>
//       <p>Tên của bạn :</p>
//       <input type="text" />
//     </form>
//   );
// };

// export default MyForm;
 
  // xử lý form 

// import React, { useState } from "react";
// const MyForm = () => {
//     const [username, setUsername] = useState("");
//     // const handleChange = event => setUsername(event.target.value);
//     const handleChange = (e) => {
//         setUsername(e.target.value);
//     }
//       <form>
//         <h1>Hello </h1>
//         <p>Enter your name:</p>
//         <input type="text" onChange={handleChange} />
//       </form>
//     );
//   };
//   export default MyForm;


//  Điều kiện để render (Conditional Rendering)

// import React, { useState } from "react";
// function MyForm() {
//   const [username, setUsername] = useState("");
//   const handleChange = event => setUsername(event.target.value);
//   let header;
//   if (username) {
//     header = <h1>Hello {username}</h1>;
//   } else header = "";
//   return (
//     <div>
//       <form>
//         {header}
//         <p>Enter your name:</p>
//         <input type="text" value={username} onChange={handleChange} />
//       </form>
//     </div>
//   );
// }

// export default MyForm;