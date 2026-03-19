import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Timeline.css'

const events = [
    {
        year: '2026',
        title: '5G Innovation Hackathon',
        subtitle: 'Qualified for Pragati Phase',
        description: 'Developed a 5G-powered smart city solution with real-time sensor fusion and edge AI inference.',
        type: 'hackathon',
        side: 'right'
    },
    {
        year: '2025',
        title: 'Autonomous Drone Project',
        subtitle: 'ROS2 + Jetson Nano + PX4',
        description: 'Built a fully autonomous disaster-relief drone with SLAM navigation, real-time object detection, and mission planning.',
        type: 'project',
        side: 'left'
    },
    {
        year: '2025',
        title: 'GPS Ground Marking Robot',
        subtitle: 'ESP32 + GPS + Stepper Motors',
        description: 'Autonomous robot that draws sports ground lines with millimetre GPS precision using ESP32 and stepper motor control.',
        type: 'project',
        side: 'right'
    },
    {
        year: '2024',
        title: 'Smart India Hackathon Nominee',
        subtitle: 'SIH 2024',
        description: 'Selected as a national nominee for Smart India Hackathon. Presented an IoT-based environmental monitoring system.',
        type: 'hackathon',
        side: 'left'
    },
    {
        year: '2024',
        title: 'AQI Monitoring System',
        subtitle: 'ESP32 + MQTT + Dashboard',
        description: 'Built a city-wide air quality monitoring network with distributed IoT nodes and a live React dashboard.',
        type: 'project',
        side: 'right'
    },
    {
        year: '2023',
        title: 'Started Robotics Journey',
        subtitle: 'First Arduino Robot',
        description: 'Built first autonomous line-follower and began exploring ROS, computer vision, and embedded systems.',
        type: 'milestone',
        side: 'left'
    },
]

const typeColors = {
    hackathon: '#f59e0b',
    project: '#38bdf8',
    milestone: '#22c55e',
}

const typeLabels = {
    hackathon: '🏆',
    project: '⚙️',
    milestone: '🚀',
}

export default function Timeline() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="timeline" ref={ref} className="timeline-section">
            <div className="container">
                <p className="section-sub-tag"><span className="tag">Journey</span></p>
                <h2 className="section-title">Experience & <span>Milestones</span></h2>
                <p className="section-subtitle">
                    A timeline of my robotics development journey, hackathons, and key projects.
                </p>

                <div className="timeline">
                    <div className="timeline-line" />
                    {events.map((ev, i) => (
                        <motion.div
                            key={i}
                            className={`timeline-item timeline-item--${ev.side}`}
                            initial={{ opacity: 0, x: ev.side === 'left' ? -60 : 60 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
                        >
                            {/* Center dot */}
                            <div className="timeline-dot" style={{ background: typeColors[ev.type] }}>
                                {typeLabels[ev.type]}
                            </div>

                            <div className="timeline-card glass-card">
                                <div className="tc-header">
                                    <span className="tc-year">{ev.year}</span>
                                    <span className="tc-badge" style={{ color: typeColors[ev.type], borderColor: typeColors[ev.type] + '44', background: typeColors[ev.type] + '14' }}>
                                        {ev.type.charAt(0).toUpperCase() + ev.type.slice(1)}
                                    </span>
                                </div>
                                <h3 className="tc-title">{ev.title}</h3>
                                <p className="tc-subtitle" style={{ color: typeColors[ev.type] }}>{ev.subtitle}</p>
                                <p className="tc-desc">{ev.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
