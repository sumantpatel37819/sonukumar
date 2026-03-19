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
        category: 'Robotics',
        color: '#38bdf8',
        icon: <FiCpu />,
        skills: [
            { name: 'ROS / ROS2', level: 90 },
            { name: 'SLAM', level: 85 },
            { name: 'PX4', level: 80 },
            { name: 'MAVROS', level: 78 },
            { name: 'Gazebo', level: 75 },
        ]
    },
    {
        category: 'Embedded Systems',
        color: '#f59e0b',
        icon: <SiArduino />,
        skills: [
            { name: 'ESP32', level: 92 },
            { name: 'Raspberry Pi', level: 88 },
            { name: 'Jetson Nano', level: 82 },
            { name: 'Arduino', level: 90 },
            { name: 'STM32', level: 70 },
        ]
    },
    {
        category: 'Computer Vision',
        color: '#22c55e',
        icon: <FiCamera />,
        skills: [
            { name: 'OpenCV', level: 88 },
            { name: 'YOLO', level: 82 },
            { name: 'MediaPipe', level: 78 },
            { name: 'TensorFlow', level: 70 },
            { name: 'PyTorch', level: 65 },
        ]
    },
    {
        category: 'Programming',
        color: '#818cf8',
        icon: <SiPython />,
        skills: [
            { name: 'Python', level: 92 },
            { name: 'C++', level: 85 },
            { name: 'C', level: 80 },
            { name: 'JavaScript', level: 72 },
            { name: 'TypeScript', level: 65 },
        ]
    },
    {
        category: 'IoT & Wireless',
        color: '#f472b6',
        icon: <FiWifi />,
        skills: [
            { name: 'MQTT', level: 85 },
            { name: 'ESP-NOW', level: 80 },
            { name: 'LoRa', level: 72 },
            { name: 'Bluetooth', level: 78 },
            { name: 'WiFi Protocols', level: 82 },
        ]
    },
    {
        category: 'Tools',
        color: '#fb923c',
        icon: <FiTool />,
        skills: [
            { name: 'Git / GitHub', level: 90 },
            { name: 'Linux', level: 88 },
            { name: 'MATLAB', level: 72 },
            { name: 'Docker', level: 70 },
            { name: 'KiCad', level: 65 },
        ]
    },
]

const techIcons = [
    { icon: <SiRos size={32} />, label: 'ROS' },
    { icon: <SiPython size={32} />, label: 'Python' },
    { icon: <SiCplusplus size={32} />, label: 'C++' },
    { icon: <SiOpencv size={32} />, label: 'OpenCV' },
    { icon: <SiLinux size={32} />, label: 'Linux' },
    { icon: <SiGit size={32} />, label: 'Git' },
    { icon: <SiDocker size={32} />, label: 'Docker' },
    { icon: <SiArduino size={32} />, label: 'Arduino' },
    { icon: <SiRaspberrypi size={32} />, label: 'RPi' },
    { icon: <SiJavascript size={32} />, label: 'JS' },
    { icon: <SiTypescript size={32} />, label: 'TS' },
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
                    A comprehensive toolkit spanning firmware, AI, robotics middleware, and full-stack IoT.
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

                {/* Tech icon cloud */}
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
