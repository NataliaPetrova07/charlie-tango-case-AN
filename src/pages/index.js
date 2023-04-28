import Head from "next/head";
import styles from "./Home.module.css";
import Field from "@/components/Forms/Field";
import { estateTypes } from "@/data/estateTypes";
import Form from "@/components/Forms/Form";




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
          {/* action="/buyers" --> direct to the desired page. Careful with method! */}
          <form action="/buyers" method="GET" className={styles.form}>
            <label>
              <span className={styles.label}>Zip Code</span>
              <input name="zipCode" />
            </label>
            {/*  <button className={styles.button}>Submit</button> */}
          </form>
        </div>
        {/*  <div className={styles.content}>
          <h2>Find a buyer for you property</h2>
          <form action="/buyers" method="GET" className={styles.form}>
            <Field
              label="Price"
              id="price"
              name="price"
            />
            <Field
              label="Size"
              id="size" name="size"
            />
            <Field
              label="Zip Code"
              hint="hint-code"
              texthint="Must contain four digits"
              id="zip"
              name="zip"
            />
            <label for="type" className={styles.label}>Property type</label>
            <select className={styles.option} name="type" id="type" >
              <option value="Select a estate"> -- Estate Type -- </option>
              {estateType.map((estate) => (
                <option value={estate.id} key={estate.id} >{estate.name}</option>
              ))
              }
            </select>
          </form>
        </div> */}
        <div className={styles.content}>
          <h2>Find a buyer for you property - Material UI</h2>
          <Form />
        </div>
      </div >
    </>
  );
}
"zip"

