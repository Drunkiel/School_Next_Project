import Axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Form.module.scss";

let gifData: Array<any>;

export function getGifs() {
  const [dataURL, setDataURL] = useState<any[]>([]);

  useEffect(() => {
    Axios.get(
      "https://g.tenor.com/v1/search?q=" +
        "mems" +
        "&key=" +
        "X0A1PUWG8688" +
        "&limit=" +
        "1"
    ).then((res) => setDataURL(res.data));
  }, []);

  gifData = dataURL;

  return gifData || [];
}

export default function Test() {
  getGifs();

  const test = Object.values(gifData);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input
          type="button"
          value={"button"}
          onClick={() => console.log("ala")}
        />

        <div>
          <ul>
            {test.map((gif) => (
              <li key={Math.random()}>
                <Image src={gif[0]?.media[0]?.gif.url} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// gif[0].media[0].gif.url
