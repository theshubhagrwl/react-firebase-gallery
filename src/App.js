import React from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

console.log(process.env.REACT_APP_APIKEY);

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
    </div>
  );
}

export default App;
