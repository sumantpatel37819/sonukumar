import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiCpu, FiTarget, FiZap, FiExternalLink, FiYoutube } from 'react-icons/fi'
import profilePic from '../../Images/ProfilePic.jpg'
import './About.css'

const stats = [
    { icon: <FiCode />, value: '15+', label: 'Projects Built' },
    { icon: <FiCpu />, value: '20+', label: 'Technologies' },
    { icon: <FiTarget />, value: 'SIH', label: 'Hackathon 2024' },
    { icon: <FiZap />, value: '3+', label: 'Years Tinkering' },
]

const focuses = [
    'Autonomous drones & UAV systems',
    'Robotic navigation with SLAM',
    'Computer vision & AI perception',
    'IoT & embedded monitoring systems',
    'Hardware-software integration',
]

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    const variants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1, y: 0,
            transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
        })
    }

    return (
        <section id="about" ref={ref}>
            <div className="container">
                <motion.p
                    className="section-sub-tag"
                    variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
                >
                    <span className="tag">Who I Am</span>
                </motion.p>
                <motion.h2
                    className="section-title"
                    variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.5}
                >
                    About <span>Me</span>
                </motion.h2>
                <div className="divider" style={{ marginBottom: '64px' }} />

                <div className="about-layout">
                    {/* Avatar */}
                    <motion.div
                        className="about-avatar-wrap"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <div className="avatar-ring">
                            <div className="avatar-circle">
                                <img src={profilePic} alt="Sonu Kumar profile" className="avatar-photo" />
                            </div>
                        </div>
                        <div className="avatar-badge">
                            <FiCpu size={16} />
                            Robotics Dev
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                    >
                        <h3 className="about-heading">
                            Building intelligent machines that combine AI, sensors & embedded systems
                        </h3>
                        <p className="about-bio">
                            I'm a passionate robotics developer with hands-on experience designing and
                            building autonomous systems from the ground up. My expertise spans from low-level
                            firmware on microcontrollers like ESP32 and Raspberry Pi, all the way to
                            high-level AI algorithms for perception and decision-making.
                        </p>
                        <p className="about-bio">
                            I enjoy working at the intersection of <strong>hardware and software</strong> —
                            where a line of code directly moves a motor or makes a drone navigate around
                            an obstacle.
                        </p>

                        <p className="about-focuses-title">My projects focus on:</p>
                        <ul className="about-focuses">
                            {focuses.map((item, i) => (
                                <motion.li
                                    key={i}
                                    variants={variants}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    custom={i * 0.1 + 0.8}
                                >
                                    <span className="focus-dot" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        {/* Website Links */}
                        <div className="about-links">
                            <a
                                href="https://quadraticautomation.onrender.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="about-link-btn about-link-primary"
                            >
                                <FiExternalLink size={16} />
                                Quadratic Automation
                            </a>
                            <a
                                href="https://www.youtube.com/@QuadraticAutomation"
                                target="_blank"
                                rel="noreferrer"
                                className="about-link-btn about-link-youtube"
                            >
                                <FiYoutube size={16} />
                                YouTube Channel
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <div className="about-stats">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            className="stat-card glass-card"
                            variants={variants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            custom={i * 0.1 + 1.2}
                        >
                            <div className="stat-icon">{s.icon}</div>
                            <div className="stat-number">{s.value}</div>
                            <div className="stat-text">{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
