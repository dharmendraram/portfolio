import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Navbar section start  */}
      <Navbar/>
        {/* Navbar section end  */}
      <Component {...pageProps} />

       {/* footer section start  */}
       <Footer/>
        {/* footer section end  */}
    </>
  );
}
