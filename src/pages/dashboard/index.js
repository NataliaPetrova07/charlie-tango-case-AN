import styles from "./Dashboard.module.css";
import Head from "next/head";
import DashboardCard from "@/components/Cards/DashboardCard";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Dashboard</h1>
        <h2> Latest contacts</h2>
        <section className={styles.container}>
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </section>
      </div>
    </>
  );
}
