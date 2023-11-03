//  textarea 

// import React, { useState } from "react";

// function Form() {
//   const [state, setState] = useState({
//     description: "anh em chúng mình đi hát phải có trái cây nha"
//   });
//   return (
//     <form>
//       <textarea value={state.description} />
//     </form>
//   );
// }

// export default Form;

//  select 
// import React, {useState} from 'react'

// 	function Form() {
// const [state, setState] = useState({
// mycar: 'Volvo'
// })
//     return (
//       <form>
//       <select value={state.mycar}>
//         <option value="Ford">Ford</option>
//         <option value="Volvo">Volvo</option>
//         <option value="Fiat">Fiat</option>
//       </select>
//       </form>
//     );
// }
// export default Form;


// Thẻ Input File.

// import React, { useState } from "react";

// function FileUploadPage() {
//   const [selectedFile, setSelectedFile] = useState();
//   const [isFilePicked, setIsFilePicked] = useState(false);

//   const changeHandler = event => {
//     setSelectedFile(event.target.files[0]);
//     setIsFilePicked(true);
//   };

//   const handleSubmission = () => {};
//   return (
//     <div>
//       <input type="file" name="file" onChange={changeHandler} />
//       {isFilePicked ? (
//         <div>
//           <p>Filename: {selectedFile.name}</p>
//           <p>Filetype: {selectedFile.type}</p>
//           <p>Size in bytes: {selectedFile.size}</p>
//           <p>
//             lastModifiedDate:{" "}
//             {selectedFile.lastModifiedDate.toLocaleDateString()}
//           </p>
//         </div>
//       ) : (
//         <p>Select a file to show details</p>
//       )}
//       <div>
//         <button onClick={handleSubmission}>Submit</button>
//       </div>
//     </div>
//   );
// }

// export default FileUploadPage;

