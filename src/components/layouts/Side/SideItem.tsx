import { Favorite } from '@/components/elements/Favorite/Favorite';
import { Menu } from '@/components/elements/Menu/Menu';
import React from 'react';
import styles from '@/styles/components/layouts/SideItem.module.css';

export const SideItem = () => {
  return (
    <>
      <div className={styles.sideItem}>
        <Menu />
        <Favorite />
      </div>
    </>
  );
};
