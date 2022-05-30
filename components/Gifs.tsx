import Axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/Form.module.scss";

let gifData: Array<any>;

export function getGifs() {
  const [dataURL, setDataURL] = useState<any[]>([]);

  useEffect(() => {
    Axios.get(
      "https://g.tenor.com/v1/random?q=" +
        "mems" + //wpisując tu inną frazę będą pokazywać się inne gify
        "&key=" +
        "X0A1PUWG8688" +
        "&limit=" +
        "1"
    ).then((res) => setDataURL(res.data));
  }, []);

  gifData = dataURL;

  return gifData || [];
}

export default function Gifs() {
  const [src, setSrc] = React.useState(
    "https://c.tenor.com/oZw_V7BcGCsAAAAd/ras-al-ghul-batman-begins.gif"
  );
  getGifs();

  const test = Object.values(gifData);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div>
          <ul>
            {test.map((gif) => (
              <li key={Math.random()} className={styles.list}>
                <img
                  src={gif[0].media ? gif[0].media?.[0]?.gif.url : ""}
                  alt="tu powinien być gif"
                  width={200}
                  height={200}
                  onError={() => setSrc("../public/vercel.svg")}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
