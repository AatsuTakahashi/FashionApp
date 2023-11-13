import React from 'react';
import styles from '@/styles/components/layouts/Coordination.module.css';
import { CoordinationData } from './CoordinationData';

export const Coordination = () => {
  return (
    <>
      <div className={styles.coordinationImages}>
        <CoordinationData />
      </div>
    </>
  );
};
