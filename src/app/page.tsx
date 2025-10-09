import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Olá</h1>
        <p>This is a simple HTML test page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Curabitur vel urna ac libero tempor tincidunt. Integer tincidunt, nunc sit amet 
          condimentum interdum, elit orci varius nunc, vitae fermentum nisl velit sed felis.
    </p>
    <h4>Adding more text to see stuff happening</h4>
    <h5>Olá ines</h5>
      </main>
      <footer className={styles.footer}>
        <h3>Footer text</h3>
      </footer>
    </div>
  );
}
