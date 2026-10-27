import React, { useState } from 'react';
import {
  Compass,
  PlaySquare,
  BookOpen,
  CheckCircle2,
  TrendingUp,
  BookMarked,
  Bookmark,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Shield,
  Activity,
  User,
  Menu,
  X
} from 'lucide-react';
import { useApp } from '../../state/AppContext';
import { NavigationDestination } from '../../types';
import { sounds } from '../../utils/audio';

interface NavItem {
  id: NavigationDestination;
  label: string;
  icon: React.ElementType;
  badge?: string | number;
}

export const Sidebar: React.FC = () => {
  const {
    destination,
    setDestination,
    completedScenarioCount,
    overallStage,
    journalEntries,
    progress,
  } = useApp();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: 'overview', label: 'Overview', icon: Compass },
    { id: 'simulator', label: 'Training Room', icon: PlaySquare, badge: completedScenarioCount > 0 ? `${completedScenarioCount}/32` : undefined },
    { id: 'modules', label: 'Modules', icon: BookOpen },
    { id: 'assessment', label: 'Assessment', icon: CheckCircle2 },
    { id: 'progress', label: 'Progress Report', icon: TrendingUp },
    { id: 'journal', label: 'Decision Journal', icon: BookMarked, badge: journalEntries.length },
    { id: 'saved', label: 'Saved Scenarios', icon: Bookmark, badge: progress.savedScenarioIds.length > 0 ? progress.savedScenarioIds.length : undefined },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'methodology', label: 'Methodology', icon: HelpCircle },
  ];

  const handleNavClick = (dest: NavigationDestination) => {
    sounds.playClick(progress.preferences.soundEnabled);
    setDestination(dest);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Top Header with Hamburger */}
      <div className="md:hidden flex items-center justify-between p-4 bg-room-surface dark:bg-room-darkSurface border-b border-room-border dark:border-room-darkBorder z-30 sticky top-0">
        <button
          onClick={() => handleNavClick('intro')}
          className="flex items-center space-x-2 text-left"
        >
          <div className="w-6 h-6 border-2 border-room-text dark:border-room-darkText flex items-center justify-center">
            <div className="w-2 h-2 bg-room-text dark:bg-room-darkText" />
          </div>
          <span className="font-mono text-sm tracking-widest font-semibold">WHITE ROOM</span>
        </button>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 text-room-text dark:text-room-darkText hover:bg-room-subtle dark:hover:bg-room-darkSubtle rounded transition-colors"
          aria-label="Toggle Navigation"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 animate-fade-in"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Desktop Sidebar & Mobile Drawer Container */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen z-50 md:z-20 bg-room-surface dark:bg-room-darkSurface border-r border-room-border dark:border-room-darkBorder flex flex-col justify-between transition-all duration-300 ease-in-out ${
          isCollapsed ? 'md:w-20' : 'md:w-64'
        } ${
          isMobileOpen ? 'translate-x-0 w-72' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Top Header / Branding */}
        <div>
          <div className="p-5 flex items-center justify-between border-b border-room-border dark:border-room-darkBorder">
            <button
              onClick={() => handleNavClick('intro')}
              className={`flex items-center space-x-3 text-left focus:outline-none ${
                isCollapsed ? 'justify-center w-full' : ''
              }`}
            >
              <div className="w-7 h-7 border-2 border-room-text dark:border-room-darkText flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105">
                <div className="w-2.5 h-2.5 bg-room-text dark:bg-room-darkText" />
              </div>
              {!isCollapsed && (
                <div>
                  <span className="font-mono text-sm font-bold tracking-widest block leading-none">
                    WHITE ROOM
                  </span>
                  <span className="font-mono text-[10px] text-room-muted dark:text-room-darkMuted tracking-wider uppercase">
                    System v1.0
                  </span>
                </div>
              )}
            </button>

            {/* Desktop collapse toggle button */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:flex p-1.5 rounded text-room-muted hover:text-room-text dark:text-room-darkMuted dark:hover:text-room-darkText hover:bg-room-subtle dark:hover:bg-room-darkSubtle transition-colors"
              title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
              aria-label={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-210px)]">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = destination === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center p-2.5 rounded text-sm transition-all relative group ${
                    isActive
                      ? 'bg-room-subtle dark:bg-room-darkSubtle text-room-text dark:text-room-darkText font-medium'
                      : 'text-room-muted dark:text-room-darkMuted hover:text-room-text dark:hover:text-room-darkText hover:bg-room-subtle/60 dark:hover:bg-room-darkSubtle/60'
                  } ${isCollapsed ? 'justify-center' : 'justify-between'}`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <div className="flex items-center space-x-3">
                    <Icon size={18} className="flex-shrink-0" />
                    {!isCollapsed && <span className="tracking-tight">{item.label}</span>}
                  </div>

                  {!isCollapsed && item.badge !== undefined && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-room-border/60 dark:bg-room-darkBorder text-room-text dark:text-room-darkText font-semibold">
                      {item.badge}
                    </span>
                  )}

                  {/* Active Indicator Accent Bar */}
                  {isActive && (
                    <div className="absolute left-0 top-1 bottom-1 w-1 bg-room-text dark:bg-room-darkText rounded-r" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom User Status / Stage Profile */}
        <div className="p-3 border-t border-room-border dark:border-room-darkBorder bg-room-bg/50 dark:bg-room-darkBg/50">
          <div
            className={`flex items-center ${
              isCollapsed ? 'justify-center' : 'space-x-3'
            } p-2 rounded`}
          >
            <div className="w-8 h-8 rounded-full border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface flex items-center justify-center flex-shrink-0">
              <User size={15} className="text-room-text dark:text-room-darkText" />
            </div>

            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium truncate">Candidate #048</span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <Shield size={11} className="text-room-muted dark:text-room-darkMuted" />
                  <span className="text-[11px] text-room-muted dark:text-room-darkMuted font-mono">
                    Stage: <span className="text-room-text dark:text-room-darkText font-semibold">{overallStage}</span>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
