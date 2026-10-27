import React from 'react';
import { useApp } from './state/AppContext';
import { AppLayout } from './components/layout/AppLayout';
import { IntroPage } from './pages/IntroPage';
import { OverviewPage } from './pages/OverviewPage';
import { ModulesPage } from './pages/ModulesPage';
import { ModuleDetailPage } from './pages/ModuleDetailPage';
import { SimulatorPage } from './pages/SimulatorPage';
import { AssessmentPage } from './pages/AssessmentPage';
import { ProgressPage } from './pages/ProgressPage';
import { JournalPage } from './pages/JournalPage';
import { SavedPage } from './pages/SavedPage';
import { SettingsPage } from './pages/SettingsPage';
import { MethodologyPage } from './pages/MethodologyPage';

export const AppContent: React.FC = () => {
  const { destination } = useApp();

  const renderCurrentPage = () => {
    switch (destination) {
      case 'intro':
        return <IntroPage />;
      case 'overview':
        return <OverviewPage />;
      case 'modules':
        return <ModulesPage />;
      case 'module-detail':
        return <ModuleDetailPage />;
      case 'simulator':
        return <SimulatorPage />;
      case 'assessment':
        return <AssessmentPage />;
      case 'progress':
        return <ProgressPage />;
      case 'journal':
        return <JournalPage />;
      case 'saved':
        return <SavedPage />;
      case 'settings':
        return <SettingsPage />;
      case 'methodology':
        return <MethodologyPage />;
      default:
        return <OverviewPage />;
    }
  };

  return <AppLayout>{renderCurrentPage()}</AppLayout>;
};

export const App: React.FC = () => {
  return <AppContent />;
};

export default App;
