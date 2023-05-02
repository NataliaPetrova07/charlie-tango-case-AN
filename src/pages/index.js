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
        <h1 className={styles.headline}>Hello MMD</h1>
        <div className={styles.content}>
          <p>
            To get started, edit <code>pages/index.js</code> and save to reload.
          </p>
        </div>
        <div className={styles.content}>
          <h2>Basic form example</h2>
          <p>
            This is simple example of how you could submit a form to another
            page in Next.js, without using a custom <code>submit</code> function
            (e.g. without JavaScript). It is unstyled and unfinished. You can
            use this as base, or implement your own solution.
          </p>
          <p>
            Make sure to read the guide on{" "}
            <a
              href="https://nextjs.org/docs/guides/building-forms"
              target="_blank"
            >
              building forms in Next.js
            </a>
          </p>
        </div>
        <div className={styles.content}>
          <h2>Find a buyer for you property - Material UI</h2>
          <FormSelect />
        </div>
      </div >
    </>
  );
}
"zip"

