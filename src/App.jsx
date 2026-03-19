import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Timeline from './components/Timeline/Timeline'
import Research from './components/Research/Research'
import GitHubActivity from './components/GitHubActivity/GitHubActivity'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1800)
        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return (
            <div className="loader-screen">
                <div className="loader-content">
                    <div className="loader-ring"></div>
                    <div className="loader-text">
                        <span className="gradient-text">SK</span>
                    </div>
                    <p className="loader-sub">Initializing systems...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Timeline />
                <Research />
                <GitHubActivity />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
