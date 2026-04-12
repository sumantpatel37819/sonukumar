import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiDownload, FiMoon, FiSun } from 'react-icons/fi'
import profilePic from '../../Images/ProfilePic.jpg'
import { useTheme } from '../../context/ThemeContext'
import './Navbar.css'

const navItems = [
    { label: 'Home', to: 'hero', type: 'scroll' },
    { label: 'About', to: 'about', type: 'scroll' },
    { label: 'IPR', to: '/ipr', type: 'route' },
    { label: 'Experience', to: 'timeline', type: 'scroll' },
    { label: 'Projects', to: 'projects', type: 'scroll' },
    { label: 'Skills', to: 'skills', type: 'scroll' },
    { label: 'Contact', to: 'contact', type: 'scroll' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')
    const { isLight, toggleTheme } = useTheme()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo */}
                <Link to="hero" smooth duration={500} className="nav-logo">
                    <span className="logo-sk">
                        <img src={profilePic} alt="Sonu Kumar profile" className="logo-photo" />
                    </span>
                    <span className="logo-name">Sonu Kumar</span>
                </Link>

                {/* Desktop nav */}
                <nav className="nav-links">
                    {navItems.map(item => (
                        item.type === 'route' ? (
                            <RouterLink key={item.to} to={item.to} className="nav-link">
                                {item.label}
                            </RouterLink>
                        ) : (
                            <Link
                                key={item.to}
                                to={item.to}
                                smooth
                                duration={500}
                                offset={-80}
                                spy
                                onSetActive={() => setActiveSection(item.to)}
                                className={`nav-link ${activeSection === item.to ? 'nav-link--active' : ''}`}
                            >
                                {item.label}
                            </Link>
                        )
                    ))}
                    <button
                        type="button"
                        className="theme-toggle-btn"
                        onClick={toggleTheme}
                        aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
                        title={isLight ? 'Dark mode' : 'Light mode'}
                    >
                        {isLight ? <FiMoon size={16} /> : <FiSun size={16} />}
                    </button>
                    <a
                        href="/resume.pdf"
                        download
                        className="btn btn-primary nav-resume"
                    >
                        <FiDownload size={14} />
                        Resume
                    </a>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="nav-hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="nav-mobile"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navItems.map(item => (
                            item.type === 'route' ? (
                                <RouterLink
                                    key={item.to}
                                    to={item.to}
                                    className="nav-mobile-link"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.label}
                                </RouterLink>
                            ) : (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    smooth
                                    duration={500}
                                    offset={-80}
                                    className="nav-mobile-link"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            )
                        ))}
                        <button
                            type="button"
                            className="theme-toggle-btn theme-toggle-btn--mobile"
                            onClick={toggleTheme}
                            aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
                        >
                            {isLight ? <FiMoon size={16} /> : <FiSun size={16} />}
                            {isLight ? 'Dark Mode' : 'Light Mode'}
                        </button>
                        <a href="/resume.pdf" download className="btn btn-primary nav-mobile-resume">
                            <FiDownload size={14} /> Download Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
