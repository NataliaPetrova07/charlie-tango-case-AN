import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import BuyerCard from "@/components/Cards/BuyerCard";

export default function Buyers(props) {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1>Potential buyers</h1>
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

export async function getServerSideProps() {
  // const buyer = context.params.buyer;
  const api = "http://localhost:3000/api/find-buyers?price=1000000";
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



//   const api = "http://localhost:3000/api/find-buyers?price=${mySeller.price}&size=${mySeller.size}&zipCode=${mySeller.zipCode}";

/* export async function getServerSideProps() {
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
 */