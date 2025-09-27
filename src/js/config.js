// Environment Configuration
// This file handles environment variables for both development and production

const config = {
    // Check if we're in development or production
    isDevelopment: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',
    
    // Site configuration
    site: {
        name: 'Shrestha Verdhan Portfolio',
        email: 'verdhanchiku@gmail.com',
        url: window.location.origin
    },
    
    // Social media links
    social: {
        github: 'https://github.com/arkham-knight07',
        linkedin: 'https://linkedin.com/in/shrestha-verdhan',
        twitter: '#', // Add your Twitter if you have one
        instagram: '#' // Add your Instagram if you have one
    },
    
    // Project repositories
    projects: {
        renewableEnergy: 'https://github.com/arkham-knight07/Renewable-Energy-Simulation.git',
        brainbuddy: 'https://github.com/arkham-knight07/BRAINBUDDY.git'
    },
    
    // Form configuration (for contact form)
    form: {
        // You can integrate with services like FormSpree, EmailJS, or Vercel's edge functions
        endpoint: null, // Set this when you add form handling
        method: 'POST'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} else {
    window.siteConfig = config;
}