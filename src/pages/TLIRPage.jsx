import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    FiArrowLeft,
    FiMoon,
    FiSun,
    FiGithub,
    FiExternalLink,
    FiCpu,
    FiWifi,
    FiZap,
    FiVideo,
    FiShield,
    FiActivity,
    FiEye,
    FiSliders,
    FiCheckCircle
} from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import './TLIRPage.css'

// Import video dynamically for Vite bundler
import tlirVideo from '../TLIR/VID-20260218-WA0005.mp4'

export default function TLIRPage() {
    const { isLight, toggleTheme } = useTheme()
    const [activeTab, setActiveTab] = useState('overview')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const features = [
        {
            icon: <FiSliders size={24} />,
            title: 'Two-Wheel Robotic Arm Mechanism',
            subtitle: 'Traverses Directly On EHV Transmission Lines',
            desc: 'Engineered with a specialized two-wheel gripping arm that mounts directly onto Extra High Voltage (EHV) transmission wires. Allows steady forward/backward locomotion across long conductor spans.'
        },
        {
            icon: <FiWifi size={24} />,
            title: '5G Remote Monitoring & Live Telemetry',
            subtitle: 'Ultra Low-Latency Video & Sensor Stream',
            desc: 'Integrates high-speed 5G network telemetry to stream real-time HD video feed and sensor data to remote grid control rooms, allowing operators to monitor high-voltage lines from anywhere.'
        },
        {
            icon: <FiEye size={24} />,
            title: 'Onboard AI Damage Detection',
            subtitle: 'Real-Time Wire & Insulator Defect Analysis',
            desc: 'Runs onboard Computer Vision and ML models to detect wire strand breakages, physical corrosion, surface wear, insulator cracks, and foreign object entanglements with precise alert logging.'
        },
        {
            icon: <FiZap size={24} />,
            title: 'Electromagnetic Induction Self-Charging',
            subtitle: 'EHV Line Energy Harvesting System',
            desc: 'Harvests electrical energy directly from the magnetic field around Extra High Voltage (EHV) transmission lines via induction coil technology, enabling infinite continuous operation without manual battery swaps.'
        }
    ]

    const specs = [
        { label: 'Application', value: 'EHV Overhead Power Line Inspection' },
        { label: 'Mechanism', value: 'Dual-Wheel Overhead Wire Arm' },
        { label: 'Communication', value: '5G Low-Latency Telemetry & Video' },
        { label: 'AI Models', value: 'OpenCV / YOLO Damage & Insulator Defect Detection' },
        { label: 'Power Source', value: 'Electromagnetic Induction Energy Harvester' },
        { label: 'Operating Voltage', value: 'Extra High Voltage (EHV) Grid Compatible' },
        { label: 'Status', value: 'Active Research & Prototype' }
    ]

    return (
        <div className="tlir-page">
            {/* Navigation Header */}
            <header className="tlir-topbar">
                <div className="tlir-topbar-inner">
                    <div className="tlir-topbar-actions">
                        <Link to="/" className="tlir-back-btn">
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

                    <div className="tlir-topbar-brand">
                        <FiCpu size={20} className="brand-icon" />
                        <span>TLIR System</span>
                    </div>
                </div>
            </header>

            <main className="tlir-container">
                {/* Hero Section */}
                <section className="tlir-hero">
                    <div className="tlir-badge">
                        <FiZap size={14} />
                        <span>EHV Line Robotics + AI Inspection</span>
                    </div>

                    <h1 className="tlir-title">
                        AI-Powered <span className="gradient-text">Transmission-Line</span> Inspection Robot
                    </h1>

                    <p className="tlir-subtitle">
                        An autonomous robotic system operating directly on Extra High Voltage (EHV) transmission wires. 
                        Features a <strong>two-wheel robotic arm</strong>, <strong>5G video telemetry</strong>, <strong>onboard AI defect detection</strong> for wires and insulators, and <strong>electromagnetic induction self-charging</strong>.
                    </p>

                    <div className="tlir-meta-pills">
                        <span className="meta-pill"><FiSliders size={13} /> Two-Wheel Arm</span>
                        <span className="meta-pill"><FiWifi size={13} /> 5G Network</span>
                        <span className="meta-pill"><FiEye size={13} /> Onboard AI Inspection</span>
                        <span className="meta-pill"><FiZap size={13} /> EHV Induction Charging</span>
                    </div>

                    <div className="tlir-hero-actions">
                        <a
                            href="https://github.com/sumantpatel37819"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline"
                        >
                            <FiGithub size={16} />
                            View Source on GitHub
                        </a>
                    </div>
                </section>

                {/* Video Prototype Showcase Section */}
                <section className="tlir-video-section">
                    <div className="section-header-center">
                        <span className="sub-tag"><FiVideo size={14} /> Prototype Demo</span>
                        <h2>Robotic Prototype <span>In Action</span></h2>
                        <p>Watch the Transmission Line Inspection Robot prototype traversing power line structures.</p>
                    </div>

                    <div className="video-card glass-card">
                        <div className="video-wrapper">
                            <video
                                src={tlirVideo}
                                controls
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="tlir-video-player"
                            >
                                Your browser does not support playing video.
                            </video>
                        </div>
                        <div className="video-caption">
                            <FiCheckCircle size={16} className="caption-icon" />
                            <span><strong>Live Demonstration Video:</strong> Two-wheel arm mechanism undergoing operational testing on transmission line mock-up structure.</span>
                        </div>
                    </div>
                </section>

                {/* Feature Highlights Grid */}
                <section className="tlir-features-section">
                    <div className="section-header-center">
                        <span className="sub-tag"><FiActivity size={14} /> Core Innovations</span>
                        <h2>Key Technical <span>Capabilities</span></h2>
                        <p>Combining mechanical innovation, high-speed telemetry, computer vision, and energy harvesting.</p>
                    </div>

                    <div className="features-grid">
                        {features.map((item, idx) => (
                            <div key={idx} className="feature-card glass-card">
                                <div className="feature-icon-wrap">
                                    {item.icon}
                                </div>
                                <h3 className="feature-title">{item.title}</h3>
                                <span className="feature-sub">{item.subtitle}</span>
                                <p className="feature-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="tlir-specs-section">
                    <div className="specs-card glass-card">
                        <div className="specs-header">
                            <FiShield size={22} className="specs-icon" />
                            <div>
                                <h3>Technical Specifications</h3>
                                <p>System architectural overview and component breakdown</p>
                            </div>
                        </div>

                        <div className="specs-grid">
                            {specs.map((spec, i) => (
                                <div key={i} className="spec-item">
                                    <span className="spec-label">{spec.label}</span>
                                    <span className="spec-value">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="tlir-footer">
                <p>Designed & Developed by Sonu Kumar | B.Tech EE, NIT Patna</p>
                <Link to="/" className="tlir-back-link">Return to Portfolio Main Page →</Link>
            </footer>
        </div>
    )
}
