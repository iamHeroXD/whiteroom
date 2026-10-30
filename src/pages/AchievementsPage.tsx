import React from 'react';
import {
  Award,
  Shield,
  Sparkles,
  CheckCircle2,
  Lock,
  PlaySquare,
  Zap,
  BookMarked,
  Compass,
  Brain,
  Flame,
} from 'lucide-react';
import { useApp } from '../state/AppContext';
import { ACHIEVEMENTS } from '../data/achievements';

export const AchievementsPage: React.FC = () => {
  const { progress, levelInfo, setDestination } = useApp();

  const unlockedSet = new Set(progress.unlockedAchievements || []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PlaySquare': return PlaySquare;
      case 'Shield': return Shield;
      case 'Brain': return Brain;
      case 'Zap': return Zap;
      case 'BookMarked': return BookMarked;
      case 'Sparkles': return Sparkles;
      case 'Compass': return Compass;
      case 'Award': return Award;
      default: return Award;
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in pb-16">
      {/* Header */}
      <div className="border-b border-room-border dark:border-room-darkBorder pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-room-muted block mb-1">
            CANDIDATE RECOGNITION
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-room-text dark:text-room-darkText tracking-tight">
            Accolades & Mastery
          </h2>
          <p className="text-sm text-room-muted dark:text-room-darkMuted mt-1 max-w-xl">
            Track operational milestones, tactical composure certifications, and experience level.
          </p>
        </div>

        {/* Level & Streak Stats */}
        <div className="flex items-center space-x-3 font-mono text-xs">
          <div className="p-3 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface flex items-center space-x-2">
            <Flame size={16} className="text-amber-500" />
            <div>
              <span className="text-[10px] text-room-muted block">TRAINING STREAK</span>
              <span className="font-bold text-room-text dark:text-room-darkText">{progress.streak || 1} Days Active</span>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface flex items-center space-x-2">
            <Award size={16} className="text-emerald-500" />
            <div>
              <span className="text-[10px] text-room-muted block">TOTAL XP</span>
              <span className="font-bold text-room-text dark:text-room-darkText">{progress.xp || 0} XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Level Progress Banner */}
      <div className="p-6 sm:p-8 rounded-xl border border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-room-muted">
              OPERATOR LEVEL {levelInfo.level}
            </span>
            <h3 className="text-xl sm:text-2xl font-light text-room-text dark:text-room-darkText">
              {levelInfo.title}
            </h3>
          </div>
          <span className="font-mono text-xs text-room-muted">
            {levelInfo.currentLevelXp} / {levelInfo.nextLevelXp} XP to Next Rank
          </span>
        </div>

        {/* XP Progress Bar */}
        <div className="w-full h-2.5 rounded-full bg-room-subtle dark:bg-room-darkSubtle overflow-hidden">
          <div
            className="h-full bg-room-text dark:bg-room-darkText rounded-full transition-all duration-700 ease-out"
            style={{ width: `${levelInfo.progressPercent}%` }}
          />
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-room-text dark:text-room-darkText">
            Tactical Accolades ({unlockedSet.size} / {ACHIEVEMENTS.length} Unlocked)
          </h3>
          <span className="text-xs font-mono text-room-muted">
            Earn accolades through simulation drills & flash reactions
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map(ach => {
            const isUnlocked = unlockedSet.has(ach.id);
            const Icon = getIcon(ach.icon);

            return (
              <div
                key={ach.id}
                className={`p-5 rounded-xl border transition-all flex items-start space-x-4 ${
                  isUnlocked
                    ? 'border-room-border dark:border-room-darkBorder bg-room-surface dark:bg-room-darkSurface shadow-sm'
                    : 'border-room-border/50 dark:border-room-darkBorder/40 bg-room-bg/60 dark:bg-room-darkBg/60 opacity-50'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isUnlocked
                      ? 'border border-room-border dark:border-room-darkBorder bg-room-subtle dark:bg-room-darkSubtle text-room-text dark:text-room-darkText'
                      : 'border border-room-border/40 text-room-muted'
                  }`}
                >
                  {isUnlocked ? <Icon size={22} /> : <Lock size={20} />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-semibold text-room-text dark:text-room-darkText truncate">
                      {ach.title}
                    </h4>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-room-border/40 text-room-muted flex-shrink-0">
                      +{ach.xpReward} XP
                    </span>
                  </div>

                  <p className="text-xs text-room-muted mt-1 leading-relaxed">
                    {ach.description}
                  </p>

                  <div className="mt-2.5 flex items-center space-x-1.5 text-[10px] font-mono">
                    {isUnlocked ? (
                      <span className="inline-flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                        <CheckCircle2 size={12} />
                        <span>ACHIEVED</span>
                      </span>
                    ) : (
                      <span className="text-room-muted">LOCKED</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
