import type { Tariff } from '../../types';
import styles from './TariffsSection.module.less';

const TARIFFS: Tariff[] = [
  {
    name: 'General English',
    price: '',
    period: 'PRE-INTERMEDIATE',
    features: [
      '24 интерактивных занятия в мини-группах',
      '2 проверочных теста с разбором ошибок',
      'Speaking-сессии каждые 2 недели',
    ],
  },
  {
    name: 'IELTS Target 6.0–6.5',
    price: '',
    period: 'IELTS B1+',
    features: [
      '24 интенсивных занятия с Гарвардским стандартом',
      '2 полноценных Mock-теста IELTS',
      'Разбор критериев оценки Writing & Speaking',
    ],
    highlighted: true,
  },
  {
    name: 'IELTS Target 7.0+',
    price: '',
    period: 'IELTS B2+',
    features: [
      '24 углублённых занятия по всем 4 модулям',
      '3 полноценных Mock-теста IELTS с детальным анализом',
      'Персональный фидбэк по каждому эссе и Speaking',
    ],
  },
];

const DESCRIPTIONS: Record<string, string> = {
  'General English': 'Комплексное развитие ключевых навыков (Listening, Reading, Writing, Speaking) и закладка фундамента для IELTS.',
  'IELTS Target 6.0–6.5': 'Системная подготовка по всем 4 модулям экзамена для успешного достижения балла 6.0 и выше.',
  'IELTS Target 7.0+': 'Продвинутый интенсив для получения высшего балла 7.0+ и уверенного владения академическим английским.',
};

interface TariffsSectionProps {
  onOpenDemo: () => void;
}

const TariffsSection = ({ onOpenDemo }: TariffsSectionProps) => {
  return (
    <section id="tariffs" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Программы обучения</span>
          <h2 className={styles.title}>Выберите подходящий формат</h2>
          <p className={styles.subtitle}>Индивидуальный подбор группы после тестирования уровня</p>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.grid}>
          {TARIFFS.map((t) => (
            <div key={t.name} className={`${styles.card} ${t.highlighted ? styles.popular : ''}`}>
              {t.highlighted && (
                <div className={styles.popularBadge}>Самый популярный</div>
              )}

              <div>
                <div className={`${styles.cardTop} ${t.highlighted ? styles.pt : ''}`}>
                  <span className={styles.tag}>{t.period}</span>
                  <span className={styles.duration}>
                    <i className="fa-regular fa-clock"></i>2 месяца
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{t.name}</h3>
                <p className={styles.cardText}>{DESCRIPTIONS[t.name]}</p>

                <div className={styles.features}>
                  {t.features.map((f) => (
                    <div key={f} className={styles.feature}>
                      <i className="fa-solid fa-check"></i>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className={styles.btn} onClick={onOpenDemo}>
                Записаться на урок
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TariffsSection;
