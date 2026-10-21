import { useEffect } from 'react';
import VideoSection from '../../sections/VideoSection/VideoSection';
import TariffsSection from '../../sections/TariffsSection/TariffsSection';
import ReviewsSection from '../../sections/ReviewsSection/ReviewsSection';
import FaqSection from '../../sections/FaqSection/FaqSection';
import styles from './DetailPage.module.less';

interface DetailPageProps {
  onOpenDemo: () => void;
  pendingSection: string | null;
  onSectionScrolled: () => void;
}

const DetailPage = ({ onOpenDemo, pendingSection, onSectionScrolled }: DetailPageProps) => {
  useEffect(() => {
    if (pendingSection) {
      const el = document.getElementById(pendingSection);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
      onSectionScrolled();
    }
  }, [pendingSection, onSectionScrolled]);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>
            <i className="fa-solid fa-star" style={{ color: '#fbbf24' }}></i>
            <span>Официальная программа IELTS Academy</span>
          </div>
          <h1 className={styles.heroTitle}>СДАТЬ IELTS НА 7+ за 2 месяца</h1>
          <p className={styles.heroSubtitle}>
            запишись на урок и почувствуй наш вайб преподавателя с диплома Гарварда
          </p>
          <button className={styles.heroBtn} onClick={onOpenDemo}>
            <i className="fa-solid fa-calendar-check"></i>
            <span>Записаться на DEMO LESSON</span>
          </button>
        </div>
      </section>

      {/* Advantages */}
      <section className={styles.advantages}>
        <div className={styles.advInner}>
          <div className={styles.advHeading}>
            <span className={styles.eyebrow}>Наши преимущества</span>
            <h2 className={styles.advTitle}>Почему студенты выбирают наше обучение?</h2>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.advGrid}>
            {[
              { emoji: '🎓', title: 'Гарвардский стандарт', text: 'Все наши преподаватели имеют диплом престижного Harvard University.' },
              { emoji: '📜', title: 'Мировая квалификация', text: 'Преподаватели сертифицированы по строгим международным стандартам CELTA, TESOL и TKT.' },
              { emoji: '🌟', title: 'Колоссальный опыт', text: 'Более 10 лет успешной практики преподавания и гарантированной подготовки студентов к сдаче IELTS.' },
              { emoji: '💳', title: 'Доступная оплата', text: 'Учитесь сейчас — платите потом. Доступна Каспи Рассрочка и оплата через Kaspi Red.', accent: true },
            ].map((item) => (
              <div key={item.title} className={`${styles.advCard} ${item.accent ? styles.accent : ''}`}>
                <div className={`${styles.advIcon} ${item.accent ? styles.green : ''}`}>
                  {item.emoji}
                </div>
                <h3 className={styles.advCardTitle}>{item.title}</h3>
                <p className={styles.advCardText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <div className={styles.processHeading}>
            <span className={styles.eyebrow}>Формат обучения</span>
            <h2 className={styles.processTitle}>Как устроен учебный процесс?</h2>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.processGrid}>
            {[
              { emoji: '🔴', title: 'Настоящие уроки, а не автовебинары', text: 'Никакого заранее записанного контента — только живое интерактивное общение с преподавателем на каждом занятии.' },
              { emoji: '🎥', title: 'Записи всех уроков', text: 'Смотрите и повторяйте материал в любое удобное время, если пропустили занятие.' },
              { emoji: '👥', title: 'Мини-группы', text: 'Всего 5–6 учеников в онлайн-группе для максимальной устной практики.' },
              { emoji: '🗣️', title: 'Разговорная практика', text: 'Каждые 2 недели проводятся полноценные Speaking-сессии.' },
              { emoji: '💻', title: 'Онлайн на удобной платформе', text: 'Все учебные материалы и тесты хранятся в одном личном кабинете.' },
            ].map((step, i) => (
              <div
                key={i}
                className={`${styles.processCard} ${i === 3 ? styles.accentLeft : ''}`}
              >
                <div className={styles.processEmoji}>{step.emoji}</div>
                <h3 className={styles.processCardTitle}>{step.title}</h3>
                {i === 3 ? (
                  <ul className={styles.processList}>
                    <li><i className="fa-solid fa-check"></i><span>Пн / Ср / Пт — по 1 часу</span></li>
                    <li><i className="fa-solid fa-check"></i><span>Вт / Чт — по 1,5 часа</span></li>
                  </ul>
                ) : (
                  <p className={styles.processCardText}>{step.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoSection onOpenDemo={onOpenDemo} />
      <TariffsSection onOpenDemo={onOpenDemo} />
      <ReviewsSection />
      <FaqSection />
    </div>
  );
};

export default DetailPage;
