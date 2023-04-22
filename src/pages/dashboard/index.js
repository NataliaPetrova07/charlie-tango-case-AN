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
        <h1>Dashboard: Latest contacts</h1>
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
