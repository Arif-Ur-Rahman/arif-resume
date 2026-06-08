"use client";

export interface PlotPoint {
  x: number;
  y: number;
  label: string;
  labelPos?: "ne" | "nw" | "se" | "sw" | "n" | "s" | "e" | "w";
}

export interface PlotEdge {
  from: number;
  to: number;
  dashed?: boolean;
  color?: string;
}

interface Props {
  points?: PlotPoint[];
  edges?: PlotEdge[];
  polygon?: number[];           // point-index list → filled shape
  xRange?: [number, number];
  yRange?: [number, number];
  caption?: string;
  width?: number;
  height?: number;
}

const LABEL_OFFSET: Record<string, { dx: number; dy: number }> = {
  ne: { dx:  10, dy: -10 },
  nw: { dx: -10, dy: -10 },
  se: { dx:  10, dy:  14 },
  sw: { dx: -10, dy:  14 },
  n:  { dx:   0, dy: -12 },
  s:  { dx:   0, dy:  15 },
  e:  { dx:  12, dy:   4 },
  w:  { dx: -12, dy:   4 },
};

export function CoordinatePlane({
  points = [],
  edges = [],
  polygon,
  xRange = [-5, 5],
  yRange = [-5, 5],
  caption,
  width = 400,
  height = 360,
}: Props) {
  const PAD = 44;
  const iW = width  - PAD * 2;
  const iH = height - PAD * 2;
  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;

  const tx = (x: number) => PAD + ((x - xMin) / (xMax - xMin)) * iW;
  const ty = (y: number) => PAD + ((yMax - y) / (yMax - yMin)) * iH;

  const xInts = Array.from({ length: xMax - xMin + 1 }, (_, i) => xMin + i);
  const yInts = Array.from({ length: yMax - yMin + 1 }, (_, i) => yMin + i);

  const ox = tx(0); // svg-x of y-axis
  const oy = ty(0); // svg-y of x-axis
  const hasXAxis = yMin <= 0 && 0 <= yMax;
  const hasYAxis = xMin <= 0 && 0 <= xMax;

  return (
    <figure className="rounded-xl overflow-hidden border border-violet-500/15 bg-[#08080f]">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full block"
        aria-label={caption ?? "Coordinate plane diagram"}
      >
        {/* ── grid ── */}
        {xInts.map(x => (
          <line key={`vg${x}`}
            x1={tx(x)} y1={PAD} x2={tx(x)} y2={height - PAD}
            stroke={x === 0 ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.07)"}
            strokeWidth={x === 0 ? 1.5 : 1} />
        ))}
        {yInts.map(y => (
          <line key={`hg${y}`}
            x1={PAD} y1={ty(y)} x2={width - PAD} y2={ty(y)}
            stroke={y === 0 ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.07)"}
            strokeWidth={y === 0 ? 1.5 : 1} />
        ))}

        {/* ── axis arrows ── */}
        {hasXAxis && (
          <>
            <polygon
              points={`${width-PAD+2},${oy} ${width-PAD-6},${oy-3.5} ${width-PAD-6},${oy+3.5}`}
              fill="rgba(255,255,255,0.3)" />
            <text x={width-PAD+6} y={oy+4}
              fill="rgba(255,255,255,0.4)" fontSize="12" fontFamily="serif" fontStyle="italic">x</text>
          </>
        )}
        {hasYAxis && (
          <>
            <polygon
              points={`${ox},${PAD-2} ${ox-3.5},${PAD+6} ${ox+3.5},${PAD+6}`}
              fill="rgba(255,255,255,0.3)" />
            <text x={ox+5} y={PAD-6}
              fill="rgba(255,255,255,0.4)" fontSize="12" fontFamily="serif" fontStyle="italic">y</text>
          </>
        )}

        {/* ── tick marks & numbers ── */}
        {xInts.map(x => x !== 0 && (
          <g key={`xt${x}`}>
            <line x1={tx(x)} y1={(hasXAxis ? oy : PAD) - 4}
                  x2={tx(x)} y2={(hasXAxis ? oy : PAD) + 4}
              stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <text x={tx(x)} y={(hasXAxis ? oy : height - PAD) + 15}
              fill="rgba(255,255,255,0.28)" fontSize="9" textAnchor="middle" fontFamily="monospace">{x}</text>
          </g>
        ))}
        {yInts.map(y => y !== 0 && (
          <g key={`yt${y}`}>
            <line x1={(hasYAxis ? ox : PAD) - 4} y1={ty(y)}
                  x2={(hasYAxis ? ox : PAD) + 4} y2={ty(y)}
              stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <text x={(hasYAxis ? ox : PAD) - 8} y={ty(y) + 4}
              fill="rgba(255,255,255,0.28)" fontSize="9" textAnchor="end" fontFamily="monospace">{y}</text>
          </g>
        ))}
        {hasXAxis && hasYAxis && (
          <text x={ox - 8} y={oy + 14}
            fill="rgba(255,255,255,0.2)" fontSize="9" textAnchor="end" fontFamily="monospace">0</text>
        )}

        {/* ── polygon fill ── */}
        {polygon && polygon.length >= 3 && (
          <polygon
            points={polygon.map(i => `${tx(points[i].x)},${ty(points[i].y)}`).join(" ")}
            fill="rgba(139,92,246,0.13)"
            stroke="none" />
        )}

        {/* ── edges ── */}
        {edges.map((e, idx) => (
          <line key={idx}
            x1={tx(points[e.from].x)} y1={ty(points[e.from].y)}
            x2={tx(points[e.to].x)}   y2={ty(points[e.to].y)}
            stroke={e.color ?? "rgba(167,139,250,0.65)"}
            strokeWidth="1.8"
            strokeDasharray={e.dashed ? "5,4" : undefined} />
        ))}

        {/* ── points ── */}
        {points.map((p, i) => {
          const { dx, dy } = LABEL_OFFSET[p.labelPos ?? "ne"];
          return (
            <g key={i}>
              <circle cx={tx(p.x)} cy={ty(p.y)} r={4.5}
                fill="#8b5cf6" stroke="#08080f" strokeWidth="1.5" />
              <text
                x={tx(p.x) + dx}
                y={ty(p.y) + dy}
                fill="#e9d5ff"
                fontSize="12"
                fontFamily="sans-serif"
                fontWeight="700"
              >{p.label}</text>
            </g>
          );
        })}
      </svg>

      {caption && (
        <figcaption className="text-center text-xs text-muted-foreground/70 py-2 px-4 border-t border-violet-500/10">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
