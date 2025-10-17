// Performance monitoring utilities
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Image optimization helper
export const getOptimizedImageUrl = (url, width, height, quality = 75) => {
  if (!url) return '/placeholder-game.jpg';

  // If using a CDN like Cloudinary, you can optimize images
  if (url.includes('cloudinary')) {
    return `${url}?w=${width}&h=${height}&q=${quality}&f_auto`;
  }

  // For local images, just return the URL
  return url;
};

// Lazy loading helper
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    { href: '/fonts/inter-regular.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    { href: '/fonts/inter-bold.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin;
    document.head.appendChild(link);
  });
};

// Game loading optimization
export const optimizeGameLoading = (gameUrl) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = gameUrl;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

// Cache management
export const cacheManager = {
  set: (key, data, ttl = 3600000) => { // Default TTL: 1 hour
    try {
      const item = {
        data,
        timestamp: Date.now(),
        ttl
      };
      localStorage.setItem(key, JSON.stringify(item));
    } catch (e) {
      console.warn('Failed to cache data:', e);
    }
  },

  get: (key) => {
    try {
      const item = JSON.parse(localStorage.getItem(key));
      if (!item) return null;

      const now = Date.now();
      if (now - item.timestamp > item.ttl) {
        localStorage.removeItem(key);
        return null;
      }

      return item.data;
    } catch (e) {
      console.warn('Failed to retrieve cached data:', e);
      return null;
    }
  },

  clear: () => {
    try {
      localStorage.clear();
    } catch (e) {
      console.warn('Failed to clear cache:', e);
    }
  }
};

// Debounce utility for search and other input events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle utility for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Analytics helper
export const trackEvent = (eventName, properties = {}) => {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, properties);
  }

  // Custom analytics
  console.log('Event tracked:', eventName, properties);

  // Send to your analytics endpoint
  fetch('/api/analytics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event: eventName,
      properties,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    })
  }).catch(e => console.warn('Failed to send analytics:', e));
};

// Game performance tracking
export const trackGamePerformance = (gameTitle, loadTime, gameplayTime) => {
  trackEvent('game_performance', {
    game_title: gameTitle,
    load_time: loadTime,
    gameplay_time: gameplayTime,
    device_type: /Mobile|Android|iPhone|iPad/.test(navigator.userAgent) ? 'mobile' : 'desktop'
  });
};