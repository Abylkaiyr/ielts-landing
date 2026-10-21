import styles from './HeroSection.module.less';

interface HeroSectionProps {
  onScrollToCourses: () => void;
  onOpenDemo: () => void;
}

const HeroSection = ({ onScrollToCourses, onOpenDemo }: HeroSectionProps) => {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.badge}>
          <i className="fa-solid fa-graduation-cap"></i>
          <span>Премиальная Академия Английского Языка</span>
        </div>

        <h1 className={styles.title}>
          Застряли на текущем уровне <br />
          английского или{' '}
          <span className={styles.titleAccent}>дохода?</span>
        </h1>

        <p className={styles.subtitle}>
          Мы помогаем студентам сдать IELTS на 7+, а преподавателям — выйти из
          вечной рутины, внедрить сильную методику и продавать свои уроки дорого.
        </p>

        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={onScrollToCourses}>
            <span>Выбрать курс</span>
            <i className={`fa-solid fa-arrow-right ${styles.arrow}`}></i>
          </button>
          <button className={styles.btnSecondary} onClick={onOpenDemo}>
            Demo Lesson
          </button>
        </div>

        <div className={styles.ticker}>
          <span>
            <i className="fa-solid fa-graduation-cap" style={{ color: '#1E3E62', marginRight: '0.5rem' }}></i>
            HARVARD
          </span>
          <span className={styles.tickerDot}>•</span>
          <span>CELTA &amp; TESOL</span>
          <span className={styles.tickerDot}>•</span>
          <span>10+ ЛЕТ ОПЫТА</span>
          <span className={styles.tickerDot}>•</span>
          <span>
            <i className="fa-solid fa-credit-card" style={{ color: '#059669', marginRight: '0.375rem' }}></i>
            KASPI 0-0-12
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
