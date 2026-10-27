import React, { useState } from 'react';
import { SkillScores } from '../../types';

interface RadarChartProps {
  scores: SkillScores;
  baselineScores?: SkillScores;
  size?: number;
  className?: string;
}

interface DimensionMeta {
  key: keyof SkillScores;
  label: string;
  shortLabel: string;
  description: string;
}

const DIMENSIONS: DimensionMeta[] = [
  {
    key: 'emotionalRegulation',
    label: 'Emotional Regulation',
    shortLabel: 'Regulation',
    description: 'Inhibiting initial anger or panic; enforcing deliberate diagnostic pause.',
  },
  {
    key: 'perspectiveTaking',
    label: 'Perspective-Taking',
    shortLabel: 'Perspective',
    description: 'Deconstructing what other parties feel without personalizing their actions.',
  },
  {
    key: 'socialAwareness',
    label: 'Social Awareness',
    shortLabel: 'Social Awareness',
    description: 'Reading unspoken hierarchy, group consensus, and third-party perception.',
  },
  {
    key: 'communication',
    label: 'Precision Communication',
    shortLabel: 'Communication',
    description: 'Delivering boundaries and corrections without unneeded justifications.',
  },
  {
    key: 'conflictResolution',
    label: 'Conflict De-escalation',
    shortLabel: 'De-escalation',
    description: 'Lowering emotional temperature and providing an honorable bridge of retreat.',
  },
  {
    key: 'deliberateDecisionMaking',
    label: 'Strategic Decision-Making',
    shortLabel: 'Strategy',
    description: 'Forecasting second-order fallout and holding long-horizon leverage.',
  },
];

export const RadarChart: React.FC<RadarChartProps> = ({
  scores,
  baselineScores,
  size = 320,
  className = '',
}) => {
  const [activeHover, setActiveHover] = useState<DimensionMeta | null>(null);

  const center = size / 2;
  const radius = center * 0.72;
  const numAxes = DIMENSIONS.length;
  const angleStep = (Math.PI * 2) / numAxes;

  // Grid concentric rings (20%, 40%, 60%, 80%, 100%)
  const rings = [0.2, 0.4, 0.6, 0.8, 1.0];

  // Helper to calculate coordinates from angle and normalized value (0 - 1)
  const getCoordinates = (index: number, normalizedValue: number, r = radius) => {
    // Start from top (- PI / 2)
    const angle = index * angleStep - Math.PI / 2;
    const x = center + r * normalizedValue * Math.cos(angle);
    const y = center + r * normalizedValue * Math.sin(angle);
    return { x, y };
  };

  // Build path string for polygon
  const buildPolygonPath = (scoreObj: SkillScores) => {
    const points = DIMENSIONS.map((dim, i) => {
      const val = Math.max(10, Math.min(100, scoreObj[dim.key] || 50)) / 100;
      const { x, y } = getCoordinates(i, val);
      return `${x},${y}`;
    });
    return points.join(' ');
  };

  const currentPath = buildPolygonPath(scores);
  const baselinePath = baselineScores ? buildPolygonPath(baselineScores) : null;

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
      >
        <defs>
          <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
          </radialGradient>
        </defs>

        {/* Concentric rings */}
        {rings.map((ringVal, rIdx) => {
          const ringPoints = DIMENSIONS.map((_, i) => {
            const { x, y } = getCoordinates(i, ringVal);
            return `${x},${y}`;
          }).join(' ');

          return (
            <polygon
              key={rIdx}
              points={ringPoints}
              fill="none"
              stroke="currentColor"
              className="text-room-border/80 dark:text-room-darkBorder/80"
              strokeWidth={rIdx === rings.length - 1 ? 1.5 : 1}
              strokeDasharray={rIdx < rings.length - 1 ? '3 3' : 'none'}
            />
          );
        })}

        {/* Radial axes from center to each vertex */}
        {DIMENSIONS.map((_, i) => {
          const { x, y } = getCoordinates(i, 1.0);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="currentColor"
              className="text-room-border dark:text-room-darkBorder"
              strokeWidth={1}
            />
          );
        })}

        {/* Optional baseline polygon (dashed outline) */}
        {baselinePath && (
          <polygon
            points={baselinePath}
            fill="none"
            stroke="currentColor"
            className="text-room-muted"
            strokeWidth={1.5}
            strokeDasharray="4 4"
            opacity={0.6}
          />
        )}

        {/* Active score filled polygon */}
        <polygon
          points={currentPath}
          fill="url(#radarFill)"
          stroke="currentColor"
          className="text-room-text dark:text-room-darkText transition-all duration-700 ease-out"
          strokeWidth={2}
        />

        {/* Vertex points & labels */}
        {DIMENSIONS.map((dim, i) => {
          const val = Math.max(10, Math.min(100, scores[dim.key] || 50)) / 100;
          const pointCoord = getCoordinates(i, val);
          const labelCoord = getCoordinates(i, 1.25);
          const isHovered = activeHover?.key === dim.key;

          return (
            <g key={dim.key} className="cursor-pointer" onMouseEnter={() => setActiveHover(dim)} onMouseLeave={() => setActiveHover(null)}>
              {/* Point Dot */}
              <circle
                cx={pointCoord.x}
                cy={pointCoord.y}
                r={isHovered ? 5.5 : 3.5}
                className="fill-room-text dark:fill-room-darkText stroke-room-surface dark:stroke-room-darkSurface transition-all"
                strokeWidth={2}
              />

              {/* Axis Label */}
              <text
                x={labelCoord.x}
                y={labelCoord.y}
                textAnchor="middle"
                dominantBaseline="central"
                className={`font-mono text-[10px] sm:text-[11px] transition-colors ${
                  isHovered
                    ? 'fill-room-text dark:fill-room-darkText font-bold underline'
                    : 'fill-room-muted dark:fill-room-darkMuted'
                }`}
              >
                {dim.shortLabel} ({scores[dim.key]}%)
              </text>
            </g>
          );
        })}
      </svg>

      {/* Explanatory Context Tooltip underneath */}
      <div className="w-full mt-2 min-h-[48px] p-2.5 rounded-lg border border-room-border/70 dark:border-room-darkBorder/70 bg-room-surface/80 dark:bg-room-darkSurface/80 text-center text-xs animate-fade-in">
        {activeHover ? (
          <div>
            <span className="font-semibold text-room-text dark:text-room-darkText font-mono mr-1">
              {activeHover.label} ({scores[activeHover.key]}%):
            </span>
            <span className="text-room-muted">{activeHover.description}</span>
          </div>
        ) : (
          <span className="text-room-muted text-[11px] font-mono">
            Hover over any vertex to inspect the tactical dimension and score rationale.
          </span>
        )}
      </div>
    </div>
  );
};
