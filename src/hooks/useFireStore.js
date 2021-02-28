import { useState, useEffect } from "react";
import { projectFireStore } from "../firebase/config";

const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);
  console.log(docs);

  useEffect(() => {
    const unsub = projectFireStore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFireStore;
