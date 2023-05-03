import Head from "next/head";
import styles from "../Home.module.css";

import FormContact from "@/components/Forms/FormContact";
import Test from "@/components/Test";

export default function Home() {

    return (
        <>
            <Head>
                <title>Find buyer | EDC</title>
            </Head>

            <div className="wrapper">
                <h1>Contact the potential buyers</h1>
                <div className={styles.content} >
                    <h2>Test</h2>
                    <Test></Test>
                </div >
                <div className={styles.content}>
                    <h2>Missing the choosen buyers displayed</h2>
                    <FormContact />
                </div>
            </div >
        </>
    );
}

