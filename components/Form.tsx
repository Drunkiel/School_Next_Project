import Axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import styles from "../styles/Form.module.scss";

export function fetchGifs() {
  return Axios.get(
    "https://g.tenor.com/v1/search?q=" +
      "mems" +
      "&key=" +
      "X0A1PUWG8688" +
      "&limit=" +
      "1"
  ).then((d) => d.data || []);
}

export default function Form() {
  const [dataURL, setDataURL] = useState<any[]>([]);
  useEffect(() => {
    async (test: any) => {
      const data = await fetchGifs();
      setDataURL(data);
    };
  }, []);

  let root: any;

  if (typeof window !== "undefined") {
    const element = document.getElementById("__next") as HTMLElement;
    root = ReactDOM.createRoot(element);
    console.log("browser");
  } else {
    console.log("You are on the server");
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input
          type="button"
          value={"button"}
          onClick={() =>
            root.render(
              <div>
                <ul>
                  {dataURL.map((gif) => (
                    <li key={gif.id} className={gif.url}>
                      <img src={gif.url} alt="obraz" width={100} height={100} />
                    </li>
                  ))}
                </ul>
              </div>
            )
          }
        />
      </div>
    </div>
  );
}
