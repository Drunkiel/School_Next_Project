import Axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/Form.module.scss";

let gifData: Array<any>;

export function getGifs() {
  const [dataURL, setDataURL] = useState<any[]>([]);

  useEffect(() => {
    Axios.get(
      "https://g.tenor.com/v1/search?q=" +
        "mems" +
        "&key=" +
        "MY_TENOR_API_KEY" +
        "&limit=" +
        "1"
    ).then((res) => setDataURL(res.data));
  }, []);

  gifData = dataURL;
  return gifData || [];
}

export default function Test() {
  getGifs();
  console.log(gifData);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input
          type="button"
          value={"button"}
          onClick={() => (
            <div>
              <ul>
                {gifData.map((gif) => (
                  <li key={gif.id}>
                    <img src={gif.url} alt="obraz" width={100} height={100} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        />
      </div>
    </div>
  );
}
