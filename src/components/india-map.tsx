/* Stylized SVG map of India with state dots for service centres. */
import { COVERED_STATES } from "@/data/service-centres";

const STATE_DOTS: Record<string, [number, number]> = {
  "Gujarat": [120, 280],
  "Rajasthan": [160, 200],
  "Madhya Pradesh": [240, 290],
  "Maharashtra": [200, 350],
  "Karnataka": [225, 430],
  "Telangana": [275, 380],
  "Tamil Nadu": [260, 490],
  "Andhra Pradesh": [285, 430],
  "Uttar Pradesh": [285, 200],
  "Bihar": [355, 230],
  "Punjab": [195, 130],
  "Haryana": [220, 165],
};

export function IndiaMap({ highlight = true }: { highlight?: boolean }) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
      <svg viewBox="0 0 480 600" className="size-full">
        {/* Stylized India silhouette — simplified */}
        <path
          d="M180 80 L230 70 L270 100 L300 90 L330 120 L320 160 L350 180 L370 220 L350 260 L380 300 L370 340 L340 360 L330 400 L300 430 L290 480 L270 530 L240 560 L210 540 L195 500 L180 470 L160 440 L150 400 L130 380 L110 340 L100 300 L110 260 L130 220 L140 180 L150 140 L165 110 Z"
          fill={highlight ? "oklch(0.962 0.003 250)" : "oklch(0.94 0.005 250)"}
          stroke="oklch(0.323 0.038 250)"
          strokeWidth="1.5"
        />
        {/* Highlight covered states with subtle red wash */}
        {highlight && COVERED_STATES.map((s) =>
          STATE_DOTS[s] ? (
            <circle key={s + "-glow"} cx={STATE_DOTS[s][0]} cy={STATE_DOTS[s][1]} r="22" fill="oklch(0.554 0.181 27.5 / 0.12)" />
          ) : null
        )}
        {COVERED_STATES.map((s) =>
          STATE_DOTS[s] ? (
            <g key={s}>
              <circle cx={STATE_DOTS[s][0]} cy={STATE_DOTS[s][1]} r="6" fill="oklch(0.554 0.181 27.5)">
                <animate attributeName="r" values="6;9;6" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx={STATE_DOTS[s][0]} cy={STATE_DOTS[s][1]} r="3" fill="white" />
              <title>{s}</title>
            </g>
          ) : null
        )}
      </svg>
    </div>
  );
}
