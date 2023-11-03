import React, { useState } from "react";

function Submit2() {
  const [username, setUsername] = useState("");

  const submitHandler = event => {
    event.preventDefault();
    alert("Bạn " + username + " đã gửi");
  };
  const handleChange = event => setUsername(event.target.value);
  return (
    <form onSubmit={submitHandler}>
      <h1>Xin chào {username}</h1>
      <p>Nhập tên của bạn và gửi :</p>
      <input type="text" onChange={handleChange} />
      <input type="submit" />
    </form>
  );
}

export default Submit2;