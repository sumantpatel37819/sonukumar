import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Timeline.css'

const events = [
    {
        year: '2025-Present',
        title: 'Vice President, Robotics Club',
        subtitle: 'NIT Patna',
        description: 'Leading robotics activities, team coordination, technical mentoring, and project execution for club initiatives.',
        type: 'role',
        side: 'right'
    },
    {
        year: 'Jul 2025-Present',
        title: 'TourKaro AI Tourist Guide',
        subtitle: 'Flask, Gemini API, REST APIs',
        description: 'Developing an AI-driven tourist assistant with personalized trip planning, location insights, and an interactive chat interface.',
        type: 'project',
        side: 'left'
    },
    {
        year: 'Mar-Sep 2025',
        title: '5G-Enabled Disaster Response Drone',
        subtitle: 'DoT Sponsored 5G Innovation Hackathon 2025',
        description: 'Built a low-latency aerial monitoring concept with sensors and telemetry for reliable field-level data acquisition.',
        type: 'hackathon',
        side: 'right'
    },
    {
        year: 'Dec 2024-Jun 2025',
        title: 'AI-Powered Transmission-Line Inspection Robot',
        subtitle: 'NIT Patna Research Project',
        description: 'Applied computer vision and ML pipelines to detect cracks, wear, foreign objects, and inspection priorities for power systems.',
        type: 'project',
        side: 'left'
    },
    {
        year: '2025',
        title: 'ANAV Autonomous Drone',
        subtitle: 'ISRO IRoC-U Challenge 2025',
        description: 'Led a drone team that advanced through two rounds while integrating sensors, control logic, and real-time data acquisition.',
        type: 'hackathon',
        side: 'right'
    },
    {
        year: '2024',
        title: 'DroneX & Kisan Drone Certifications',
        subtitle: 'IIT Patna and Skill India',
        description: 'Completed drone-focused certifications including DroneX and Kisan Drone Operator training.',
        type: 'certification',
        side: 'left'
    },
    {
        year: '2023-2025',
        title: 'Technical Team Member, Robotics Club',
        subtitle: 'NIT Patna',
        description: 'Contributed to robotics builds, competitions, embedded systems projects, and club-level technical execution.',
        type: 'role',
        side: 'right'
    },
    {
        year: '2023-2027',
        title: 'B.Tech Electrical Engineering',
        subtitle: 'National Institute of Technology Patna',
        description: 'Studying electrical engineering with project work across power systems, control systems, robotics, and AI applications.',
        type: 'education',
        side: 'left'
    },
    {
        year: '2022',
        title: 'District Rank 3',
        subtitle: 'Intermediate Science, BSEB',
        description: 'Secured 91.2% in senior secondary and ranked third in district in Intermediate Science.',
        type: 'award',
        side: 'right'
    },
]

const typeColors = {
    hackathon: '#f59e0b',
    project: '#38bdf8',
    role: '#22c55e',
    certification: '#fb923c',
    education: '#818cf8',
    award: '#f472b6',
}

const typeLabels = {
    hackathon: 'H',
    project: 'P',
    role: 'R',
    certification: 'C',
    education: 'E',
    award: 'A',
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
                    Resume-backed timeline covering research, hackathons, leadership, certifications, and education.
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
