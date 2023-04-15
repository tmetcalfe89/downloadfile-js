# download-js

Adds a function that takes a file's contents and name as parameters, and downloads the file

## Installation

`npm i tmetcalfe89/download-js`

## Usage

```JavaScript
import { useState } from "react";
import downloadFile from "download-js";

function App() {
  const [fileContents, setFileContents] = useState("Hi, I'm some content inside of a file!");
  const [fileName, setFileName] = useState("testfile.txt");

  return <div style={{minHeight: "100vh", display: "flex"}}>
    <textarea style={{flexGrow: 1}} value={fileContents} onChange={(e) => setFileContents(e.target.value)} />
    <input value={fileName} onChange={(e) => setFileName(e.target.value)} />
    <button onClick={() => downloadFile(fileContents, fileName)}>Save</button>
  </div>;
}

export default App;
```

## Notes

Adapted from several online sources.