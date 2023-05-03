import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import BuyerCard from "@/components/Cards/BuyerCard";
import { SellerContext } from "@/contexts/SellerContext";
import { useContext } from "react";

export default function Buyers(props) {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Potential buyers</h1>
        <p>
          On this page you get the <code>`query`</code> params like{" "}
          <code>`zipCode`</code>, and can use them to fetch a list of buyers
          from the API.
        </p>
        <p>
          Make sure to read the docs on how to fetch data on a page - There are
          multiple ways of doing it, and you should choose the one that fits
          your solution best.
        </p>
        <ul>
          <li>
            <a
              href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props"
              target="_blank"
            >
              next.js - Data fetching
            </a>
          </li>
          <li>
            <a
              href="https://react.dev/learn/synchronizing-with-effects#fetching-data"
              target="_blank"
            >
              react.dev - Fetching data
            </a>
          </li>
        </ul>
        <div className={styles.content}>
          <h2>Query params:</h2>
          <pre>
            <code>{JSON.stringify(query, null, 2)}</code>
          </pre>
        </div>
        <section className={styles.container}>
          {props.buyers.map((buyer) => (
            <BuyerCard key={buyer.id} {...buyer} />
          ))}
        </section>
      </div>
    </>
  );
}

/* http://localhost:3000/buyers?size=2300  */

//   const api = "http://localhost:3000/api/find-buyers?price=${mySeller.price}&size=${mySeller.size}&zipCode=${mySeller.zipCode}";

export async function getServerSideProps() {
  const mySeller = useContext(SellerContext);
  // const buyer = context.params.buyer;
  const api = "http://localhost:3000/api/find-buyers?price=" + mySeller.price;
  const res = await fetch(api);
  // If no data - no page (404)
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();

  return {
    props: {
      buyers: data,
    },
  };
}
