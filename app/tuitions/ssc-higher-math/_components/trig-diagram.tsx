"use client";

/* ─── shared palette ──────────────────────────────────────── */
const LINE   = "rgba(167,139,250,0.8)";
const GROUND = "rgba(255,255,255,0.18)";
const FILL   = "rgba(139,92,246,0.11)";
const LABEL  = "#e9d5ff";
const DIM    = "rgba(255,255,255,0.55)";
const ARC    = "rgba(251,191,36,0.9)";
const RA     = "rgba(255,255,255,0.45)";
const DASH   = "5,4";

type L = Partial<{
  theta: string; theta2: string;
  opp: string; adj: string; hyp: string;
  height: string; dist: string; dist2: string;
  obj: string;
}>;

/* ════════════════════════════════════════════════════════════
   1. RIGHT TRIANGLE   A──B  with right angle at B, θ at A
   ════════════════════════════════════════════════════════════ */
function RightTriangleSVG({ l }: { l: L }) {
  // A=(45,190) θ  B=(235,190) right angle  C=(235,60)
  return (
    <svg viewBox="0 0 280 230" className="w-full block">
      <polygon points="45,190 235,190 235,60" fill={FILL} stroke="none" />

      {/* sides */}
      <line x1="45" y1="190" x2="235" y2="190" stroke={LINE} strokeWidth="2" />
      <line x1="235" y1="190" x2="235" y2="60"  stroke={LINE} strokeWidth="2" />
      <line x1="235" y1="60"  x2="45"  y2="190" stroke={LINE} strokeWidth="2" />

      {/* right-angle square at B */}
      <polyline points="225,190 225,180 235,180"
        fill="none" stroke={RA} strokeWidth="1.5" />

      {/* θ arc at A  (≈34°) */}
      <path d="M 67,190 A 22,22 0 0,1 59,177"
        fill="none" stroke={ARC} strokeWidth="2" />

      {/* side labels */}
      <text x="117" y="112" fill={LABEL} fontSize="13" fontFamily="serif" fontStyle="italic" textAnchor="middle">
        {l.hyp ?? "h"}
      </text>
      <text x="249" y="130" fill={LABEL} fontSize="13" fontFamily="serif" fontStyle="italic">
        {l.opp ?? "p"}
      </text>
      <text x="140" y="213" fill={LABEL} fontSize="13" fontFamily="serif" fontStyle="italic" textAnchor="middle">
        {l.adj ?? "b"}
      </text>

      {/* angle label */}
      <text x="75" y="183" fill={ARC} fontSize="13" fontWeight="700" fontFamily="serif" fontStyle="italic">
        {l.theta ?? "θ"}
      </text>

      {/* vertex labels */}
      <text x="22"  y="195" fill={DIM} fontSize="12" fontWeight="700" fontFamily="sans-serif">A</text>
      <text x="240" y="207" fill={DIM} fontSize="12" fontWeight="700" fontFamily="sans-serif">B</text>
      <text x="240" y="58"  fill={DIM} fontSize="12" fontWeight="700" fontFamily="sans-serif">C</text>
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   2. ANGLE OF ELEVATION   observer on ground → top of object
   ════════════════════════════════════════════════════════════ */
function ElevationSVG({ l }: { l: L }) {
  // T=(75,58) top, O=(75,183) base, P=(290,183) observer
  return (
    <svg viewBox="0 0 350 220" className="w-full block">
      {/* ground */}
      <line x1="40" y1="183" x2="320" y2="183" stroke={GROUND} strokeWidth="1.5" />
      {/* tower */}
      <line x1="75" y1="183" x2="75" y2="58" stroke={LINE} strokeWidth="2.5" />
      {/* line of sight */}
      <line x1="290" y1="183" x2="75" y2="58" stroke={LINE} strokeWidth="1.8" strokeDasharray={DASH} />

      {/* θ arc at P (elevation angle ≈ 29°) */}
      <path d="M 268,183 A 22,22 0 0,1 271,172"
        fill="none" stroke={ARC} strokeWidth="2" />
      <text x="254" y="178" fill={ARC} fontSize="13" fontWeight="700" fontFamily="serif" fontStyle="italic">
        {l.theta ?? "θ"}
      </text>

      {/* height brace */}
      <line x1="45" y1="58"  x2="55" y2="58"  stroke={DIM} strokeWidth="1" />
      <line x1="45" y1="183" x2="55" y2="183" stroke={DIM} strokeWidth="1" />
      <line x1="50" y1="58"  x2="50" y2="183" stroke={DIM} strokeWidth="1" strokeDasharray="3,3" />
      <text x="28" y="126" fill={LABEL} fontSize="13" fontFamily="serif" fontStyle="italic">
        {l.height ?? "h"}
      </text>

      {/* distance label */}
      <text x="182" y="200" fill={LABEL} fontSize="13" fontFamily="serif" fontStyle="italic" textAnchor="middle">
        {l.dist ?? "d"}
      </text>

      {/* object labels */}
      <text x="80" y="54"   fill={DIM} fontSize="12" fontWeight="700" fontFamily="sans-serif">{l.obj ?? "T"}</text>
      <text x="57" y="200"  fill={DIM} fontSize="12" fontWeight="700" fontFamily="sans-serif">O</text>
      <text x="290" y="200" fill={DIM} fontSize="12" fontWeight="700" fontFamily="sans-serif">P</text>

      {/* observer dot */}
      <circle cx="290" cy="183" r="3.5" fill={LINE} />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   3. ANGLE OF DEPRESSION   observer at top looking down
   ════════════════════════════════════════════════════════════ */
function DepressionSVG({ l }: { l: L }) {
  // T=(75,58) observer/top, O=(75,183) base, P=(290,183) object
  return (
    <svg viewBox="0 0 350 220" className="w-full block">
      {/* ground */}
      <line x1="40" y1="183" x2="320" y2="183" stroke={GROUND} strokeWidth="1.5" />
      {/* tower */}
      <line x1="75" y1="58" x2="75" y2="183" stroke={LINE} strokeWidth="2.5" />
      {/* horizontal reference from T */}
      <line x1="75" y1="58" x2="270" y2="58" stroke={GROUND} strokeWidth="1" strokeDasharray={DASH} />
      {/* line of sight (T → P) */}
      <line x1="75" y1="58" x2="290" y2="183" stroke={LINE} strokeWidth="1.8" strokeDasharray={DASH} />

      {/* θ arc at T (depression from horizontal downward) */}
      <path d="M 97,58 A 22,22 0 0,1 93,69"
        fill="none" stroke={ARC} strokeWidth="2" />
      <text x="101" y="66" fill={ARC} fontSize="13" fontWeight="700" fontFamily="serif" fontStyle="italic">
        {l.theta ?? "θ"}
      </text>

      {/* height brace */}
      <line x1="45" y1="58"  x2="55" y2="58"  stroke={DIM} strokeWidth="1" />
      <line x1="45" y1="183" x2="55" y2="183" stroke={DIM} strokeWidth="1" />
      <line x1="50" y1="58"  x2="50" y2="183" stroke={DIM} strokeWidth="1" strokeDasharray="3,3" />
      <text x="28" y="126" fill={LABEL} fontSize="13" fontFamily="serif" fontStyle="italic">
        {l.height ?? "h"}
      </text>

      {/* distance label */}
      <text x="182" y="200" fill={LABEL} fontSize="13" fontFamily="serif" fontStyle="italic" textAnchor="middle">
        {l.dist ?? "d"}
      </text>

      {/* labels */}
      <text x="80" y="54"   fill={DIM} fontSize="12" fontWeight="700" fontFamily="sans-serif">T</text>
      <text x="57" y="200"  fill={DIM} fontSize="12" fontWeight="700" fontFamily="sans-serif">O</text>
      <text x="292" y="200" fill={DIM} fontSize="12" fontWeight="700" fontFamily="sans-serif">P</text>

      {/* target dot */}
      <circle cx="290" cy="183" r="3.5" fill={LINE} />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   4. APPROACH  — two angles as observer moves closer
      T(top), O(base), P₁(far, angle α), P₂(near, angle β)
   ════════════════════════════════════════════════════════════ */
function ApproachSVG({ l }: { l: L }) {
  // T=(80,55), O=(80,183), P₂=(190,183), P₁=(305,183)
  return (
    <svg viewBox="0 0 370 220" className="w-full block">
      {/* ground */}
      <line x1="40" y1="183" x2="335" y2="183" stroke={GROUND} strokeWidth="1.5" />
      {/* tower */}
      <line x1="80" y1="183" x2="80" y2="55" stroke={LINE} strokeWidth="2.5" />
      {/* line of sight from P₁ */}
      <line x1="305" y1="183" x2="80" y2="55" stroke={LINE} strokeWidth="1.5" strokeDasharray={DASH} />
      {/* line of sight from P₂ */}
      <line x1="190" y1="183" x2="80" y2="55" stroke={LINE} strokeWidth="1.5" strokeDasharray={DASH} />

      {/* α arc at P₁ (≈30°) */}
      <path d="M 283,183 A 22,22 0 0,1 285,173"
        fill="none" stroke={ARC} strokeWidth="2" />
      <text x="269" y="178" fill={ARC} fontSize="13" fontWeight="700" fontFamily="serif" fontStyle="italic">
        {l.theta ?? "α"}
      </text>

      {/* β arc at P₂ (≈49°) */}
      <path d="M 172,183 A 18,18 0 0,1 175,171"
        fill="none" stroke={ARC} strokeWidth="2" />
      <text x="159" y="178" fill={ARC} fontSize="13" fontWeight="700" fontFamily="serif" fontStyle="italic">
        {l.theta2 ?? "β"}
      </text>

      {/* height brace */}
      <line x1="50" y1="55"  x2="60" y2="55"  stroke={DIM} strokeWidth="1" />
      <line x1="50" y1="183" x2="60" y2="183" stroke={DIM} strokeWidth="1" />
      <line x1="55" y1="55"  x2="55" y2="183" stroke={DIM} strokeWidth="1" strokeDasharray="3,3" />
      <text x="32" y="124" fill={LABEL} fontSize="13" fontFamily="serif" fontStyle="italic">
        {l.height ?? "h"}
      </text>

      {/* distance labels */}
      <text x="135" y="200" fill={LABEL} fontSize="12" fontFamily="serif" fontStyle="italic" textAnchor="middle">
        {l.dist ?? "x"}
      </text>
      <text x="247" y="200" fill={LABEL} fontSize="12" fontFamily="serif" fontStyle="italic" textAnchor="middle">
        {l.dist2 ?? "d"}
      </text>

      {/* vertex labels */}
      <text x="84"  y="51"  fill={DIM} fontSize="12" fontWeight="700" fontFamily="sans-serif">T</text>
      <text x="62"  y="200" fill={DIM} fontSize="12" fontWeight="700" fontFamily="sans-serif">O</text>
      <text x="184" y="200" fill={DIM} fontSize="12" fontWeight="700" fontFamily="sans-serif">P₂</text>
      <text x="300" y="200" fill={DIM} fontSize="12" fontWeight="700" fontFamily="sans-serif">P₁</text>

      {/* observer dots */}
      <circle cx="190" cy="183" r="3" fill={LINE} />
      <circle cx="305" cy="183" r="3" fill={LINE} />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   PUBLIC EXPORT
   ════════════════════════════════════════════════════════════ */
export type TrigDiagramType = "right-triangle" | "elevation" | "depression" | "approach";

export function TrigDiagram({
  type,
  labels = {},
  caption,
}: {
  type: TrigDiagramType;
  labels?: L;
  caption?: string;
}) {
  const diagram =
    type === "right-triangle" ? <RightTriangleSVG l={labels} /> :
    type === "elevation"      ? <ElevationSVG     l={labels} /> :
    type === "depression"     ? <DepressionSVG    l={labels} /> :
                                <ApproachSVG      l={labels} />;

  return (
    <figure className="rounded-xl overflow-hidden border border-violet-500/15 bg-[#08080f]">
      {diagram}
      {caption && (
        <figcaption className="text-center text-xs text-muted-foreground/70 py-2 px-4 border-t border-violet-500/10">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
