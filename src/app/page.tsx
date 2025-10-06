import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Olá</h1>
        <img src="/next.svg"/>
      </main>
      <footer className={styles.footer}>
        <h3>Footer text</h3>
      </footer>
    </div>
  );
}
