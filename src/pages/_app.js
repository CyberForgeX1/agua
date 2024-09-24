import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-black">
      <div className="max-w-screen-xl mx-auto ">
        <Navbar />
        <Component {...pageProps} />;
        <Footer />
      </div>
    </div>
  );
}
