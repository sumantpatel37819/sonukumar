import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi'
import './Contact.css'

const social = [
    { icon: <FiMail size={22} />, label: 'Email', value: 'pk645245@gmail.com', href: 'pk645245@gmail.com', color: '#38bdf8' },
    { icon: <FiLinkedin size={22} />, label: 'LinkedIn', value: '/in/sonu-kumar-3b227b290', href: 'https://www.linkedin.com/in/sonu-kumar-3b227b290/', color: '#0a66c2' },
    { icon: <FiGithub size={22} />, label: 'GitHub', value: '@sumantpatel37819', href: 'https://github.com/sumantpatel37819', color: '#e2e8f0' },
]

export default function Contact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [sent, setSent] = useState(false)
    const [sending, setSending] = useState(false)

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()
        setSending(true)
        // Simulate send
        await new Promise(r => setTimeout(r, 1200))
        setSent(true)
        setSending(false)
    }

    return (
        <section id="contact" ref={ref} className="contact-section">
            <div className="container">
                <p className="section-sub-tag"><span className="tag">Say Hello</span></p>
                <h2 className="section-title">Let's Build Something <span>Amazing</span></h2>
                <p className="section-subtitle">
                    Whether you have a project idea, collaboration proposal, or just want to connect —
                    I'd love to hear from you.
                </p>

                <div className="contact-layout">
                    {/* Left — info */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.65 }}
                    >
                        <h3 className="contact-info-title">Get In Touch</h3>
                        <p className="contact-info-text">
                            I'm currently open to freelance projects, research collaborations, and full-time
                            robotics engineering opportunities. Feel free to reach out through any of these channels.
                        </p>

                        <div className="contact-location">
                            <FiMapPin size={16} />
                            <span>India 🇮🇳 • Available Remote</span>
                        </div>

                        <div className="social-links">
                            {social.map((s, i) => (
                                <motion.a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-link-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                    style={{ '--social-color': s.color }}
                                >
                                    <div className="social-icon" style={{ color: s.color }}>{s.icon}</div>
                                    <div>
                                        <div className="social-label">{s.label}</div>
                                        <div className="social-value">{s.value}</div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — form */}
                    <motion.div
                        className="contact-form-wrap"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.65, delay: 0.15 }}
                    >
                        {sent ? (
                            <div className="form-success glass-card">
                                <span className="success-icon">✅</span>
                                <h3>Message Sent!</h3>
                                <p>Thanks for reaching out, Sonu will get back to you shortly.</p>
                                <button className="btn btn-primary" onClick={() => setSent(false)}>Send Another</button>
                            </div>
                        ) : (
                            <form className="contact-form glass-card" onSubmit={handleSubmit}>
                                <h3 className="form-title">Send a Message</h3>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name</label>
                                        <input id="name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input id="subject" name="subject" type="text" placeholder="Project Collaboration" value={form.subject} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." value={form.message} onChange={handleChange} required />
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={sending}>
                                    {sending ? 'Sending...' : <><FiSend size={15} /> Send Message</>}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
