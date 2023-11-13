import { MEMBER_REGISTRATION } from '@/constants/header';
import styles from '@/styles/components/layouts/Header.module.css';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.MainHeader}>
      <div className={styles.listItem}>
        <div className={styles.leftArm}>
          {/* ブランド・アイテムを探す */}
          <li>検索バー</li>
        </div>

        <div className={styles.mainIcon}>
          <li>ロゴ・アイコン</li>
        </div>
        <div className={styles.personalFunction}>
          <Link href={''} className={styles.LoginIcon}>
            <LoginIcon />
          </Link>
          <li>{MEMBER_REGISTRATION}</li>
        </div>
      </div>
    </header>
  );
};

export default Header;
