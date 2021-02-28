import React from "react";
import ImageGrid from "./comps/ImageGrid";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

console.log(process.env.REACT_APP_APIKEY);

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
