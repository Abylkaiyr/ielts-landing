import { useEffect } from 'react';
import { useView } from './hooks/useView';
import Header from './components/Header/Header';
import NavDrawer from './components/NavDrawer/NavDrawer';
import DemoModal from './components/DemoModal/DemoModal';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import DetailPage from './pages/DetailPage/DetailPage';
import TeacherPage from './pages/TeacherPage/TeacherPage';

const App = () => {
  const {
    currentView,
    isDrawerOpen,
    isDemoOpen,
    pendingSection,
    showView,
    openDrawer,
    closeDrawer,
    openDemo,
    closeDemo,
    clearPendingSection,
  } = useView('main');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <>
      <Header
        onBurgerClick={openDrawer}
        onShowView={showView}
        onOpenDemo={openDemo}
      />

      <NavDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        onShowView={showView}
      />

      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />

      {currentView === 'main' && (
        <MainPage onShowView={showView} onOpenDemo={openDemo} />
      )}

      {currentView === 'detail' && (
        <DetailPage
          onOpenDemo={openDemo}
          pendingSection={pendingSection}
          onSectionScrolled={clearPendingSection}
        />
      )}

      {currentView === 'teacher' && (
        <TeacherPage onOpenDemo={openDemo} />
      )}

      <Footer />
    </>
  );
};

export default App;
