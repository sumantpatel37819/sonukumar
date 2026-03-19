import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiStar, FiGitBranch, FiCode } from 'react-icons/fi'
import './GitHubActivity.css'

const GITHUB_USERNAME = 'sonukumar'

const repos = [
    { name: 'autonomous-drone-ros', stars: 34, forks: 8, lang: 'Python', color: '#3572A5' },
    { name: 'esp32-gps-marking-robot', stars: 22, forks: 5, lang: 'C++', color: '#f34b7d' },
    { name: 'gesture-control-bot', stars: 18, forks: 4, lang: 'C++', color: '#f34b7d' },
    { name: 'aqi-monitoring-iot', stars: 15, forks: 3, lang: 'Python', color: '#3572A5' },
    { name: 'vision-robot-esp32cam', stars: 12, forks: 2, lang: 'Python', color: '#3572A5' },
    { name: 'slam-turtlebot-ros', stars: 10, forks: 2, lang: 'Python', color: '#3572A5' },
]

const contributions = Array.from({ length: 52 * 7 }, () => Math.floor(Math.random() * 5))

const levelColor = (n) => {
    if (n === 0) return '#1e293b'
    if (n === 1) return '#0e4429'
    if (n === 2) return '#006d32'
    if (n === 3) return '#26a641'
    return '#39d353'
}

export default function GitHubActivity() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="github" ref={ref} className="github-section">
            <div className="container">
                <p className="section-sub-tag"><span className="tag">Open Source</span></p>
                <h2 className="section-title">GitHub <span>Activity</span></h2>
                <p className="section-subtitle">
                    Actively building and sharing robotics tools on GitHub.
                </p>

                {/* Contribution heatmap */}
                <motion.div
                    className="contrib-wrap glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="contrib-header">
                        <span className="contrib-title"><FiGithub size={18} /> Contribution Graph</span>
                        <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                            View Profile
                        </a>
                    </div>
                    <div className="contrib-grid">
                        {contributions.map((n, i) => (
                            <div
                                key={i}
                                className="contrib-cell"
                                style={{ background: levelColor(n) }}
                                title={`${n} contributions`}
                            />
                        ))}
                    </div>
                    <div className="contrib-legend">
                        <span>Less</span>
                        {[0, 1, 2, 3, 4].map(n => (
                            <div key={n} className="contrib-cell" style={{ background: levelColor(n) }} />
                        ))}
                        <span>More</span>
                    </div>
                </motion.div>

                {/* Repo cards */}
                <div className="repos-grid">
                    {repos.map((repo, i) => (
                        <motion.a
                            key={i}
                            href={`https://github.com/${GITHUB_USERNAME}/${repo.name}`}
                            target="_blank"
                            rel="noreferrer"
                            className="repo-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                        >
                            <div className="repo-top">
                                <FiGithub size={18} className="repo-icon" />
                                <h4 className="repo-name">{repo.name}</h4>
                            </div>
                            <div className="repo-stats">
                                <span><FiStar size={13} /> {repo.stars}</span>
                                <span><FiGitBranch size={13} /> {repo.forks}</span>
                                <span><FiCode size={13} /> {repo.lang}</span>
                            </div>
                            <div className="repo-lang-dot" style={{ background: repo.color }} />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
