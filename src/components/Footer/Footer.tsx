import styles from './Footer.module.less';

const Footer = () => {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <span className={styles.brand}>IELTS</span>
          <p className={styles.copy}>© 2026 IELTS. Все права защищены.</p>
        </div>
        <a
          href="https://wa.me/77068884036?text=Здравствуйте!%20Хочу%20записаться%20на%20DEMO%20LESSON"
          target="_blank"
          rel="noreferrer"
          className={styles.waBtn}
        >
          <i className="fa-brands fa-whatsapp"></i>
          <span>Написать в WhatsApp</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
