import React, { ReactNode } from 'react';
import { Sidebar } from '../navigation/Sidebar';
import { TopBar } from '../navigation/TopBar';
import { CommandPalette } from '../navigation/CommandPalette';
import { OnboardingModal } from '../ui/OnboardingModal';
import { useApp } from '../../state/AppContext';

export const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { destination, isOnboardingOpen, setIsOnboardingOpen } = useApp();

  // If on landing/intro page, allow full bleed without the dashboard sidebar
  if (destination === 'intro') {
    return (
      <div className="min-h-screen bg-room-bg text-room-text dark:bg-room-darkBg dark:text-room-darkText selection:bg-neutral-800 selection:text-white">
        <CommandPalette />
        <OnboardingModal isOpen={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
        <main>{children}</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-room-bg text-room-text dark:bg-room-darkBg dark:text-room-darkText antialiased">
      <CommandPalette />
      <OnboardingModal isOpen={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        <TopBar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
};
