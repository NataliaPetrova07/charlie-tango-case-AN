import styles from "./Card.module.css";
import icon from "@/assets/icon-input-close.svg";
import Image from "next/image";

export default function BuyerCard(props) {
  return (
    <article className={styles.card}>
      <ul>
        <li>{props.id}</li>
        <li>{props.maxPrice}</li>
        <li>{props.minSize}</li>
        <li>{props.adults}</li>
        <li>{props.children}</li>
        <li>{props.description}</li>
      </ul>
    </article>
  );
}
