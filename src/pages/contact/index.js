import Head from "next/head";
import styles from "../Home.module.css";

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
                <h1 className={styles.headline}>Contact the potential buyers</h1>
                <div className={styles.content}>
                    <h2>This will be the choosen buyers displayed</h2>
                    <form>
                        <Field
                            label="Full name"
                            id="fullname"
                            name="fullname"
                            required />
                        <Field
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            required />
                        <Field
                            label="Phone"
                            id="size"
                            name="size"
                            required />
                        <Field
                            label="Checkbox"
                            id="check"
                            name="check"
                            type="checkbox"
                            required />

                    </form>
                </div>
            </div >
        </>
    );
}

