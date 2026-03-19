import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import './Footer.css'

const navLinks = [
    { label: 'Home', to: 'hero', type: 'scroll' },
    { label: 'About', to: 'about', type: 'scroll' },
    { label: 'Skills', to: 'skills', type: 'scroll' },
    { label: 'Projects', to: 'projects', type: 'scroll' },
    { label: 'Experience', to: 'timeline', type: 'scroll' },
    { label: 'IPR', to: '/ipr', type: 'route' },
    { label: 'Contact', to: 'contact', type: 'scroll' },
]

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-glow" />
            <div className="container">
                <div className="footer-main">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-sk">SK</span>
                            <span className="footer-name">Sonu Kumar</span>
                        </div>
                        <p className="footer-tagline">Robotics | AI | Embedded Systems Engineer</p>
                        <p className="footer-desc">
                            Building intelligent machines that push the boundaries of autonomy,
                            perception, and embedded intelligence.
                        </p>
                        <div className="footer-socials">
                            <a href="https://github.com/sonukumar" target="_blank" rel="noreferrer" className="footer-social-btn"><FiGithub size={18} /></a>
                            <a href="https://linkedin.com/in/sonukumar" target="_blank" rel="noreferrer" className="footer-social-btn"><FiLinkedin size={18} /></a>
                            <a href="mailto:sonu@example.com" className="footer-social-btn"><FiMail size={18} /></a>
                        </div>
                    </div>

                    {/* Nav links */}
                    <div className="footer-nav">
                        <h4>Quick Links</h4>
                        <ul>
                            {navLinks.map(l => (
                                <li key={l.to}>
                                    {l.type === 'route' ? (
                                        <RouterLink to={l.to}>{l.label}</RouterLink>
                                    ) : (
                                        <Link to={l.to} smooth duration={500} offset={-80}>{l.label}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="footer-tech">
                        <h4>Built With</h4>
                        <div className="tech-list">
                            {['React', 'Framer Motion', 'Vite', 'CSS3', 'tsParticles'].map(t => (
                                <span key={t} className="tech-pill">{t}</span>
                            ))}
                        </div>
                        <div className="footer-availability">
                            <span className="avail-dot" />
                            Available for opportunities
                        </div>
                    </div>
                </div>

                <div className="footer-divider" />

                <div className="footer-bottom">
                    <p>© 2026 Sonu Kumar. All rights reserved.</p>
                    <p className="footer-made">
                        Made with <FiHeart size={13} className="heart" /> in India
                    </p>
                </div>
            </div>
        </footer>
    )
}
