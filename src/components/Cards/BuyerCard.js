import styles from "./Card.module.css";
import icon from "@/assets/icon-input-close.svg";
import Image from "next/image";

export default function BuyerCard({ data }) {
  const { content } = data;
  return (
    <article className={styles.card}>
      <ul>
        <li>{content.id}</li>
        <li>{content.maxPrice}</li>
        <li>{content.minSize}</li>
        <li>{content.adults}</li>
        <li>{content.children}</li>
        <li>{content.description}</li>
      </ul>
      <button className={styles.closeIcon}>
        {/* <button onClick={() => props.addBuyer(props.id)} className={styles.closeIcon}> */}
        <Image src={icon.src} width={30} height={30} alt="close" priority />
      </button>
    </article>
  );
}

// SHOULD THIS BE IN THE APP OR INDEX???

// const [buyers, setBuyers] = useState([
//   {
//     maxPrice: 1000000,
//     estateType: "string",
//     takeoverDate: "string",
//     children: 0,
//     adults: 1,
//     description: "string",
//     minSize: 90,
//     id: "string",
//   },
// ]);

// function addBuyer(buyerName) {
//   const newBuyer = {
//     maxPrice: 1000000,
//     estateType: "string",
//     takeoverDate: "string",
//     children: 0,
//     adults: 1,
//     description: "string",
//     minSize: 90,
//     id: "string",
//   };
//   setBuyer((oldBuyer) => oldBuyer.concat(newBuyer));
// }

// function deleteBuyer(id) {
//   setBuyer((oldState) => oldState.filter((buyer) => buyer.id !== id));
// }

// return (
//   <article className={styles.card}>
//     <Form addBuyer={addBuyer} />
//     <List buyers={buyers} deleteBuyer={deleteBuyer} />
//   </article>
// );

export async function getStaticProps() {
  // const buyer = context.params.buyer;
  const api = "/api/find-buyers";
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
      data: data,
    },
  };
}

// FOUND THIS:

// import useSWR from 'swr'
// import PersonComponent from '../components/Person'
// import type { Person } from '../interfaces'

// const fetcher = (url: string) => fetch(url).then((res) => res.json())

// export default function Index() {
//   const { data, error, isLoading } = useSWR<Person[]>('api/find-buyers', fetcher)

//   if (error) return <div>Failed to load</div>
//   if (isLoading) return <div>Loading...</div>
//   if (!data) return null

//   return (
//     <ul>
//       {data.map((p) => (
//         <PersonComponent key={p.id} person={p} />
//       ))}
//     </ul>
//   )
// }
