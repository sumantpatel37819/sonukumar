import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import {
    FiActivity,
    FiCamera,
    FiCode,
    FiCpu,
    FiExternalLink,
    FiGithub,
    FiGlobe,
    FiMap,
    FiNavigation,
    FiStar,
    FiWifi,
    FiZap
} from 'react-icons/fi'
import projects from '../../data/projects.json'
import './Projects.css'

const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))]

const ProjectIcon = ({ type }) => {
    const icons = {
        drone: <FiNavigation />,
        robot: <FiCpu />,
        gesture: <FiActivity />,
        aqi: <FiWifi />,
        vision: <FiCamera />,
        slam: <FiMap />,
        agv: <FiCpu />,
        ai: <FiZap />,
        ml: <FiActivity />,
        web: <FiGlobe />,
        inspection: <FiCamera />,
        code: <FiCode />,
    }
    return <span className="project-icon">{icons[type] || <FiCpu />}</span>
}

export default function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [filter, setFilter] = useState('All')

    const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)
    const featured = projects.filter(p => p.featured)

    return (
        <section id="projects" ref={ref} className="projects-section">
            <div className="container">
                <p className="section-sub-tag"><span className="tag">What I Built</span></p>
                <h2 className="section-title">Featured <span>Projects</span></h2>
                <p className="section-subtitle">
                    Real robotics systems combining hardware, AI, and autonomous software.
                </p>

                {/* Featured row */}
                <div className="featured-grid">
                    {featured.map((proj, i) => (
                        <motion.div
                            key={proj.id}
                            className="featured-card glass-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.12, duration: 0.55 }}
                        >
                            <div className="featured-card-top">
                                <ProjectIcon type={proj.image} />
                                <div className="featured-meta">
                                    <span className={`proj-status proj-status--${proj.status === 'Completed' ? 'done' : 'active'}`}>
                                        {proj.status}
                                    </span>
                                    {i === 0 && <span className="proj-featured"><FiStar size={12} /> Featured</span>}
                                </div>
                            </div>
                            <h3 className="featured-title">{proj.title}</h3>
                            <p className="featured-desc">{proj.description}</p>
                            <div className="proj-tags">
                                {proj.tags.slice(0, 5).map(t => (
                                    <span key={t} className="proj-tag">{t}</span>
                                ))}
                            </div>
                            <div className="proj-actions">
                                <a href={proj.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                                    <FiGithub size={14} /> GitHub
                                </a>
                                <button className="btn btn-ghost btn-sm">
                                    <FiExternalLink size={14} /> Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* All projects gallery */}
                <h3 className="all-projects-heading">All <span className="gradient-text">Projects</span></h3>

                {/* Filter bar */}
                <div className="filter-bar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="projects-gallery">
                    {filtered.map((proj, i) => (
                        <motion.div
                            key={proj.id}
                            className="proj-card glass-card"
                            initial={{ opacity: 0, scale: 0.93 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                        >
                            <div className="proj-card-img">
                                <ProjectIcon type={proj.image} />
                                <span className="proj-card-cat">{proj.category}</span>
                            </div>
                            <div className="proj-card-body">
                                <h4 className="proj-card-title">{proj.title}</h4>
                                <p className="proj-card-desc">{proj.description.slice(0, 110)}...</p>
                                <div className="proj-tags">
                                    {proj.tags.slice(0, 4).map(t => (
                                        <span key={t} className="proj-tag">{t}</span>
                                    ))}
                                </div>
                                <div className="proj-actions">
                                    <a href={proj.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                                        <FiGithub size={13} /> GitHub
                                    </a>
                                    <button className="btn btn-ghost btn-sm">
                                        <FiExternalLink size={13} /> Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
