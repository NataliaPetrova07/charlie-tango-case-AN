import "@/styles/globals.css";
import { Header } from "@/components/Header/Header";
import { SellerProvider } from "@/contexts/SellerContext";

export default function App({ Component, pageProps }) {
  return (
    <SellerProvider>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </SellerProvider>
  );
}
