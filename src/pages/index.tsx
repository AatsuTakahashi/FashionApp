import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.genderSearch}>
        <li>ALL</li>
        <li>MEN</li>
        <li>WOMEN</li>
      </div>

      {/* <Footer /> */}
    </>
  );
}
