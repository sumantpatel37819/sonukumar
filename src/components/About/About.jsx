import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiCpu, FiTarget, FiZap, FiExternalLink, FiYoutube } from 'react-icons/fi'
import profilePic from '../../Images/ProfilePic.jpg'
import './About.css'

const stats = [
    { icon: <FiCode />, value: '15+', label: 'Projects Built' },
    { icon: <FiCpu />, value: 'B.Tech', label: 'EE, NIT Patna' },
    { icon: <FiTarget />, value: 'IRoC-U', label: 'ISRO Challenge 2025' },
    { icon: <FiZap />, value: 'VP', label: 'Robotics Club' },
]

const focuses = [
    'AI-powered transmission-line inspection and predictive maintenance',
    'Autonomous drones for inspection and disaster response',
    'Computer vision pipelines with OpenCV, ML, and sensor data',
    'Embedded systems using Arduino, ESP32, Raspberry Pi, and Jetson Nano',
    'Flask, REST APIs, and AI web apps such as TourKaro',
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
                            Robotics + AI
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
                            Building intelligent machines that connect AI, power systems, sensors and embedded control
                        </h3>
                        <p className="about-bio">
                            I'm Sonu Kumar, a B.Tech Electrical Engineering student at National Institute
                            of Technology Patna. My work sits at the intersection of robotics, AI/ML,
                            computer vision, IoT, and power systems.
                        </p>
                        <p className="about-bio">
                            I have worked on an <strong>AI-powered transmission-line inspection robot</strong>,
                            5G-enabled disaster response drone concepts, ANAV autonomous drone for ISRO
                            IRoC-U 2025, gesture-controlled robotics, and ML web applications. I also serve
                            as Vice President of the Robotics Club at NIT Patna.
                        </p>

                        <p className="about-focuses-title">My resume highlights include:</p>
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
