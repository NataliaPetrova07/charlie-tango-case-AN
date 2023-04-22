import styles from "./Card.module.css";
import icon from "@/assets/icon-input-close.svg";
import Image from "next/image";

export default function BuyerCard() {
  return (
    <article className={styles.card}>
      <ul>
        <li>Id</li>
        <li>Estate</li>
        <li>Date</li>
        <li>Adults</li>
        <li>Children</li>
        <li>Description</li>
      </ul>
      <button className={styles.closeIcon}>
        <Image src={icon.src} width={30} height={30} alt="close" priority />
      </button>
    </article>
  );
}
