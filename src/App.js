import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleOnChange = (event) => {
    const file = event.currentTarget.files[0];
    setValue(file);
  }

  const handleOnClickOneRequest = async () => {
    const formData = new FormData();
    formData.append("file", value);
    axios.post(`http://localhost:${process.env.REACT_APP_BE_PORT}/upload-file`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  }

  return (
    <>
      <input type="file" onChange={handleOnChange} />
      <button onClick={handleOnClickOneRequest} >Send</button>
    </>
  );
}

export default App;
