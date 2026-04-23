import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
    SiRos, SiPython, SiCplusplus, SiJavascript, SiTypescript,
    SiLinux, SiGit, SiDocker, SiOpencv, SiArduino, SiRaspberrypi
} from 'react-icons/si'
import { FiCpu, FiWifi, FiCamera, FiTool } from 'react-icons/fi'
import './Skills.css'

const skillGroups = [
    {
        category: 'Robotics & UAV Systems',
        color: '#38bdf8',
        icon: <FiCpu />,
        skills: [
            { name: 'Autonomous Drones', level: 88 },
            { name: 'Transmission-Line Inspection', level: 86 },
            { name: 'Sensor Integration', level: 88 },
            { name: 'Control Systems', level: 82 },
            { name: 'Field Telemetry', level: 84 },
        ]
    },
    {
        category: 'Embedded & IoT',
        color: '#f59e0b',
        icon: <SiArduino />,
        skills: [
            { name: 'Arduino Uno/Mega', level: 92 },
            { name: 'ESP32 / NodeMCU8266', level: 90 },
            { name: 'Raspberry Pi', level: 86 },
            { name: 'NVIDIA Jetson Nano', level: 78 },
            { name: 'Sensors & Motor Control', level: 88 },
        ]
    },
    {
        category: 'AI/ML & Computer Vision',
        color: '#22c55e',
        icon: <FiCamera />,
        skills: [
            { name: 'OpenCV', level: 88 },
            { name: 'TensorFlow / PyTorch', level: 76 },
            { name: 'scikit-learn / Keras', level: 78 },
            { name: 'Anomaly Detection', level: 80 },
            { name: 'NLP & Chatbots', level: 72 },
        ]
    },
    {
        category: 'Programming & Web',
        color: '#818cf8',
        icon: <SiPython />,
        skills: [
            { name: 'Python', level: 92 },
            { name: 'C / C++', level: 85 },
            { name: 'Java', level: 72 },
            { name: 'SQL', level: 72 },
            { name: 'Flask, REST APIs, JavaScript', level: 78 },
        ]
    },
    {
        category: 'Data Science',
        color: '#f472b6',
        icon: <FiWifi />,
        skills: [
            { name: 'Pandas / NumPy', level: 82 },
            { name: 'Matplotlib / Seaborn', level: 78 },
            { name: 'Probability & Statistics', level: 78 },
            { name: 'Linear Algebra', level: 76 },
            { name: 'Calculus for ML', level: 72 },
        ]
    },
    {
        category: 'Leadership & Tools',
        color: '#fb923c',
        icon: <FiTool />,
        skills: [
            { name: 'Git / GitHub', level: 90 },
            { name: 'Linux', level: 84 },
            { name: 'MATLAB', level: 72 },
            { name: 'Project Management', level: 86 },
            { name: 'Team Leadership', level: 88 },
        ]
    },
]

const techIcons = [
    { icon: <SiPython size={32} />, label: 'Python' },
    { icon: <SiCplusplus size={32} />, label: 'C++' },
    { icon: <SiOpencv size={32} />, label: 'OpenCV' },
    { icon: <SiArduino size={32} />, label: 'Arduino' },
    { icon: <SiRaspberrypi size={32} />, label: 'RPi' },
    { icon: <SiRos size={32} />, label: 'ROS' },
    { icon: <SiLinux size={32} />, label: 'Linux' },
    { icon: <SiGit size={32} />, label: 'Git' },
    { icon: <SiJavascript size={32} />, label: 'JS' },
    { icon: <SiTypescript size={32} />, label: 'TS' },
    { icon: <SiDocker size={32} />, label: 'Docker' },
]

export default function Skills() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="skills" ref={ref} className="skills-section">
            <div className="container">
                <p className="section-sub-tag"><span className="tag">What I Know</span></p>
                <h2 className="section-title">Technical <span>Skills</span></h2>
                <p className="section-subtitle">
                    Resume-backed skills across robotics hardware, AI/ML, computer vision, data science, and web APIs.
                </p>

                <div className="skills-grid">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            key={gi}
                            className="skill-card glass-card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: gi * 0.1, duration: 0.5 }}
                        >
                            <div className="skill-card-header" style={{ borderBottomColor: group.color + '33' }}>
                                <span className="skill-cat-icon" style={{ color: group.color }}>{group.icon}</span>
                                <h3 className="skill-cat-name">{group.category}</h3>
                            </div>
                            <ul className="skill-list">
                                {group.skills.map((skill, si) => (
                                    <li key={si} className="skill-item">
                                        <div className="skill-meta">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-pct" style={{ color: group.color }}>{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar-track">
                                            <motion.div
                                                className="skill-bar-fill"
                                                style={{ background: group.color }}
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${skill.level}%` } : {}}
                                                transition={{ delay: gi * 0.1 + si * 0.06 + 0.3, duration: 0.7, ease: 'easeOut' }}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="tech-icons">
                    {techIcons.map((t, i) => (
                        <motion.div
                            key={i}
                            className="tech-icon-item"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                        >
                            <div className="tech-icon-wrap">{t.icon}</div>
                            <span>{t.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
