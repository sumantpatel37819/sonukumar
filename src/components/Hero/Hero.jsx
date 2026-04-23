import { useCallback } from 'react'
import { motion } from 'framer-motion'
import Particles from '@tsparticles/react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { HiOutlineDocumentDownload } from 'react-icons/hi'
import { Link } from 'react-scroll'
import DroneAnimation from './DroneAnimation'
import './Hero.css'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: 'easeOut' } })
}

export default function Hero() {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => setInit(true))
    }, [])

    const particlesLoaded = useCallback(async () => { }, [])

    return (
        <section id="hero" className="hero-section">
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    className="hero-particles"
                    options={{
                        background: { color: { value: 'transparent' } },
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onHover: { enable: true, mode: 'repulse' },
                                resize: true,
                            },
                            modes: { repulse: { distance: 80, duration: 0.4 } },
                        },
                        particles: {
                            color: { value: ['#38bdf8', '#22c55e', '#818cf8'] },
                            links: {
                                color: '#38bdf8',
                                distance: 140,
                                enable: true,
                                opacity: 0.15,
                                width: 1,
                            },
                            move: {
                                direction: 'none',
                                enable: true,
                                outModes: { default: 'bounce' },
                                speed: 1.2,
                            },
                            number: { density: { enable: true, area: 900 }, value: 80 },
                            opacity: { value: 0.4 },
                            shape: { type: 'circle' },
                            size: { value: { min: 1, max: 3 } },
                        },
                        detectRetina: true,
                    }}
                />
            )}

            {/* Grid overlay */}
            <div className="hero-grid-overlay" />

            <div className="container hero-container">
                {/* Left — Text */}
                <div className="hero-left">
                    <motion.div
                        className="hero-badge"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.1}
                    >
                        <span className="badge-dot" />
                        B.Tech EE @ NIT Patna | Robotics Club VP
                    </motion.div>

                    <motion.h1
                        className="hero-name"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.2}
                    >
                        Sonu <span className="gradient-text">Kumar</span>
                    </motion.h1>

                    <motion.div
                        className="hero-roles"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.35}
                    >
                        <TypewriterRoles />
                    </motion.div>

                    <motion.p
                        className="hero-bio"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.5}
                    >
                        I build <strong>robotics and AI systems</strong> across autonomous drones,
                        transmission-line inspection robots, computer vision pipelines, embedded control,
                        and ML-powered web applications.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.65}
                    >
                        <Link to="projects" smooth duration={600} offset={-80}>
                            <button className="btn btn-primary">View Projects</button>
                        </Link>
                        <a href={`${import.meta.env.BASE_URL}resume-robotics.pdf`} download className="btn btn-outline">
                            <HiOutlineDocumentDownload size={18} /> Robotics Resume
                        </a>
                        <a href={`${import.meta.env.BASE_URL}resume-ai-ml.pdf`} download className="btn btn-outline">
                            <HiOutlineDocumentDownload size={18} /> AI/ML Resume
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sonu-kumar-3b227b290/"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-ghost hero-social"
                        >
                            <FiLinkedin size={18} />
                        </a>
                        <a
                            href="https://github.com/sumantpatel37819"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-ghost hero-social"
                        >
                            <FiGithub size={18} />
                        </a>
                    </motion.div>
                </div>

                {/* Right — Drone animation */}
                <motion.div
                    className="hero-right"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                >
                    <DroneAnimation />
                </motion.div>
            </div>

            {/* Scroll arrow */}
            <motion.div
                className="hero-scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <Link to="about" smooth duration={600} offset={-80}>
                    <FiArrowDown className="scroll-arrow" size={22} />
                </Link>
            </motion.div>
        </section>
    )
}

function TypewriterRoles() {
    const roles = ['Robotics Developer', 'AI/ML Developer', 'Embedded Systems Builder', 'Autonomous Drone Engineer']
    const [index, setIndex] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const current = roles[index % roles.length]
        let timeout
        if (!deleting && displayed.length < current.length) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
        } else if (!deleting && displayed.length === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2000)
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
        } else if (deleting && displayed.length === 0) {
            setDeleting(false)
            setIndex(i => i + 1)
        }
        return () => clearTimeout(timeout)
    }, [displayed, deleting, index])

    return (
        <p className="hero-role">
            {displayed}<span className="cursor">|</span>
        </p>
    )
}
