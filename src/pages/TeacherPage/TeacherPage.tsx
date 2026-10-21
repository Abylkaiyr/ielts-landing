import styles from './TeacherPage.module.less';

interface TeacherPageProps {
  onOpenDemo: () => void;
}

const FEATURES = [
  { emoji: '🎯', title: 'Методика высокого уровня', text: 'Узнайте, как структурировать уроки так, чтобы студенты видели результат уже после первых занятий.' },
  { emoji: '💰', title: 'Выйти на Premium-доход', text: 'Научитесь продавать свои уроки дорого и строить личный бренд в образовательном пространстве.' },
  { emoji: '🧠', title: 'Психология студента', text: 'Освойте техники мотивации и работы с разными типами обучающихся.' },
  { emoji: '📈', title: 'Рост и масштабирование', text: 'Как перейти от почасовой оплаты к системному бизнесу в образовании.' },
  { emoji: '🌐', title: 'Digital-инструменты', text: 'Современные платформы, автоматизация записей и онлайн-платежей для преподавателя.' },
  { emoji: '🤝', title: 'Сообщество преподавателей', text: 'Закрытый клуб менторов для обмена опытом, кейсами и поддержки коллег.' },
];

const TeacherPage = ({ onOpenDemo }: TeacherPageProps) => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.badge}>
            <i className="fa-solid fa-star"></i>
            <span>Для преподавателей English</span>
          </div>
          <h1 className={styles.title}>Выйдите из рутины в Premium-преподавание</h1>
          <p className={styles.subtitle}>
            Консультация и менторская программа для преподавателей, которые хотят выстроить систему, зарабатывать больше и получать удовольствие от работы.
          </p>
          <button className={styles.btn} onClick={onOpenDemo}>
            <i className="fa-solid fa-calendar-check"></i>
            <span>Записаться на консультацию</span>
          </button>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featInner}>
          <div className={styles.featHeading}>
            <span className={styles.eyebrow}>Программа консультации</span>
            <h2 className={styles.featTitle}>Что вы получите?</h2>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.grid}>
            {FEATURES.map((f) => (
              <div key={f.title} className={styles.card}>
                <div className={styles.cardIcon}>{f.emoji}</div>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardText}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Готовы сделать шаг?</h2>
          <p className={styles.ctaText}>
            Запишитесь на персональную консультацию и получите индивидуальный план развития для вашей практики.
          </p>
          <button className={styles.ctaBtn} onClick={onOpenDemo}>
            Записаться на консультацию
          </button>
        </div>
      </section>
    </div>
  );
};

export default TeacherPage;
