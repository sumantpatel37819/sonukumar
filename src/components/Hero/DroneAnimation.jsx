/* DroneAnimation: pure CSS SVG-based animated drone */
import './DroneAnimation.css'

export default function DroneAnimation() {
    return (
        <div className="drone-wrapper">
            <div className="drone-glow-ring" />
            <div className="drone-float">
                <svg
                    viewBox="0 0 300 260"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drone-svg"
                >
                    {/* Body */}
                    <rect x="110" y="110" width="80" height="40" rx="10" fill="url(#bodyGrad)" />
                    {/* Arm TL */}
                    <line x1="110" y1="115" x2="60" y2="75" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                    {/* Arm TR */}
                    <line x1="190" y1="115" x2="240" y2="75" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                    {/* Arm BL */}
                    <line x1="110" y1="145" x2="60" y2="185" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                    {/* Arm BR */}
                    <line x1="190" y1="145" x2="240" y2="185" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />

                    {/* Motor mounts */}
                    <circle cx="60" cy="75" r="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                    <circle cx="240" cy="75" r="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                    <circle cx="60" cy="185" r="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                    <circle cx="240" cy="185" r="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />

                    {/* Propellers — will be rotated via CSS */}
                    <g className="prop prop-tl" transform="translate(60,75)">
                        <ellipse cx="-22" cy="0" rx="22" ry="5" fill="#38bdf8" opacity="0.7" />
                        <ellipse cx="22" cy="0" rx="22" ry="5" fill="#38bdf8" opacity="0.7" />
                    </g>
                    <g className="prop prop-tr" transform="translate(240,75)">
                        <ellipse cx="-22" cy="0" rx="22" ry="5" fill="#22c55e" opacity="0.7" />
                        <ellipse cx="22" cy="0" rx="22" ry="5" fill="#22c55e" opacity="0.7" />
                    </g>
                    <g className="prop prop-bl" transform="translate(60,185)">
                        <ellipse cx="-22" cy="0" rx="22" ry="5" fill="#22c55e" opacity="0.7" />
                        <ellipse cx="22" cy="0" rx="22" ry="5" fill="#22c55e" opacity="0.7" />
                    </g>
                    <g className="prop prop-br" transform="translate(240,185)">
                        <ellipse cx="-22" cy="0" rx="22" ry="5" fill="#38bdf8" opacity="0.7" />
                        <ellipse cx="22" cy="0" rx="22" ry="5" fill="#38bdf8" opacity="0.7" />
                    </g>

                    {/* Camera dome */}
                    <ellipse cx="150" cy="155" rx="14" ry="10" fill="#0ea5e9" opacity="0.9" />
                    {/* LED */}
                    <circle cx="150" cy="118" r="5" fill="#22c55e" />
                    <circle cx="150" cy="118" r="5" fill="#22c55e" className="led-pulse" />

                    {/* Signal waves */}
                    <path d="M150 90 Q170 75 150 60" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
                    <path d="M150 90 Q130 75 150 60" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />

                    <defs>
                        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#1e3a5f" />
                            <stop offset="100%" stopColor="#0f172a" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Real-time stats overlay */}
                <div className="drone-stats">
                    <div className="stat-item">
                        <span className="stat-label">ALT</span>
                        <span className="stat-value">+127m</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">SPD</span>
                        <span className="stat-value">12 m/s</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">BAT</span>
                        <span className="stat-value green">87%</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">GPS</span>
                        <span className="stat-value green">LOCK</span>
                    </div>
                </div>
            </div>

            {/* Shadow */}
            <div className="drone-shadow" />
        </div>
    )
}
