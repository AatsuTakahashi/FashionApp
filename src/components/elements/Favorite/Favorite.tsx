import React from 'react';
import { FavoriteData } from './FavoriteData';
import Link from 'next/link';
import styles from '@/styles/components/layouts/Favorite.module.css';
import { FAVORITE } from '@/constants/favorite';

export const Favorite = () => {
  return (
    <>
      <div className={styles.favorite_title}>{FAVORITE}</div>
      <ul className={styles.favoriteItems}>
        {FavoriteData.map((value, key) => {
          return (
            <Link key={key} className={styles.favorite_row} href={value.link}>
              <div id='title' className={styles.favorite_item}>
                {value.title}
              </div>
            </Link>
          );
        })}
      </ul>
    </>
  );
};
