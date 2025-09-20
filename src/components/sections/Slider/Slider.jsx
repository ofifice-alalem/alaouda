import React, { useState, useEffect, useCallback } from 'react';
import './Slider.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(null);

  const slides = [
    {
      image: "/img/slider/img-1.jpg",
      title: "المكاتب والكراسي",
      description: "مكاتب أنيقة وكراسي مريحة مصممة لدعم إنتاجيتك اليومية، مع خيارات متعددة تناسب الشركات الصغيرة والمؤسسات الكبيرة.",
      buttonText: "تسوق الآن",
      alt: "غرفة معيشة عصرية"
    },
    {
      image: "/img/slider/img-2.jpg",
      title: " المقاعد الدراسية",
      description: "مقاعد دراسية ومحاضرات بتصاميم عملية ومريحة، تضمن تجربة تعليمية أفضل وتناسب الاستخدام طويل الأمد",
      buttonText: "تعرف أكثر",
      alt: "غرف نوم أنيقة"
    },
    {
      image: "/img/slider/img-3.jpg",
      title: "الكنبات والجلسات",
      description: "كنبات وجلسات عصرية تضيف لمسة من الراحة والأناقة لمكاتبكم أو منازلكم، مع إمكانية التفصيل حسب الطلب",
      buttonText: "استكشف التصاميم",
      alt: "ديكورات مخصصة"
    }
  ];

  const goTo = useCallback((index) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  }, [currentIndex]);

  const next = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % slides.length);
  }, [slides.length]);

  const startAutoplay = useCallback(() => {
    if (!timer) {
      const newTimer = setInterval(next, 5000);
      setTimer(newTimer);
    }
  }, [timer, next]);

  const pauseAutoplay = useCallback(() => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  }, [timer]);

  const restartAutoplay = useCallback(() => {
    pauseAutoplay();
    startAutoplay();
  }, [pauseAutoplay, startAutoplay]);

  const handleItemClick = useCallback((index) => {
    goTo(index);
    restartAutoplay();
  }, [goTo, restartAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => pauseAutoplay();
  }, [startAutoplay, pauseAutoplay]);

  return (
    <section id="split-slider" className="section">
      <div className="split-slider">
        {/* Right: Text (40%) on desktop */}
        <div className="split-slider__right"
             onMouseEnter={pauseAutoplay}
             onMouseLeave={startAutoplay}>
          <div className="ss-texts">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`ss-text ${index === currentIndex ? 'active' : ''}`}
                data-index={index}
              >
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button className="cta-button">{slide.buttonText}</button>
              </div>
            ))}
          </div>
        </div>

        {/* Left: Images (60%) on desktop */}
        <div className="split-slider__left">
          <div className="ss-images" dir="rtl">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`ss-item ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleItemClick(index)}
              >
                <img src={slide.image} alt={slide.alt} />
                {/* Text overlay for mobile - will be moved here via CSS */}
                {index === currentIndex && (
                  <div className="ss-text-mobile">
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                    <button className="cta-button">{slide.buttonText}</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;