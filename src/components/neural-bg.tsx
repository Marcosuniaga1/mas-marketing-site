const NODES = [
  { cx: 80, cy: 60, r: 3 },
  { cx: 200, cy: 40, r: 2 },
  { cx: 350, cy: 80, r: 4 },
  { cx: 500, cy: 30, r: 2.5 },
  { cx: 650, cy: 70, r: 3 },
  { cx: 780, cy: 45, r: 2 },
  { cx: 920, cy: 85, r: 3.5 },
  { cx: 120, cy: 160, r: 2.5 },
  { cx: 300, cy: 180, r: 3 },
  { cx: 450, cy: 140, r: 2 },
  { cx: 600, cy: 170, r: 4 },
  { cx: 750, cy: 150, r: 2.5 },
  { cx: 880, cy: 190, r: 3 },
  { cx: 60, cy: 260, r: 2 },
  { cx: 220, cy: 280, r: 3.5 },
  { cx: 400, cy: 250, r: 2.5 },
  { cx: 550, cy: 270, r: 3 },
  { cx: 700, cy: 240, r: 2 },
  { cx: 840, cy: 290, r: 4 },
  { cx: 960, cy: 260, r: 2.5 },
  { cx: 150, cy: 340, r: 3 },
  { cx: 330, cy: 360, r: 2 },
  { cx: 480, cy: 330, r: 3.5 },
  { cx: 630, cy: 350, r: 2.5 },
  { cx: 800, cy: 370, r: 3 },
  { cx: 950, cy: 340, r: 2 },
  { cx: 100, cy: 420, r: 2.5 },
  { cx: 260, cy: 440, r: 3 },
  { cx: 420, cy: 410, r: 2 },
  { cx: 580, cy: 430, r: 3.5 },
  { cx: 740, cy: 450, r: 2.5 },
  { cx: 900, cy: 420, r: 3 },
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [0, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12],
  [1, 8], [2, 9], [3, 10], [4, 11], [5, 12],
  [7, 13], [13, 14], [14, 15], [15, 16], [16, 17], [17, 18], [18, 19],
  [8, 14], [9, 15], [10, 16], [11, 17], [12, 18],
  [13, 20], [14, 21], [15, 22], [16, 23], [17, 24], [18, 25],
  [20, 21], [21, 22], [22, 23], [23, 24], [24, 25],
  [20, 26], [21, 27], [22, 28], [23, 29], [24, 30], [25, 31],
  [26, 27], [27, 28], [28, 29], [29, 30], [30, 31],
];

export function NeuralBg({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1024 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="node-glow">
          <stop offset="0%" stopColor="rgba(212,175,55,0.6)" />
          <stop offset="100%" stopColor="rgba(212,175,55,0)" />
        </radialGradient>
      </defs>

      {/* edges */}
      {EDGES.map(([a, b], i) => (
        <line
          key={`e${i}`}
          x1={NODES[a].cx}
          y1={NODES[a].cy}
          x2={NODES[b].cx}
          y2={NODES[b].cy}
          stroke="rgba(212,175,55,0.10)"
          strokeWidth="0.7"
        />
      ))}

      {/* nodes */}
      {NODES.map((n, i) => (
        <g key={`n${i}`}>
          {n.r >= 3 && (
            <circle
              cx={n.cx}
              cy={n.cy}
              r={n.r * 4}
              fill="url(#node-glow)"
              className="neural-pulse"
              style={{ animationDelay: `${(i * 0.8) % 5}s` }}
            />
          )}
          <circle
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="rgba(212,175,55,0.45)"
            className={n.r >= 3.5 ? "neural-pulse" : ""}
            style={n.r >= 3.5 ? { animationDelay: `${(i * 1.2) % 4}s` } : undefined}
          />
          <circle
            cx={n.cx}
            cy={n.cy}
            r={n.r * 0.4}
            fill="rgba(212,175,55,0.9)"
          />
        </g>
      ))}
    </svg>
  );
}

export function CircuitSeparator({ className = "" }: { className?: string }) {
  return (
    <div className={`circuit-separator ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-6"
      >
        <line x1="0" y1="12" x2="200" y2="12" stroke="rgba(212,175,55,0.15)" strokeWidth="1" />
        <line x1="200" y1="12" x2="220" y2="4" stroke="rgba(212,175,55,0.15)" strokeWidth="1" />
        <line x1="220" y1="4" x2="380" y2="4" stroke="rgba(212,175,55,0.20)" strokeWidth="1" />
        <circle cx="380" cy="4" r="2.5" fill="rgba(212,175,55,0.35)" />
        <line x1="380" y1="4" x2="400" y2="12" stroke="rgba(212,175,55,0.15)" strokeWidth="1" />
        <line x1="400" y1="12" x2="560" y2="12" stroke="rgba(212,175,55,0.12)" strokeWidth="1" />
        <circle cx="560" cy="12" r="2" fill="rgba(212,175,55,0.25)" />
        <line x1="560" y1="12" x2="580" y2="20" stroke="rgba(212,175,55,0.15)" strokeWidth="1" />
        <line x1="580" y1="20" x2="740" y2="20" stroke="rgba(212,175,55,0.18)" strokeWidth="1" />
        <circle cx="740" cy="20" r="3" fill="rgba(212,175,55,0.30)" />
        <line x1="740" y1="20" x2="760" y2="12" stroke="rgba(212,175,55,0.15)" strokeWidth="1" />
        <line x1="760" y1="12" x2="920" y2="12" stroke="rgba(212,175,55,0.12)" strokeWidth="1" />
        <circle cx="920" cy="12" r="2" fill="rgba(212,175,55,0.25)" />
        <line x1="920" y1="12" x2="940" y2="6" stroke="rgba(212,175,55,0.15)" strokeWidth="1" />
        <line x1="940" y1="6" x2="1200" y2="6" stroke="rgba(212,175,55,0.10)" strokeWidth="1" />
      </svg>
    </div>
  );
}
