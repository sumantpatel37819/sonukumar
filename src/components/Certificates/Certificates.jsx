import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import './Certificates.css'

// Import all images in the certificate folder dynamically
const certModules = import.meta.glob('../../certificate/*.{jpg,png,jpeg}', { eager: true, import: 'default' })

const certificates = Object.entries(certModules).map(([path, url]) => {
    // Extract file name without extension
    const fileName = path.split('/').pop().split('.')[0]
    // Replace underscores with spaces for a cleaner title
    const title = fileName.replace(/_/g, ' ')
    
    return {
        id: fileName,
        title: title,
        image: url
    }
})

export default function Certificates() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="certificates" ref={ref} className="certificates-section">
            <div className="container">
                <p className="section-sub-tag"><span className="tag">My Achievements</span></p>
                <h2 className="section-title">Licenses & <span>Certifications</span></h2>
                <p className="section-subtitle">
                    A showcase of my skills and continuous learning journey.
                </p>
                
                <motion.div 
                    className="certificates-slider-container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="cert-swiper"
                    >
                        {certificates.map((cert) => (
                            <SwiperSlide key={cert.id} className="cert-slide">
                                <div className="certificate-card glass-card">
                                    <div className="cert-image-container">
                                        <img src={cert.image} alt={cert.title} loading="lazy" />
                                    </div>
                                    <div className="cert-info">
                                        <h3 className="cert-title">{cert.title}</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className="swiper-pagination"></div>
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )
}
