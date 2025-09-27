# Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, and vanilla JavaScript. Features a clean design, smooth animations, and mobile-first responsive layout.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fast Loading**: Optimized performance with minimal dependencies
- **SEO Friendly**: Semantic HTML structure with proper meta tags
- **Interactive Elements**: Smooth scrolling, hover effects, and form validation
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Cross-browser Support**: Works on all modern browsers

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── src/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   └── js/
│       └── main.js         # JavaScript functionality
├── dist/                   # Production build files (generated)
├── .github/
│   └── copilot-instructions.md
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with custom properties, Grid, and Flexbox
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Google Fonts**: Poppins font family
- **Live Server**: Development server with hot reload

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   This will start a live server at `http://localhost:3000` with hot reload enabled.

### Alternative Setup

If you prefer not to use Node.js, you can simply open `index.html` in your browser. However, using the development server is recommended for the best experience.

## 🔧 Available Scripts

- `npm run start` - Start development server on port 3000
- `npm run dev` - Start development server with file watching
- `npm run build` - Build production files (minified CSS and JS)
- `npm run serve` - Serve the project using http-server

## 🎨 Customization

### Personal Information

Update the following sections in `index.html`:

1. **Hero Section**: Update name, title, and description
2. **About Section**: Add your personal information and skills
3. **Projects Section**: Add your projects with descriptions and links
4. **Contact Section**: Update contact information and social links

### Styling

The CSS uses custom properties (CSS variables) for easy theming:

```css
:root {
    --primary-color: #3b82f6;    /* Primary blue color */
    --secondary-color: #64748b;   /* Secondary gray color */
    --accent-color: #f59e0b;     /* Accent yellow color */
    /* ... more variables */
}
```

### Adding New Sections

1. Add the HTML structure in `index.html`
2. Add corresponding styles in `src/css/styles.css`
3. Update navigation links if needed
4. Add any JavaScript functionality in `src/js/main.js`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌟 Key Features Explained

### Navigation
- Fixed header with smooth scroll navigation
- Mobile hamburger menu
- Active section highlighting

### Hero Section
- Typing animation effect
- Call-to-action buttons
- Profile image placeholder

### Projects Section
- Grid layout with hover effects
- Project cards with descriptions
- Links to live demos and source code

### Contact Form
- Form validation
- Success/error notifications
- Responsive design

### Interactive Elements
- Smooth scrolling
- Intersection Observer animations
- Back-to-top button
- Mobile menu toggle

## 🚀 Deployment Options

### 🚀 Quick Deploy (Recommended)

#### Option 1: Netlify CLI Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to your Netlify account
netlify login

# Deploy from project directory
netlify deploy --prod --dir .
```

#### Option 2: Drag & Drop (Easiest)
1. **Netlify**: Go to [netlify.com](https://netlify.com) → Drag your project folder to deploy

### 🔗 Git-Based Deployment (Automatic Updates)

#### GitHub + Netlify
1. Push your code to a GitHub repository
2. Go to [netlify.com](https://netlify.com) → "New site from Git"
3. Connect your GitHub repository
4. Build settings:
   - **Build command**: `npm run build` (optional)
   - **Publish directory**: `.` (current directory)
5. Deploy! Auto-deploys on every push to main branch



### 📋 Pre-Deployment Checklist

- [ ] Update personal information in `index.html`
- [ ] Add your real projects to the projects section
- [ ] Update contact information and social links
- [ ] Replace placeholder images with your photos
- [ ] Test the contact form functionality
- [ ] Verify all links work correctly
- [ ] Test responsive design on different devices

### 🌐 Custom Domain Setup

#### For Netlify:
1. Go to Site Settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions

### ⚡ Performance Optimization

Netlify automatically provides:
- **CDN** - Global content delivery
- **SSL** - HTTPS encryption  
- **Compression** - Gzip/Brotli compression
- **Caching** - Optimized cache headers (configured in netlify.toml)

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Chrome for Android (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to:

- Open an issue on GitHub
- Contact me via the contact form on the website
- Email: your.email@example.com

## 📸 Screenshots

*Add screenshots of your portfolio here to showcase the design*

---

**Made with ❤️ and modern web technologies**

Remember to:
- Replace placeholder content with your actual information
- Add your own projects and experiences
- Customize colors and styling to match your brand
- Test on multiple devices and browsers
- Optimize images and content for best performance