import { useState, useCallback, useEffect, useRef } from 'react';
import styles from './ReviewsSection.module.less';

const REVIEWS = [
  "https://lh3.googleusercontent.com/d/17O26upE6WVUSuawp7FNTRXls4AXYcrMf=s1000?authuser=0",
  "https://lh3.googleusercontent.com/d/1KjINAqgsG_qnKg1o3nZbWi0TVFV1gzrc=s1000?authuser=0",
  "https://lh3.googleusercontent.com/d/1YOddCXi--qTWCZ2b6ZmGsx-GbLy8wdFl=s1000?authuser=0",
  "https://lh3.googleusercontent.com/d/1bcSMwx2RFh6mp1ibX9EW2V3W8TqnAXZq=s1000?authuser=0",
  "https://lh3.googleusercontent.com/d/1o7mPWwXW4b0HXNOYE-JDiL7Qa2PL1Qcw=s1000?authuser=0",
  "https://lh3.googleusercontent.com/d/15suddOhQBkFhx4i_t7wLlq9Rjg8Xx0XZ=s1000?authuser=0",
  "https://lh3.googleusercontent.com/d/1Z_BFh5B9aS6J9xS5YTJa2pPIR64KnB-5=s1000?authuser=0",
  "https://lh3.googleusercontent.com/d/1snCvbxsMIu4OyWlFjDtsqxafv-fO804c=s1000?authuser=0",
  "https://lh3.googleusercontent.com/d/1Y6JwXFHuR1P78NiUx4DdoJgfukksjnI-=s1000?authuser=0",
  "https://lh3.googleusercontent.com/d/1knlgU-kDsjEQj7wkejQQ6orpF3XJBvoj=s1000?authuser=0",
  "https://lh3.googleusercontent.com/d/1mVo2SW2YCFeUYikkxKml8e8r3he9ij3o=s1000?authuser=0",
];

function getVisibleCards() {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

const ReviewsSection = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(getVisibleCards());
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, REVIEWS.length - visibleCards);

  const shift = useCallback((dir: number) => {
    setIndex(prev => {
      const next = prev + dir;
      if (next < 0) return maxIndex;
      if (next > maxIndex) return 0;
      return next;
    });
  }, [maxIndex]);

  useEffect(() => {
    const handleResize = () => {
      const cards = getVisibleCards();
      setVisibleCards(cards);
      setIndex(prev => Math.min(prev, Math.max(0, REVIEWS.length - cards)));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (trackRef.current) {
      const pct = index * (100 / visibleCards);
      trackRef.current.style.transform = `translateX(-${pct}%)`;
    }
  }, [index, visibleCards]);

  const numPages = maxIndex + 1;

  return (
    <section id="reviews-section" className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.heading}>
          <span className={styles.eyebrow}>РЕАЛЬНЫЕ РЕЗУЛЬТАТЫ И ЧАТЫ</span>
          <h2 className={styles.title}>Отзывы наших студентов</h2>
          <p className={styles.hint}>Нажмите на любой скриншот, чтобы открыть отзыв в полном размере</p>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.carouselWrap}>
          <div className={styles.viewport}>
            <div ref={trackRef} className={styles.track}>
              {REVIEWS.map((src, i) => (
                <div
                  key={i}
                  className={styles.slide}
                  style={{ width: `${100 / visibleCards}%` }}
                  onClick={() => setModalSrc(src)}
                >
                  <div className={styles.card}>
                    <img src={src} alt={`Отзыв студента ${i + 1}`} className={styles.cardImg} />
                    <div className={styles.overlay}></div>
                    <div className={styles.zoomBadge}>
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                      <span>Увеличить</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={`${styles.navBtn} ${styles.navBtnLeft}`}
            onClick={() => shift(-1)}
            aria-label="Предыдущий отзыв"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            className={`${styles.navBtn} ${styles.navBtnRight}`}
            onClick={() => shift(1)}
            aria-label="Следующий отзыв"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        <div className={styles.dots}>
          {Array.from({ length: numPages }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Страница ${i + 1}`}
            />
          ))}
        </div>

      </div>

      {modalSrc && (
        <div className={styles.modal} onClick={() => setModalSrc(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setModalSrc(null)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img src={modalSrc} alt="Отзыв студента" className={styles.modalImg} />
          </div>
        </div>
      )}
    </section>
  );
};

export default ReviewsSection;
