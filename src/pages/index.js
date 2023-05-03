import Head from "next/head";
import styles from "./Home.module.css";
import Field from "@/components/Forms/Field";
import { estateTypes } from "@/data/estateTypes";
import Form from "@/components/Forms/FormSelect";
import FormSelect from "@/components/Forms/FormSelect";




export default function Home() {

  let estateType = estateTypes

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <div className={styles.content}>
          <h2>Find a buyer for you property</h2>
          <FormSelect />
        </div>
      </div >
    </>
  );
}
"zip"

