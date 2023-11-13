import Footer from '@/components/layouts/Footer/Footer';
import Header from '@/components/layouts/Header/Header';
import styles from '@/styles/Home.module.css';
import { Menu } from '@/components/elements/Menu/Menu';
import { Coordination } from '@/components/elements/Home/Coordination';
import { SideItem } from '@/components/layouts/Side/SideItem';

export default function Home() {
  return (
    <>
      <Header />
      {/* <div className={styles.genderSearch}>
        <li>ALL</li>
        <li>MEN</li>
        <li>WOMEN</li>
      </div> */}
      <div className={styles.home}>
        <SideItem />
        <Coordination />
      </div>

      {/* <Footer /> */}
    </>
  );
}
