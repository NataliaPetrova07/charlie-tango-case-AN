import styles from "./Card.module.css";
import icon from "@/assets/icon-input-close.svg";
import Image from "next/image";

export default function BuyerCard(props) {
  return (
    <article className={styles.card}>
      <ul>
        <li>
          <strong>Buyer ID:</strong> {props.id}
        </li>
        <li>
          <strong>Max price:</strong> {props.maxPrice} DKK
        </li>
        <li>
          <strong>Min size:</strong> {props.minSize} m2
        </li>
        <li>
          <strong>Nr of adults:</strong> {props.adults}
        </li>
        <li>
          <strong>Nr of children:</strong> {props.children}
        </li>
        <li>
          <strong>Description:</strong>
          <br /> {props.description}
        </li>
      </ul>
    </article>
  );
}
