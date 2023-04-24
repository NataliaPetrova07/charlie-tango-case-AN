import styles from "./Card.module.css";
import icon from "@/assets/icon-input-close.svg";
import Image from "next/image";

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
        <Image src={icon.src} width={30} height={30} alt="close" priority />
      </button>
    </article>
  );
}
