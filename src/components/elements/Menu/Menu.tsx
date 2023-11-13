import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/components/layouts/Menu.module.css';
import { MenuData } from './MenuData';
import { MENU } from '@/constants/menu';

export const Menu = () => {
  return (
    <>
      <div className={styles.menu_title}>{MENU}</div>
      <ul className={styles.menuItems}>
        {MenuData.map((value, key) => {
          return (
            <Link key={key} className={styles.row} href={value.link}>
              <div id='title' className={styles.Menu_item}>
                {value.title}
              </div>
            </Link>
          );
        })}
      </ul>
    </>
  );
};
