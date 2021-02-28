import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div>
      <div className="progress-bar" style={{ width: progress + "%" }}></div>
    </div>
  );
};

export default ProgressBar;
