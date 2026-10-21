import type { ViewType } from '../../types';
import HeroSection from '../../sections/HeroSection/HeroSection';
import AboutSection from '../../sections/AboutSection/AboutSection';
import CoursesSection from '../../sections/CoursesSection/CoursesSection';
import styles from './MainPage.module.less';

interface MainPageProps {
  onShowView: (view: ViewType) => void;
  onOpenDemo: () => void;
}

const MainPage = ({ onShowView, onOpenDemo }: MainPageProps) => {
  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={styles.page}>
      <HeroSection onScrollToCourses={scrollToCourses} onOpenDemo={onOpenDemo} />
      <AboutSection />
      <CoursesSection onShowView={onShowView} />
    </main>
  );
};

export default MainPage;
