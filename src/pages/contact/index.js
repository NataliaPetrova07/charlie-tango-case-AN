import Head from "next/head";
import styles from "../Home.module.css";

import FormContact from "@/components/Forms/FormContact";
import Buyers from "@/components/Buyers";

export default function Home() {

    return (
        <>
            <Head>
                <title>Find buyer | EDC</title>
            </Head>

            <div className="wrapper">
                <h1>Contact the potential buyers</h1>
                <div className={styles.content} >
                    <h2>Desired buyers</h2>
                    <Buyers />
                </div >
                <div className={styles.content}>
                    <FormContact />
                </div>
            </div >
        </>
    );
}

