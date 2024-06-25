import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) {
      str += "0123456789";
    }
    if (characters) {
      str += "!@#$%^&*(){}[]`";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, characters, setPassword]);

  const CopyToCB = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    alert('Password Copied!');
  }, [password]);

  useEffect(() =>{
    passGenerator();
  }, [length, number, characters, setPassword]);

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={passGenerator}>
            Regenarate
          </button>
          <button 
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={CopyToCB}>
            Copy
          </button>
        </div>
        <div className="flex flex-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={setNumber}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={setCharacters}
              id="charInput"
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
