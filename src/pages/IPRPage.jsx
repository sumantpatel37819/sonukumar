import { Link } from 'react-router-dom'
import { FiArrowLeft, FiAward, FiCalendar, FiClock, FiFileText, FiMoon, FiSun, FiUsers } from 'react-icons/fi'
import patentData from '../IPR/patent.json'
import profilePic from '../Images/ProfilePic.jpg'
import certificateImg from '../IPR/certificate.jpg'
import fig1 from '../IPR/fig1.jpg'
import fig2 from '../IPR/fig2.jpg'
import fig3 from '../IPR/fig3.jpg'
import fig4 from '../IPR/fig4.jpg'
import fig5 from '../IPR/fig5.jpg'
import fig6 from '../IPR/fig6.jpg'
import patentPdf from '../IPR/IN580928.pdf'
import { useTheme } from '../context/ThemeContext'
import './IPRPage.css'

const drawingImages = [fig1, fig2, fig3, fig4, fig5, fig6]

const formatDate = (value) => {
    if (!value) return 'N/A'
    return new Date(value).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    })
}

const cleanText = (value) => (value || '').replace(/\u00c2/g, '')

export default function IPRPage() {
    const { isLight, toggleTheme } = useTheme()

    const summaryCards = [
        { label: 'Patent Number', value: patentData.patentNumber, icon: <FiAward size={16} /> },
        { label: 'Application Number', value: patentData.applicationNumber, icon: <FiFileText size={16} /> },
        { label: 'Filing Date', value: formatDate(patentData.filingDate), icon: <FiCalendar size={16} /> },
        { label: 'Grant Date', value: formatDate(patentData.grantDate), icon: <FiCalendar size={16} /> },
        { label: 'Validity', value: patentData.validity, icon: <FiClock size={16} /> },
        { label: 'Inventors', value: `${patentData.inventors.length} Contributors`, icon: <FiUsers size={16} /> },
    ]

    return (
        <div className="ipr-page">
            <header className="ipr-topbar">
                <div className="container ipr-topbar-inner">
                    <div className="ipr-topbar-actions">
                        <Link to="/" className="btn btn-ghost ipr-back-btn">
                            <FiArrowLeft size={15} />
                            Back to Portfolio
                        </Link>
                        <button
                            type="button"
                            className="theme-toggle-btn"
                            onClick={toggleTheme}
                            aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
                            title={isLight ? 'Dark mode' : 'Light mode'}
                        >
                            {isLight ? <FiMoon size={16} /> : <FiSun size={16} />}
                        </button>
                    </div>
                    <span className="tag">IPR Details</span>
                </div>
            </header>

            <main className="ipr-main">
                <section className="container ipr-hero-wrap">
                    <div className="ipr-hero">
                        <div className="ipr-hero-left">
                            <span className="ipr-label">Intellectual Property Right</span>
                            <h1>{patentData.title}</h1>
                            <p>{cleanText(patentData.description)}</p>
                            <div className="ipr-hero-actions">
                                <a href={patentPdf} target="_blank" rel="noreferrer" className="btn btn-primary">
                                    <FiFileText size={15} />
                                    Open Patent PDF
                                </a>
                                <span className={`ipr-status ${patentData.status === 'Granted' ? 'ipr-status--done' : 'ipr-status--active'}`}>
                                    {patentData.status}
                                </span>
                            </div>
                        </div>

                        <div className="ipr-hero-right">
                            <div className="ipr-profile-card">
                                <img src={profilePic} alt="Sonu Kumar profile" className="ipr-avatar" />
                                <h3>{patentData.inventors[1] || patentData.inventors[0]}</h3>
                                <p>Inventor</p>
                            </div>
                            <div className="ipr-org-card">
                                <p className="ipr-org-label">Organization</p>
                                <p className="ipr-org-name">{patentData.organization}</p>
                            </div>
                        </div>
                    </div>

                    <div className="ipr-summary-grid">
                        {summaryCards.map((card) => (
                            <article key={card.label} className="ipr-summary-card">
                                <span className="ipr-summary-icon">{card.icon}</span>
                                <div>
                                    <small>{card.label}</small>
                                    <strong>{card.value}</strong>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="container ipr-single-row">
                    <article className="ipr-panel">
                        <h2>Patent Information</h2>
                        <div className="ipr-info-grid">
                            <p><strong>Patentee</strong><span>{patentData.patentee}</span></p>
                            <p><strong>Organization</strong><span>{patentData.organization}</span></p>
                            <p><strong>Patent Number</strong><span>{patentData.patentNumber}</span></p>
                            <p><strong>Application Number</strong><span>{patentData.applicationNumber}</span></p>
                            <p><strong>Filing Date</strong><span>{formatDate(patentData.filingDate)}</span></p>
                            <p><strong>Grant Date</strong><span>{formatDate(patentData.grantDate)}</span></p>
                            <p><strong>Validity</strong><span>{patentData.validity}</span></p>
                            <p><strong>Status</strong><span>{patentData.status}</span></p>
                        </div>
                    </article>
                </section>

                <section className="container ipr-triple-grid">
                    <article className="ipr-panel">
                        <h2>Inventors</h2>
                        <ul className="ipr-inventor-list">
                            {patentData.inventors.map((inventor) => (
                                <li key={inventor}>
                                    <FiUsers size={16} />
                                    <span>{inventor}</span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="ipr-panel">
                        <h2>Technologies</h2>
                        <div className="ipr-chip-wrap">
                            {patentData.technologies.map((tech) => (
                                <span key={tech} className="ipr-chip">{tech}</span>
                            ))}
                        </div>
                    </article>
                    <article className="ipr-panel">
                        <h2>Key Features</h2>
                        <ul className="ipr-list">
                            {patentData.keyFeatures.map((feature) => (
                                <li key={feature}>{cleanText(feature)}</li>
                            ))}
                        </ul>
                    </article>
                </section>

                <section className="container ipr-media-grid">
                    <article className="ipr-panel ipr-panel-certificate">
                        <h2>Patent Certificate</h2>
                        <img src={certificateImg} alt="Patent certificate" className="ipr-certificate-img" />
                    </article>

                    <article className="ipr-panel">
                        <h2>Prototype Figures</h2>
                        <div className="ipr-fig-grid">
                            {drawingImages.map((figure, index) => (
                                <figure key={figure} className="ipr-figure">
                                    <img src={figure} alt={`Patent prototype figure ${index + 1}`} />
                                    <figcaption>Figure {index + 1}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </article>
                </section>
            </main>
        </div>
    )
}
