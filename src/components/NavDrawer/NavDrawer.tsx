import type { ViewType } from '../../types';
import styles from './NavDrawer.module.less';

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onShowView: (view: ViewType, section?: string) => void;
}

const NavDrawer = ({ isOpen, onClose, onShowView }: NavDrawerProps) => {
  const handleNav = (view: ViewType, section?: string) => {
    onShowView(view, section);
    onClose();
  };

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <button className={styles.brand} onClick={() => handleNav('main')}>
          IELTS
        </button>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Закрыть меню">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      <nav className={styles.nav}>
        <button className={styles.navLinkLarge} onClick={() => handleNav('main')}>
          Главная страница
        </button>

        <button className={styles.navLinkLarge} onClick={() => handleNav('detail')}>
          <span>Программа для студентов (IELTS)</span>
          <span className={`${styles.badge} ${styles.navy}`}>Курс</span>
        </button>

        <button className={styles.navLinkMedium} onClick={() => handleNav('detail', 'video-showcase')}>
          Видео с уроков
        </button>

        <button className={styles.navLinkMedium} onClick={() => handleNav('detail', 'tariffs')}>
          Программы и Тарифы
        </button>

        <button className={styles.navLinkMedium} onClick={() => handleNav('detail', 'reviews-section')}>
          Отзывы студентов
        </button>

        <button className={styles.navLinkLarge} onClick={() => handleNav('teacher')}>
          <span>Консультация для преподавателей</span>
          <span className={`${styles.badge} ${styles.amber}`}>NEW</span>
        </button>

        <button className={styles.navLinkMedium} onClick={() => handleNav('detail', 'faq')}>
          Часто задаваемые вопросы (FAQ)
        </button>
      </nav>

      <div className={styles.footer}>
        <p>© 2026 IELTS. Все права защищены.</p>
        <div className={styles.socials}>
          <a href="https://wa.me/77068884036" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://t.me/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="https://www.instagram.com/_lessdr_?igsi=OWF2MGJhcmQ2YTFr" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
