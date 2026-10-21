import { useState } from 'react';
import type { Certificate } from '../../types';
import styles from './AboutSection.module.less';

const CERTS: Certificate[] = [
  { id: 'kimep', src: 'https://lh3.googleusercontent.com/d/1s-KqOn1GVGCcpBHpaEzUvpenHNWPpE0P=s1000?authuser=0', alt: 'KIMEP University Diploma' },
  { id: 'celta', src: 'https://lh3.googleusercontent.com/d/1Mtur3ZqSIFoXMAQVUmPbl-XCL-W3MzIw=s1000?authuser=0', alt: 'Cambridge CELTA' },
  { id: 'adv_tesol', src: 'https://lh3.googleusercontent.com/d/1hNyeqV_RVTpD7F8rzdjGYkc-Y3sVwXTv=s1000?authuser=0', alt: 'Advanced TESOL Certificate' },
  { id: 'tesol_spec', src: 'https://lh3.googleusercontent.com/d/1cTJHMHzJl42m0NZoX-PHwojdGLq3QOvr=s1000?authuser=0', alt: 'TESOL Specialization' },
  { id: 'tkt', src: 'https://lh3.googleusercontent.com/d/1DpUDP-vJ5x8e0FGuUMfKfu9xVfIeh84s=s1000?authuser=0', alt: 'Teaching Knowledge Test TKT' },
];

const AboutSection = () => {
  const [certIdx, setCertIdx] = useState(0);

  const shift = (dir: number) => {
    setCertIdx((prev) => (prev + dir + CERTS.length) % CERTS.length);
  };

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>О нашем подходе</span>
          <h2 className={styles.title}>Почему выбирают IELTS?</h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div>
              <div className={styles.cardIcon}>
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <h3 className={styles.cardTitle}>Преподаватели с дипломом Harvard</h3>
              <p className={styles.cardText}>
                Высокие стандарты и глубокое знание языка от выпускников топового университета.
              </p>
            </div>
          </div>

          {/* Card 2 — Certs */}
          <div className={styles.card}>
            <div>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <i className="fa-solid fa-award"></i>
                </div>
                <span className={styles.cardBadge}>5 Сертификатов</span>
              </div>
              <h3 className={styles.cardTitle}>Международные сертификаты</h3>
              <p className={styles.cardText}>
                Преподаватели сертифицированы по стандартам CELTA, TESOL и TKT.
              </p>

              <div className={styles.carouselWrap}>
                <div className={styles.carouselTrackOuter}>
                  <div
                    className={styles.carouselTrack}
                    style={{ transform: `translateX(-${certIdx * 100}%)` }}
                  >
                    {CERTS.map((cert) => (
                      <div key={cert.id} className={styles.carouselSlide}>
                        <img src={cert.src} alt={cert.alt} />
                      </div>
                    ))}
                  </div>

                  <button className={`${styles.carouselBtn} ${styles.prev}`} onClick={() => shift(-1)}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                  <button className={`${styles.carouselBtn} ${styles.next}`} onClick={() => shift(1)}>
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>

                <div className={styles.carouselDots}>
                  {CERTS.map((_, i) => (
                    <button
                      key={i}
                      className={`${styles.dot} ${i === certIdx ? styles.active : ''}`}
                      onClick={() => setCertIdx(i)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div>
              <div className={styles.cardIcon}>
                <i className="fa-solid fa-star"></i>
              </div>
              <h3 className={styles.cardTitle}>Колоссальный опыт</h3>
              <p className={styles.cardText}>
                Более 10 лет успешной практики преподавания и эффективной подготовки к IELTS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
