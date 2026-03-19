import { useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiAward, FiFileText } from 'react-icons/fi'
import patentData from '../../IPR/patent.json'
import certificateImg from '../../IPR/certificate.jpg'
import profilePic from '../../Images/ProfilePic.jpg'
import './Research.css'

const formatDate = (value) => {
    if (!value) return 'N/A'
    return new Date(value).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    })
}

const cleanText = (value) => (value || '').replace(/Â/g, '')

export default function Research() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const featurePreview = useMemo(() => (patentData.keyFeatures || []).slice(0, 3), [])

    return (
        <section id="ipr" ref={ref} className="research-section">
            <div className="container">
                <p className="section-sub-tag"><span className="tag">Intellectual Property</span></p>
                <h2 className="section-title">My <span>IPR</span></h2>
                <p className="section-subtitle">
                    Click to view the complete patent details, certificate, and prototype figures.
                </p>

                <motion.div
                    className="research-card glass-card"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55 }}
                >
                    <div className="ipr-top">
                        <div className="ipr-profile-wrap">
                            <img src={profilePic} alt="Sonu Kumar profile" className="ipr-profile-pic" />
                            <span className="exp-status status-done">{patentData.status}</span>
                        </div>
                        <div>
                            <div className="exp-header">
                                <div className="exp-icon" style={{ color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
                                    <FiAward size={24} />
                                </div>
                                <div>
                                    <span className="exp-category">Granted Patent</span>
                                    <h3 className="exp-title">{patentData.title}</h3>
                                </div>
                            </div>
                            <p className="exp-desc">{cleanText(patentData.description)}</p>
                        </div>
                    </div>

                    <div className="exp-metrics">
                        <div className="metric-box" style={{ borderColor: 'rgba(56, 189, 248, 0.3)' }}>
                            <span className="metric-value" style={{ color: '#38bdf8' }}>{patentData.patentNumber}</span>
                            <span className="metric-label">Patent Number</span>
                        </div>
                        <div className="metric-box" style={{ borderColor: 'rgba(56, 189, 248, 0.3)' }}>
                            <span className="metric-value" style={{ color: '#38bdf8' }}>{formatDate(patentData.grantDate)}</span>
                            <span className="metric-label">Grant Date</span>
                        </div>
                        <div className="metric-box" style={{ borderColor: 'rgba(56, 189, 248, 0.3)' }}>
                            <span className="metric-value" style={{ color: '#38bdf8' }}>{patentData.validity}</span>
                            <span className="metric-label">Validity</span>
                        </div>
                    </div>

                    <div className="ipr-feature-list">
                        {featurePreview.map((feature) => (
                            <span key={feature} className="ipr-pill">{cleanText(feature)}</span>
                        ))}
                    </div>

                    <div className="ipr-actions">
                        <Link to="/ipr" className="btn btn-primary">
                            <FiFileText size={15} />
                            View Full IPR Details
                            <FiArrowRight size={15} />
                        </Link>
                    </div>

                    <img src={certificateImg} alt="Patent certificate preview" className="ipr-certificate-preview" />
                </motion.div>
            </div>
        </section>
    )
}
