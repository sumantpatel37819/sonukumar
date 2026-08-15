import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    FiArrowLeft,
    FiMoon,
    FiSun,
    FiGithub,
    FiExternalLink,
    FiMapPin,
    FiCpu,
    FiDatabase,
    FiGlobe,
    FiSearch,
    FiNavigation,
    FiMessageSquare,
    FiUser,
    FiChevronLeft,
    FiChevronRight,
    FiActivity,
    FiLayout,
    FiServer,
    FiCompass,
    FiVideo,
    FiShield
} from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import './QuadFalconPage.css'

// Import images directly for Vite bundler
import hardwareImg from '../data/Quad-Falcon-images/hardware.jpg'
import dashboardImg from '../data/Quad-Falcon-images/DashBoard.png'
import orbDemoImg from '../data/Quad-Falcon-images/ORB demo.png'
import testingImg1 from '../data/Quad-Falcon-images/IMG20260414223521 (1).jpg'
import mappingImg from '../data/Quad-Falcon-images/IMG20260427000410.jpg'
import obstacleImg from '../data/Quad-Falcon-images/IMG20260427000827.jpg'
import deliveryImg from '../data/Quad-Falcon-images/IMG20260427000833.jpg'

export default function QuadFalconPage() {
    const { isLight, toggleTheme } = useTheme()
    const [currentSlide, setCurrentSlide] = useState(0)
    const [activeTab, setActiveTab] = useState('hardware')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const slides = [
        {
            img: dashboardImg,
            title: 'Operator Dashboard & Live Telemetry',
            desc: 'React and Vite-based dashboard providing manual WASD movement controls, mode switching, real-time telemetry display, battery status, and indoor map mapping.'
        },
        {
            img: hardwareImg,
            title: 'AGV Hardware Architecture',
            desc: 'A robust hardware platform utilizing Raspberry Pi 4B as the high-level controller and an Arduino Mega 2560 for direct motor, servo, LiDAR, and IMU control.'
        },
        {
            img: orbDemoImg,
            title: 'Visual Odometry & Feature Tracking',
            desc: 'Utilizes an ESP32-CAM (or onboard camera) with OpenCV ORB feature extraction to support local spatial context and mapping.'
        },
        {
            img: testingImg1,
            title: 'Testing & Navigation Phase',
            desc: 'Live testing of the vehicle in semi-outdoor campus environments, validating motor drivers and steering response under load.'
        },
        {
            img: mappingImg,
            title: 'Outdoor Environment Mapping',
            desc: 'GPS waypoint navigation with an onboard NEO-6M module, keeping outdoor tracking in an absolute north-referenced frame.'
        },
        {
            img: obstacleImg,
            title: 'Obstacle Detection in Action',
            desc: 'TF-Luna LiDAR integrations to sense forward distances, allowing the firmware to intercept and halt driving commands before a collision occurs.'
        },
        {
            img: deliveryImg,
            title: 'Office Document Delivery Run',
            desc: 'Executing an indoor delivery run using IMU dead reckoning to navigate office corridors without requiring global GPS fixes.'
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [slides.length])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <div className="quad-page">
            <header className="quad-topbar">
                <div className="quad-topbar-inner">
                    <div className="quad-topbar-actions">
                        <Link to="/" className="quad-back-btn">
                            <FiArrowLeft size={16} />
                            Back to Portfolio
                        </Link>
                        <button
                            type="button"
                            className="theme-toggle-btn"
                            onClick={toggleTheme}
                            aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
                            title={isLight ? 'Dark mode' : 'Light mode'}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                color: 'inherit'
                            }}
                        >
                            {isLight ? <FiMoon size={18} /> : <FiSun size={18} />}
                        </button>
                    </div>
                    <span className="quad-label-tag" style={{ marginBottom: 0 }}>Project Detail</span>
                </div>
            </header>

            <main className="quad-main">
                {/* Hero Section */}
                <section className="quad-hero">
                    <div className="quad-hero-left">
                        <span className="quad-label-tag">Robotics & Autonomous Systems</span>
                        <h1 className="quad-title">Quad-Falcon: <span>Autonomous Ground Vehicle</span></h1>
                        <p className="quad-lead">
                            A dual-layer AGV system designed for indoor navigation, campus monitoring, and office document delivery. 
                            Features a React dashboard, Python FastAPI high-level controller, and an Arduino Mega low-level controller integrating GPS, IMU, and LiDAR.
                        </p>
                        <div className="quad-hero-actions">
                            <a href="https://github.com/sumantpatel37819/Quad-Falcon" target="_blank" rel="noreferrer" className="btn btn-outline">
                                <FiGithub size={16} /> GitHub Repository
                            </a>
                            <span className="quad-status-badge quad-status--progress">
                                <FiActivity size={14} style={{ marginRight: '6px' }} /> In Progress
                            </span>
                        </div>
                    </div>

                    <div className="quad-meta-box">
                        <article className="quad-stat-card">
                            <div className="quad-stat-icon"><FiCpu /></div>
                            <div className="quad-stat-info">
                                <small>Hardware Stack</small>
                                <strong>Raspberry Pi 4B + Arduino Mega</strong>
                            </div>
                        </article>

                        <article className="quad-stat-card">
                            <div className="quad-stat-icon"><FiCompass /></div>
                            <div className="quad-stat-info">
                                <small>Navigation Sensors</small>
                                <strong>GPS NEO-6M, LiDAR, IMU</strong>
                            </div>
                        </article>

                        <article className="quad-stat-card">
                            <div className="quad-stat-icon"><FiServer /></div>
                            <div className="quad-stat-info">
                                <small>Software Stack</small>
                                <strong>FastAPI, WebSocket, React, C++</strong>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Screenshot Slider */}
                <section className="quad-slider-panel">
                    <h2><FiLayout size={20} style={{ color: '#22d3ee' }} /> Project Screenshots & Features</h2>
                    <div className="quad-slider-wrapper">
                        <div className="quad-slide-container">
                            <img
                                src={slides[currentSlide].img}
                                alt={slides[currentSlide].title}
                                className="quad-slide-img"
                            />
                        </div>

                        <button className="quad-slider-btn quad-slider-btn--prev" onClick={prevSlide} aria-label="Previous slide">
                            <FiChevronLeft size={22} />
                        </button>
                        <button className="quad-slider-btn quad-slider-btn--next" onClick={nextSlide} aria-label="Next slide">
                            <FiChevronRight size={22} />
                        </button>
                    </div>

                    <div className="quad-slide-details" style={{ padding: '20px 24px', background: 'var(--page-card-soft)', borderRadius: '14px', marginTop: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <h3 className="quad-slide-title" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--page-accent-cyan)', marginBottom: '8px' }}>{slides[currentSlide].title}</h3>
                        <p className="quad-slide-desc" style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.65', margin: 0 }}>{slides[currentSlide].desc}</p>
                    </div>

                    <div className="quad-slider-indicators">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`quad-indicator ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </section>

                {/* Tabbed details */}
                <section className="quad-grid-layout">
                    <div className="quad-panel">
                        <div className="quad-tabs-header">
                            <button
                                className={`quad-tab-btn ${activeTab === 'hardware' ? 'active' : ''}`}
                                onClick={() => setActiveTab('hardware')}
                            >
                                Control Layers
                            </button>
                            <button
                                className={`quad-tab-btn ${activeTab === 'navigation' ? 'active' : ''}`}
                                onClick={() => setActiveTab('navigation')}
                            >
                                Navigation Modes
                            </button>
                            <button
                                className={`quad-tab-btn ${activeTab === 'safety' ? 'active' : ''}`}
                                onClick={() => setActiveTab('safety')}
                            >
                                Safety & Vision
                            </button>
                        </div>

                        {activeTab === 'hardware' && (
                            <div className="quad-features-list">
                                <div className="quad-feature-item">
                                    <div className="quad-feature-icon"><FiCpu /></div>
                                    <div className="quad-feature-info">
                                        <h4>Low-Level Controller (Arduino Mega)</h4>
                                        <p>Executes direct hardware control over BTS7960 motor drivers and servo steering. Parses serial commands and generates safety-first telemetry packets.</p>
                                    </div>
                                </div>
                                <div className="quad-feature-item">
                                    <div className="quad-feature-icon"><FiServer /></div>
                                    <div className="quad-feature-info">
                                        <h4>High-Level Controller (Raspberry Pi)</h4>
                                        <p>Runs a Python-based FastAPI server managing state machines, path planning, telemetry streaming, and REST APIs for the React dashboard.</p>
                                    </div>
                                </div>
                                <div className="quad-feature-item">
                                    <div className="quad-feature-icon"><FiLayout /></div>
                                    <div className="quad-feature-info">
                                        <h4>Operator Dashboard (React)</h4>
                                        <p>Provides an intuitive graphical interface for manual control, mode changing, live camera viewing, and indoor route plotting.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'navigation' && (
                            <div className="quad-features-list">
                                <div className="quad-feature-item">
                                    <div className="quad-feature-icon"><FiNavigation /></div>
                                    <div className="quad-feature-info">
                                        <h4>Outdoor GPS Navigation</h4>
                                        <p>Calculates target bearings using NEO-6M GPS coordinates and magnetometer headings. Implements GPS filtering to reject drift and maintain smooth travel.</p>
                                    </div>
                                </div>
                                <div className="quad-feature-item">
                                    <div className="quad-feature-icon"><FiMapPin /></div>
                                    <div className="quad-feature-info">
                                        <h4>Indoor IMU Dead Reckoning</h4>
                                        <p>When GPS is lost indoors, the system tracks relative displacement using IMU-derived headings and wheel odometry to navigate office corridors.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'safety' && (
                            <div className="quad-features-list">
                                <div className="quad-feature-item">
                                    <div className="quad-feature-icon"><FiShield /></div>
                                    <div className="quad-feature-info">
                                        <h4>Multi-Layer ESTOP & Collision Avoidance</h4>
                                        <p>Enforces safety bounds at the firmware level. A TF-Luna LiDAR actively scans for obstacles, immediately halting the motors if an impending collision is detected.</p>
                                    </div>
                                </div>
                                <div className="quad-feature-item">
                                    <div className="quad-feature-icon"><FiVideo /></div>
                                    <div className="quad-feature-info">
                                        <h4>Visual Odometry & Live Streaming</h4>
                                        <p>Streams MJPEG video directly to the dashboard. The camera feed is also processed via OpenCV for occupancy mapping and local context analysis.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="quad-panel">
                        <h2>Tech Stack Details</h2>
                        <div className="quad-tech-pills" style={{ marginBottom: '24px' }}>
                            <span className="quad-tech-pill">Raspberry Pi</span>
                            <span className="quad-tech-pill">Arduino</span>
                            <span className="quad-tech-pill">React</span>
                            <span className="quad-tech-pill">FastAPI</span>
                            <span className="quad-tech-pill">Python</span>
                            <span className="quad-tech-pill">C++</span>
                            <span className="quad-tech-pill">WebSocket</span>
                            <span className="quad-tech-pill">OpenCV</span>
                            <span className="quad-tech-pill">IMU & GPS</span>
                            <span className="quad-tech-pill">LiDAR</span>
                        </div>

                        <h2><FiServer size={18} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Control Pipeline</h2>
                        <div className="quad-architecture-scheme">
                            <div className="quad-arch-step">
                                <h5>1. Operator Input</h5>
                                <p>Dashboard sends HTTP or WebSocket commands to the FastAPI backend.</p>
                            </div>
                            <div className="quad-arch-step">
                                <h5>2. State Machine Logic</h5>
                                <p>Python backend validates safety states, processes sensor fusion, and constructs serial movement instructions.</p>
                            </div>
                            <div className="quad-arch-step">
                                <h5>3. Hardware Execution</h5>
                                <p>Arduino firmware receives the command, adjusts PWM signals for motors/servos, and emits updated telemetry.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom Gallery Grid */}
                <section className="quad-panel">
                    <h2>Gallery Grid (Click to view)</h2>
                    <div className="quad-gallery-grid">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="quad-gallery-card"
                                onClick={() => {
                                    setCurrentSlide(index);
                                    window.scrollTo({ top: 350, behavior: 'smooth' });
                                }}
                            >
                                <img src={slide.img} alt={slide.title} />
                                <div className="quad-gallery-caption">
                                    {slide.title.split(' ')[0]}... Details
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}
