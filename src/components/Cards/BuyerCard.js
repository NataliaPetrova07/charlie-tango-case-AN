import styles from "./Card.module.css";
import icon from "@/assets/icon-input-close.svg";
import Image from "next/image";

export default function BuyerCard(props) {
  const priceFormatter = new Intl.NumberFormat("da-DK", {
    currency: "DKK",
    style: "currency",
    maximumFractionDigits: 0,
  });
  return (
    <article className={styles.card}>
      <ul>
        <li>
          <strong>Buyer ID:</strong> {props.id}
        </li>
        <li>
          <strong>Max price:</strong> {priceFormatter.format(props.maxPrice)}
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
