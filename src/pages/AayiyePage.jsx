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
    FiServer
} from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import './AayiyePage.css'

// Import images directly for Vite bundler
import homeImg from '../Aayiye/images/Home Page.jpg'
import aiAssistantImg from '../Aayiye/images/AI assistent.jpg'
import planTrackerImg from '../Aayiye/images/Plan tracker.jpg'
import searchButtonImg from '../Aayiye/images/Search Button.jpg'
import chatbotGuiderImg from '../Aayiye/images/chatbot guider.jpg'
import profileButtonImg from '../Aayiye/images/profile button.jpg'

export default function AayiyePage() {
    const { isLight, toggleTheme } = useTheme()
    const [currentSlide, setCurrentSlide] = useState(0)
    const [activeTab, setActiveTab] = useState('core')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const slides = [
        {
            img: homeImg,
            title: 'Home Page & Geolocation recommendations',
            desc: 'The application home page dynamically geolocates users via GPS/IP API to reverse-geocode their area and serve tailored tourist place recommendations powered by Gemini AI, caching inputs in MongoDB.'
        },
        {
            img: aiAssistantImg,
            title: 'AI Travel Assistant Insights',
            desc: 'Intelligent AI assistant module providing dynamically generated details on safety guidelines, regional local food, cultural beliefs, historical insights, and seasonal guidelines for each location.'
        },
        {
            img: planTrackerImg,
            title: 'Interactive Travel Planner & Route Optimizer',
            desc: 'A smart dashboard allowing users to build a travel cart, estimate total costs, and run a route-optimizing Traveling Salesperson Problem (TSP) algorithm using a Nearest Neighbor logic.'
        },
        {
            img: searchButtonImg,
            title: 'Smart Autocomplete Search Engine',
            desc: 'Low-latency search bar with debounced inputs linked to a prefix Trie data structure for instant autocomplete recommendations and matching catalog items.'
        },
        {
            img: chatbotGuiderImg,
            title: 'Real-Time Streaming Chatbot',
            desc: 'Live Travel Companion Chatbot using Server-Sent Events (SSE) to stream words in real-time. Leverages a memory cache to remember recent conversation histories.'
        },
        {
            img: profileButtonImg,
            title: 'User Profile & Media Share History',
            desc: 'Dedicated profile feed tracking user-specific uploaded photos and videos. Integrates Multer storage pipelines directly with Cloudinary API for secure asset uploads.'
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
        <div className="aayiye-page">
            <header className="aayiye-topbar">
                <div className="aayiye-topbar-inner">
                    <div className="aayiye-topbar-actions">
                        <Link to="/" className="aayiye-back-btn">
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
                    <span className="aayiye-label-tag" style={{ marginBottom: 0 }}>Project Detail</span>
                </div>
            </header>

            <main className="aayiye-main">
                {/* Hero Section */}
                <section className="aayiye-hero">
                    <div className="aayiye-hero-left">
                        <span className="aayiye-label-tag">Travel & AI Platform</span>
                        <h1 className="aayiye-title">Aayiye: <span>Travel Discovery Platform</span></h1>
                        <p className="aayiye-lead">
                            An AI-powered, location-aware tourism exploration system built for Bihar, India.
                            Features responsive geolocation tracking, real-time streaming chatbot guides,
                            nearest-neighbor route itinerary planning, and a multi-provider fallback web search.
                        </p>
                        <div className="aayiye-hero-actions">
                            <a href="https://github.com/sumantpatel37819/tourKaro" target="_blank" rel="noreferrer" className="btn btn-outline">
                                <FiGithub size={16} /> GitHub Repository
                            </a>
                            <a href="https://aayiye.onrender.com" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                <FiExternalLink size={16} /> Visit Web
                            </a>
                            <span className="aayiye-status-badge aayiye-status--progress">
                                <FiActivity size={14} style={{ marginRight: '6px' }} /> In Progress
                            </span>
                        </div>
                    </div>

                    <div className="aayiye-meta-box">
                        <article className="aayiye-stat-card">
                            <div className="aayiye-stat-icon"><FiCpu /></div>
                            <div className="aayiye-stat-info">
                                <small>Backend Architecture</small>
                                <strong>Node Express + Python FastAPI</strong>
                            </div>
                        </article>

                        <article className="aayiye-stat-card">
                            <div className="aayiye-stat-icon"><FiDatabase /></div>
                            <div className="aayiye-stat-info">
                                <small>Databases Used</small>
                                <strong>MongoDB + Redis Cache</strong>
                            </div>
                        </article>

                        <article className="aayiye-stat-card">
                            <div className="aayiye-stat-icon"><FiGlobe /></div>
                            <div className="aayiye-stat-info">
                                <small>Artificial Intelligence</small>
                                <strong>Gemini 2.5 Flash API</strong>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Screenshot Slider */}
                <section className="aayiye-slider-panel">
                    <h2><FiLayout size={20} style={{ color: '#22d3ee' }} /> Project Screenshots & Features</h2>
                    <div className="aayiye-slider-wrapper">
                        <div className="aayiye-slide-container">
                            <img
                                src={slides[currentSlide].img}
                                alt={slides[currentSlide].title}
                                className="aayiye-slide-img"
                            />
                        </div>

                        <button className="aayiye-slider-btn aayiye-slider-btn--prev" onClick={prevSlide} aria-label="Previous slide">
                            <FiChevronLeft size={22} />
                        </button>
                        <button className="aayiye-slider-btn aayiye-slider-btn--next" onClick={nextSlide} aria-label="Next slide">
                            <FiChevronRight size={22} />
                        </button>
                    </div>

                    <div className="aayiye-slide-details" style={{ padding: '20px 24px', background: 'var(--page-card-soft)', borderRadius: '14px', marginTop: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <h3 className="aayiye-slide-title" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--page-accent-cyan)', marginBottom: '8px' }}>{slides[currentSlide].title}</h3>
                        <p className="aayiye-slide-desc" style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.65', margin: 0 }}>{slides[currentSlide].desc}</p>
                    </div>

                    <div className="aayiye-slider-indicators">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`aayiye-indicator ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </section>

                {/* Tabbed details */}
                <section className="aayiye-grid-layout">
                    <div className="aayiye-panel">
                        <div className="aayiye-tabs-header">
                            <button
                                className={`aayiye-tab-btn ${activeTab === 'core' ? 'active' : ''}`}
                                onClick={() => setActiveTab('core')}
                            >
                                Core Engine
                            </button>
                            <button
                                className={`aayiye-tab-btn ${activeTab === 'planner' ? 'active' : ''}`}
                                onClick={() => setActiveTab('planner')}
                            >
                                Itinerary Planner
                            </button>
                            <button
                                className={`aayiye-tab-btn ${activeTab === 'chatbot' ? 'active' : ''}`}
                                onClick={() => setActiveTab('chatbot')}
                            >
                                Streaming Chatbot
                            </button>
                        </div>

                        {activeTab === 'core' && (
                            <div className="aayiye-features-list">
                                <div className="aayiye-feature-item">
                                    <div className="aayiye-feature-icon"><FiMapPin /></div>
                                    <div className="aayiye-feature-info">
                                        <h4>GPS & IP Geolocation Mapping</h4>
                                        <p>Reverse-geocodes current GPS coordinates to area descriptions using OpenStreetMap Nominatim. If permission is denied, falls back to IP-based tracking to keep content localized.</p>
                                    </div>
                                </div>
                                <div className="aayiye-feature-item">
                                    <div className="aayiye-feature-icon"><FiSearch /></div>
                                    <div className="aayiye-feature-info">
                                        <h4>Trie-based Instant Autocomplete</h4>
                                        <p>Hydrates a memory-optimized prefix Trie with place terms from database catalog. Allows instant keyword recommendations matching with sub-10ms response times.</p>
                                    </div>
                                </div>
                                <div className="aayiye-feature-item">
                                    <div className="aayiye-feature-icon"><FiGlobe /></div>
                                    <div className="aayiye-feature-info">
                                        <h4>Multi-Provider Web Search Chain</h4>
                                        <p>Integrates a search fallback pipeline (Google Custom Search → Bing Search → SerpAPI → DuckDuckGo) to bypass API limit bottlenecks while searching information online.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'planner' && (
                            <div className="aayiye-features-list">
                                <div className="aayiye-feature-item">
                                    <div className="aayiye-feature-icon"><FiNavigation /></div>
                                    <div className="aayiye-feature-info">
                                        <h4>Traveling Salesperson Problem (TSP) Optimization</h4>
                                        <p>Optimizes route itineraries for tourist places by solving TSP using Nearest Neighbor heuristics. Minimizes travel distance and organizes day-wise plans logically.</p>
                                    </div>
                                </div>
                                <div className="aayiye-feature-item">
                                    <div className="aayiye-feature-icon"><FiActivity /></div>
                                    <div className="aayiye-feature-info">
                                        <h4>Itinerary Cost Estimation</h4>
                                        <p>Provides real-time budget forecasting including entry fees, meals, and estimated local transport costs depending on selections added to the plan cart.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'chatbot' && (
                            <div className="aayiye-features-list">
                                <div className="aayiye-feature-item">
                                    <div className="aayiye-feature-icon"><FiMessageSquare /></div>
                                    <div className="aayiye-feature-info">
                                        <h4>Real-Time streaming with SSE</h4>
                                        <p>Uses Server-Sent Events (SSE) via FastAPI server to stream Gemini responses character by character, providing an interactive, premium chat feel.</p>
                                    </div>
                                </div>
                                <div className="aayiye-feature-item">
                                    <div className="aayiye-feature-icon"><FiDatabase /></div>
                                    <div className="aayiye-feature-info">
                                        <h4>Redis Chat Memory Cache</h4>
                                        <p>Persists conversation contexts inside Redis stores mapped against session IDs to maintain topic context across page navigations, falling back gracefully to memory models if Redis is offline.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="aayiye-panel">
                        <h2>Tech Stack Details</h2>
                        <div className="aayiye-tech-pills" style={{ marginBottom: '24px' }}>
                            <span className="aayiye-tech-pill">EJS Views</span>
                            <span className="aayiye-tech-pill">Vanilla JS / CSS</span>
                            <span className="aayiye-tech-pill">Express.js</span>
                            <span className="aayiye-tech-pill">FastAPI</span>
                            <span className="aayiye-tech-pill">MongoDB</span>
                            <span className="aayiye-tech-pill">Redis Cache</span>
                            <span className="aayiye-tech-pill">Gemini AI</span>
                            <span className="aayiye-tech-pill">Cloudinary</span>
                            <span className="aayiye-tech-pill">Multer</span>
                            <span className="aayiye-tech-pill">Nominatim API</span>
                        </div>

                        <h2><FiServer size={18} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Smart Pipeline</h2>
                        <div className="aayiye-architecture-scheme">
                            <div className="aayiye-arch-step">
                                <h5>1. User Search Request</h5>
                                <p>Checks MongoDB cache for matches. Serving instant results on hit.</p>
                            </div>
                            <div className="aayiye-arch-step">
                                <h5>2. Orchestrated Web Fetch</h5>
                                <p>Fires search chain to retrieve highest matching authority URLs.</p>
                            </div>
                            <div className="aayiye-arch-step">
                                <h5>3. ML Summary Pipeline</h5>
                                <p>Extracts clean page texts and runs FastAPI summarization or Gemini fallback.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom Gallery Grid */}
                <section className="aayiye-panel">
                    <h2>Gallery Grid (Click to view)</h2>
                    <div className="aayiye-gallery-grid">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="aayiye-gallery-card"
                                onClick={() => {
                                    setCurrentSlide(index);
                                    window.scrollTo({ top: 350, behavior: 'smooth' });
                                }}
                            >
                                <img src={slide.img} alt={slide.title} />
                                <div className="aayiye-gallery-caption">
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
