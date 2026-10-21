import { useState, useCallback } from 'react';
import type { ViewType } from '../types';

export const useView = (initial: ViewType = 'main') => {
  const [currentView, setCurrentView] = useState<ViewType>(initial);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [pendingSection, setPendingSection] = useState<string | null>(null);

  const showView = useCallback((view: ViewType, section?: string) => {
    setCurrentView(view);
    if (section) {
      setPendingSection(section);
    }
    setIsDrawerOpen(false);
  }, []);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);
  const openDemo = useCallback(() => setIsDemoOpen(true), []);
  const closeDemo = useCallback(() => setIsDemoOpen(false), []);
  const clearPendingSection = useCallback(() => setPendingSection(null), []);

  return {
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
  };
};
