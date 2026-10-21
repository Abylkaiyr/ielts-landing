import type { VideoCard } from '../../types';
import styles from './VideoSection.module.less';

const VIDEOS: VideoCard[] = [
  {
    youtubeId: 'BKe8jApKsx8',
    tag: 'IELTS Listening',
    title: 'Идеальный слух не спасёт, если вы не знаете формат IELTS',
    description: 'Разбор ловушек Listening. Посмотри фрагмент урока.',
  },
  {
    youtubeId: 'gvz9-qbreCE',
    tag: 'IELTS Speaking',
    title: 'Как перестать задыхаться от страха на Speaking?',
    description: 'Показываем, как быстро подбирать аргументы без паники, пауз и неуверенности в словах.',
  },
  {
    youtubeId: '3H_GdCY-hoU',
    tag: 'IELTS Writing Task 2',
    title: 'Каша в голове при написании эссе?',
    description: 'Пошаговый алгоритм написания логичного и связного академического эссе для высокого балла.',
  },
];

const TAG_STYLES: Record<string, string> = {
  'IELTS Listening': styles.tagAmber,
  'IELTS Speaking': styles.tagSky,
  'IELTS Writing Task 2': styles.tagPurple,
};

interface VideoSectionProps {
  onOpenDemo: () => void;
}

const VideoSection = ({ onOpenDemo }: VideoSectionProps) => {
  return (
    <section id="video-showcase" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <div className={styles.eyebrowWrap}>
            <i className="fa-solid fa-circle-play"></i>
            <span>Загляните на наши уроки</span>
          </div>
          <h2 className={styles.title}>Посмотрите, как проходят наши уроки</h2>
          <p className={styles.subtitle}>
            Нажмите на любой из роликов ниже, чтобы открыть видеозапись живого урока прямо на YouTube.
          </p>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.grid}>
          {VIDEOS.map((v) => (
            <a
              key={v.youtubeId}
              href={`https://youtu.be/${v.youtubeId}`}
              target="_blank"
              rel="noreferrer"
              className={styles.videoCard}
            >
              <div>
                <div className={styles.thumb}>
                  <img
                    src={`https://img.youtube.com/vi/${v.youtubeId}/maxresdefault.jpg`}
                    alt={v.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`;
                    }}
                  />
                  <div className={styles.thumbOverlay}></div>
                  <div className={styles.playBtn}>
                    <span><i className="fa-solid fa-play"></i></span>
                  </div>
                </div>

                <div className={styles.cardMeta}>
                  <span className={`${styles.cardTag} ${TAG_STYLES[v.tag] ?? styles.tagAmber}`}>
                    {v.tag}
                  </span>
                  <span className={styles.yt}>
                    <i className="fa-brands fa-youtube"></i> YouTube
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{v.title}</h3>
                <p className={styles.cardDesc}>{v.description}</p>
              </div>

              <div className={styles.cardFooter}>
                <span>Смотреть видеоурок</span>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaText}>
            <h4>Хотите личную оценку вашего уровня?</h4>
            <p>Приходите на пробный урок и пройдите экспресс-тестирование с преподавателем.</p>
          </div>
          <button className={styles.ctaBtn} onClick={onOpenDemo}>
            <i className="fa-solid fa-play" style={{ color: '#fbbf24' }}></i>
            <span>Хочу на пробный урок</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
