import Axios from "axios";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import styles from "../styles/Form.module.scss";

export async function fetchGifs() {
  const d = await Axios.get(
    "https://g.tenor.com/v1/search?q=" +
      "mems" +
      "&key=" +
      "X0A1PUWG8688" +
      "&limit=" +
      "1"
  );
  return d.data || [];
}

export default function Form() {
  const [dataURL, setDataURL] = useState<any[]>([]);
  useEffect(() => {
    async (_test: any) => {
      const data = await fetchGifs();
      setDataURL(data);
    };
  }, []);

  // let root: any;

  // if (typeof window !== "undefined") {
  //   const element = document.getElementById("__next") as HTMLElement;
  //   root = createRoot(element!);
  //   console.log("browser");
  // } else {
  //   console.log("You are on the server");
  // }

  // function element() {
  //   const test = (
  //     <div>
  //       <ul>
  //         {dataURL.map((gif) => (
  //           <li key={gif.id}>
  //             <img src={gif.url} alt="obraz" width={100} height={100} />
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  //   root.render(test);
  // }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input
          type="button"
          value={"button"}
          onClick={() => console.log(dataURL)}
        />
        <div>
          <ul>
            {dataURL.map((gif) => (
              <li key={Math.random()}>
                <img src={gif.url} alt="obraz" width={100} height={100} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

//X0A1PUWG8688
