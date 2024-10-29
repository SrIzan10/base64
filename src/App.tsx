import { useState } from "react";
import "./App.css";

function App() {
  const [b64, setb64] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <h1>Simplest base64 converter</h1>
      <textarea
        value={b64}
        placeholder="Paste base64 here"
        onChange={(e) => {
          setb64(e.target.value);
          setText(atob(e.target.value));
        }}
      />
      <textarea
        value={text}
        placeholder="Paste text here"
        onChange={(e) => {
          setText(e.target.value);
          setb64(btoa(e.target.value));
        }}
      />
      <p>you can input anything into both boxes btw</p>
    </>
  );
}

export default App;
