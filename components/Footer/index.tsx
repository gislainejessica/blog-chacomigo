import React from 'react';
import styles from '../../styles/Home.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        ChaComigo Blog
        </p>
      <p>
        © 2020 Blog da ChaComigo. Feito com  Published with Next.
        </p>
    </footer>
  );
};

export default Footer;
