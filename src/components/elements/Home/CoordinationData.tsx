import Image from 'next/image';
import styles from '@/styles/components/layouts/CoordinationData.module.css';

export const CoordinationData = () => {
  return (
    <>
      <div className={styles.canScroll}>
        <Image
          src='/sample1.png'
          width={300}
          height={400}
          alt='サンプル画像1'
          className={styles.sample1}
        />
        <Image
          src='/sample2.png'
          width={300}
          height={400}
          alt='サンプル画像2'
          className={styles.sample2}
        />
        <Image
          src='/sample3.png'
          width={300}
          height={400}
          alt='サンプル画像3'
          className={styles.sample3}
        />
        <Image
          src='/sample4.png'
          width={300}
          height={400}
          alt='サンプル画像3'
          className={styles.sample4}
        />
      </div>
    </>
  );
};
