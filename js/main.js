// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
  });
}

// Header Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Scroll to Top Button
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('active');
  } else {
    scrollTopBtn.classList.remove('active');
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Scroll Animations
const fadeElements = document.querySelectorAll('.fade-in, .card, .timeline-item, .gallery-item, .brand-card');

const fadeInOnScroll = () => {
  fadeElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineAnimation = () => {
  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const itemVisible = 150;
    
    if (itemTop < window.innerHeight - itemVisible) {
      item.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', timelineAnimation);
window.addEventListener('load', timelineAnimation);

// Lightbox Functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-content img');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentImageIndex = 0;

if (galleryItems.length > 0) {
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentImageIndex = index;
      openLightbox(item.querySelector('img').src);
    });
  });
}

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
  lightboxImg.src = galleryItems[currentImageIndex].querySelector('img').src;
}

function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
  lightboxImg.src = galleryItems[currentImageIndex].querySelector('img').src;
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxNext) {
  lightboxNext.addEventListener('click', showNextImage);
}

if (lightboxPrev) {
  lightboxPrev.addEventListener('click', showPrevImage);
}

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (e) => {
  if (lightbox.classList.contains('active')) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
  }
});

// Technology Progress Bars Animation
const progressBars = document.querySelectorAll('.progress-bar');

const animateProgressBars = () => {
  progressBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    const barVisible = 100;
    
    if (barTop < window.innerHeight - barVisible) {
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
    }
  });
};

window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);

// Brand Counter Animation
const counters = document.querySelectorAll('.counter');

const animateCounters = () => {
  counters.forEach(counter => {
    const counterTop = counter.getBoundingClientRect().top;
    const counterVisible = 100;
    
    if (counterTop < window.innerHeight - counterVisible && !counter.classList.contains('animated')) {
      const target = +counter.getAttribute('data-target');
      const duration = 2000; // 2 seconds
      const step = target / (duration / 16); // 60fps
      let current = 0;
      
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.ceil(current) + '+';
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + '+';
          counter.classList.add('animated');
        }
      };
      
      updateCounter();
    }
  });
};

window.addEventListener('scroll', animateCounters);
window.addEventListener('load', animateCounters);

// Future Page Specific Animations
const futureYears = document.querySelectorAll('.future-year');

const animateFutureYears = () => {
  futureYears.forEach(year => {
    const yearTop = year.getBoundingClientRect().top;
    const yearVisible = 100;
    
    if (yearTop < window.innerHeight - yearVisible) {
      year.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', animateFutureYears);
window.addEventListener('load', animateFutureYears);

// Parallax Effect for Hero Sections
const parallaxElements = document.querySelectorAll('.hero');

const parallaxEffect = () => {
  parallaxElements.forEach(element => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    element.style.transform = `translate3d(0px, ${rate}px, 0px)`;
  });
};

window.addEventListener('scroll', parallaxEffect);

// Typing Effect for Future Vision
const typeWriter = (element, text, speed = 50) => {
  let i = 0;
  element.innerHTML = '';
  
  const typing = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, speed);
};

// Initialize typing effect if element exists
const visionText = document.querySelector('.vision-text');
if (visionText) {
  const text = visionText.getAttribute('data-text');
  typeWriter(visionText, text);
}

// Enhanced Loading Animation
window.addEventListener('load', () => {
  // Add loaded class to body for final animations
  document.body.classList.add('loaded');
  
  // Animate progress bars
  const progressBars = document.querySelectorAll('.timeline-progress');
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
});

// Intersection Observer for advanced animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animateOnScroll = document.querySelectorAll('.fade-in, .card, .timeline-item');
  animateOnScroll.forEach(el => observer.observe(el));
});

// Smooth Page Transitions
document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in animation to body content
  document.body.style.opacity = 0;
  
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = 1;
  }, 100);
  
  // Add loading animation to hero section
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.animation = 'fadeInUp 1s ease-out';
  }
});

// Prevent default behavior for internal links to enable smooth transitions
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.innerHTML = '☰';
    }
  });
});

// Handle window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
    hamburger.innerHTML = '☰';
  }
});
// Enhanced 3D Model Handling
const initialize3DModels = () => {
  const modelContainers = document.querySelectorAll('.model-container');
  
  modelContainers.forEach(container => {
    const iframe = container.querySelector('iframe');
    const placeholder = container.querySelector('.model-placeholder');
    const loading = container.querySelector('.model-loading');
    
    if (iframe && placeholder && loading) {
      // Initially show loading, hide placeholder
      loading.style.display = 'flex';
      placeholder.style.display = 'none';
      iframe.style.opacity = '0';
      
      iframe.onload = () => {
        // If iframe loads successfully
        setTimeout(() => {
          loading.style.display = 'none';
          iframe.style.opacity = '1';
          iframe.style.transition = 'opacity 0.5s ease';
        }, 1000);
      };
      
      iframe.onerror = () => {
        // If iframe fails to load
        setTimeout(() => {
          loading.style.display = 'none';
          iframe.style.display = 'none';
          placeholder.style.display = 'flex';
        }, 2000);
      };
      
      // Fallback: if iframe doesn't load within 5 seconds
      setTimeout(() => {
        if (loading.style.display !== 'none') {
          loading.style.display = 'none';
          iframe.style.display = 'none';
          placeholder.style.display = 'flex';
        }
      }, 5000);
    }
  });
};

// Model preview functionality
function showModel(modelType) {
  const models = {
    nokia: 'https://sketchfab.com/models/8eb89c6a5c8e4c7a8c9f3e3e3e3e3e3e/embed',
    smartphone: 'https://sketchfab.com/models/8eb89c6a5c8e4c7a8c9f3e3e3e3e3e3e/embed',
    future: 'https://sketchfab.com/models/8eb89c6a5c8e4c7a8c9f3e3e3e3e3e3e/embed'
  };
  
  // In a real implementation, you would switch the iframe src
  alert(`Loading ${modelType} model...\n\nIn a full implementation, this would load the appropriate 3D model.`);
}

// Enhanced era animations
const animateEras = () => {
  const eras = document.querySelectorAll('.era');
  
  eras.forEach((era, index) => {
    const eraTop = era.getBoundingClientRect().top;
    const eraVisible = 100;
    
    if (eraTop < window.innerHeight - eraVisible) {
      setTimeout(() => {
        era.classList.add('visible');
      }, index * 200);
    }
  });
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
  initialize3DModels();
  window.addEventListener('scroll', animateEras);
  animateEras();
});