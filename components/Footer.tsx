import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>
        Gify są losowane za każdym odświeżeniem strony
      </h1>
    </div>
  );
}
