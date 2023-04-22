import styles from "./Card.module.css";
import { CloseBtn } from "./DashboardCloseBtn.js";

export default function DashboardCard() {
  return (
    <article className={styles.card}>
      <ul>
        <li>Date</li>
        <li>Name</li>
        <li>Email</li>
        <li>Phone</li>
        <li>Contact</li>
        <li>Price</li>
        <li>Zipcode</li>
        <li>Size</li>
        <li>Estate type</li>
      </ul>
      <button className={styles.closeIcon}>
        <CloseBtn />
      </button>
    </article>
  );
}
