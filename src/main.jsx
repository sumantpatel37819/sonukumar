import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import IPRPage from './pages/IPRPage.jsx'
import AayiyePage from './pages/AayiyePage.jsx'
import QuadFalconPage from './pages/QuadFalconPage.jsx'
import TLIRPage from './pages/TLIRPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter basename="/sonukumar">   {/* ✅ ADD THIS */}
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/ipr" element={<IPRPage />} />
                    <Route path="/aayiye" element={<AayiyePage />} />
                    <Route path="/quad-falcon" element={<QuadFalconPage />} />
                    <Route path="/tlir" element={<TLIRPage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
)
