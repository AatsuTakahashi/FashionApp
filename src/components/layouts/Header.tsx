import styles from "@/styles/components/layouts/Header.module.css";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.MainHeader}>
      <div className={styles.listItem}>
        <div className={styles.leftArm}>
          <Link href={""} className={styles.collapsibleSideBar}>
            <MenuIcon />
          </Link>
          {/* ブランド・アイテムを探す */}

          <li>検索バー</li>
        </div>

        <div className={styles.mainIcon}>
          <li>ロゴ・アイコン</li>
        </div>
        <div className={styles.personalFunction}>
          <Link href={""} className={styles.LoginIcon}>
            <LoginIcon />
          </Link>
          <li>会員登録</li>
        </div>
      </div>
    </header>
  );
};

export default Header;
