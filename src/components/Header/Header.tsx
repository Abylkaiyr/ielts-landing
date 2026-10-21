import type { ViewType } from '../../types';
import styles from './Header.module.less';

interface HeaderProps {
  onBurgerClick: () => void;
  onShowView: (view: ViewType) => void;
  onOpenDemo: () => void;
}

const Header = ({ onBurgerClick, onShowView, onOpenDemo }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <button className={styles.burgerBtn} onClick={onBurgerClick} aria-label="Открыть меню">
          <i className={`fa-solid fa-bars ${styles.burgerIcon}`}></i>
          <span className={styles.burgerLabel}>Меню</span>
        </button>

        <button className={styles.brand} onClick={() => onShowView('main')}>
          <span className={styles.brandText}>IELTS</span>
        </button>

        <div className={styles.actions}>
          <a
            href="https://wa.me/77068884036?text=Здравствуйте!%20Хочу%20узнать%20подробнее%20о%20курсах"
            target="_blank"
            rel="noreferrer"
            className={styles.whatsappBtn}
          >
            <i className="fa-brands fa-whatsapp"></i>
            <span>WhatsApp</span>
          </a>
          <button className={styles.demoBtn} onClick={onOpenDemo}>
            Demo Lesson
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
