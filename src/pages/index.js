import Head from "next/head";
import styles from "./Home.module.css";
import { Button } from "@/components/Button";
import Field from "@/components/Forms/Field";
import { estateTypes } from "@/data/estateTypes";




export default function Home() {

  //POPULATE DROP DOWN
  /* https://antdp425.medium.com/populate-dropdown-options-in-react-ad2a54b64f8e */
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
              <input name="zipCode" required />
            </label>
            <label>
              <span className={styles.label}>Zip Code</span>
              <input name="zipCode" required />
            </label>
            <button className={styles.button}>Submit</button>
          </form>
        </div>
        {/*  <div className={styles.content}>
          <h2>Find a buyer for you property</h2>
          <form action="/buyers" method="GET" className={styles.form}>
            <Field
              label="Price"
              id="price"
              name="price"
              required />
            <Field
              label="Size"
              hint="hint-size"
              texthint="In square meters"
              id="size" name="size"

              required />
            <Field
              label="Zip Code"
              hint="hint-code"
              texthint="Must contain four digits"
              id="zip"
              name="zip"

              required />
            <label for="type" className={styles.label}>Property type</label>
            <select className={styles.option} name="type" id="type" required>
              <option value="Select a estate"> -- Estate Type -- </option>
              {estateType.map((estate) => (
                <option value={estate.id} key="esate" >{estate.name}</option>
              ))
              }
            </select>
            <Button text={"Find buyers"}></Button>
          </form>
        </div>
        <div className={styles.content}>
          <div>
            <h2>This will be the choosen buyers displayed</h2>
            <form>
              <Field
                label="First Name"
                hint=""
                texthint="In square meters"
                id="size" name="size"
                required />
              <Field
                label="Last Name"
                hint="hint-size"
                texthint="In square meters"
                id="size" name="size"
                required />
              <Field
                label="Email"
                hint="hint-size"
                texthint="In square meters"
                id="size" name="size"
                required />
              <Field
                label="Phone"
                hint="hint-size"
                texthint="In square meters"
                id="size" name="size"
                required />
              <Field
                label="Checkbox"
                hint="hint-size"
                texthint="In square meters"
                id="size" name="size"
                type="checkbox"
                required />

            </form>
          </div>

        </div> */}
      </div >
    </>
  );
}
"zip"

