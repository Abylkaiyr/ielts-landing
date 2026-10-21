import type { ViewType } from '../../types';
import styles from './CoursesSection.module.less';

interface CoursesSectionProps {
  onShowView: (view: ViewType) => void;
}

const CoursesSection = ({ onShowView }: CoursesSectionProps) => {
  return (
    <section id="courses" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Направления обучения</span>
          <h2 className={styles.title}>Выберите свой курс</h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div>
              <span className={styles.tag}>Для студентов</span>
              <h3 className={styles.cardTitle}>Сдать IELTS 7+</h3>
              <p className={styles.cardText}>
                Интенсивная программа для тех, кто хочет подтянуть уровень, избавиться от языкового барьера и успешно сдать IELTS.
              </p>
            </div>
            <button className={styles.btn} onClick={() => onShowView('detail')}>
              <span>Узнать подробнее</span>
              <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
            </button>
          </div>

          <div className={styles.card}>
            <div>
              <span className={styles.tag}>Для преподавателей</span>
              <h3 className={styles.cardTitle}>Выйти в Premium-преподавание</h3>
              <p className={styles.cardText}>
                Академия методики: как эффективно строить уроки, развивать личный бренд и выходить на новый уровень дохода.
              </p>
            </div>
            <button className={styles.btn} onClick={() => onShowView('teacher')}>
              <span>Узнать подробнее</span>
              <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
