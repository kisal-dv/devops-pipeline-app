import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  const callApi = async () => {
    const res = await fetch("http://localhost:8080/api/hello");
    const text = await res.text();
    setMsg(text);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>DevOps Project</h1>
      <button onClick={callApi}>Call API</button>
      <p>{msg}</p>
    </div>
  );
}

export default App;