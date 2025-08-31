# The Void - Digital Garden

A minimalist digital garden built with Astro, showcasing thoughts on technology, design, and development.

## 🚀 Features

- **Static Site Generation** with Astro
- **Content Collections** for organized writing
- **Dark/Light Theme** with system preference detection
- **Responsive Design** optimized for all devices
- **SEO Optimized** with meta tags and structured data
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Simple Analytics** with PostHog integration

## 📊 Analytics Setup

Clean PostHog integration following best practices:

### Quick Setup
1. **Get PostHog API Key** from [PostHog](https://posthog.com)
2. **Add Environment Variable**:
   ```bash
   PUBLIC_POSTHOG_KEY=phc_your_project_api_key_here
   ```
3. **Deploy** - Analytics start working automatically!

### Usage
```javascript
// User identification (when they sign in)
posthog.identify('user-123', { email: 'user@example.com' });

// Custom events (simple one-liner as needed)
posthog.capture('my event', { property: 'value' });

// Feature flags
if (posthog.isFeatureEnabled('new-feature')) {
  // Show new feature
}
```

### What's Tracked Automatically
- **Page views** - All navigation
- **User sessions** - Automatic session management  
- **Device/Browser data** - Technical information
- **Geographic data** - Location insights

For detailed setup, see:
- [`ai-docs/simple-analytics-setup.md`](ai-docs/simple-analytics-setup.md) - Basic usage
- [`ai-docs/environment-setup.md`](ai-docs/environment-setup.md) - Complete environment setup

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone and install
git clone <repository-url>
cd thevoid
npm install

# Add your PostHog API key
echo "PUBLIC_POSTHOG_KEY=phc_your_key_here" > .env.local

# Start development
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

### Project Structure
```
src/
├── components/          # Reusable Astro components
│   ├── posthog.astro   # Analytics integration
│   └── ...
├── content/            # Content collections
│   ├── garden/         # Blog posts/thoughts
│   └── projects/       # Project showcases
├── layouts/            # Page layouts
├── lib/                # Utility functions
├── pages/              # File-based routing
└── styles/             # Global styles
```

## 📝 Content Management

### Adding Blog Posts
Create `.mdx` files in `src/content/garden/`:

```mdx
---
title: "Your Post Title"
description: "Brief description"
publishDate: 2024-01-15
category: "technology"
tags: ["astro", "web-development"]
---

Your content here...
```

### Adding Projects
Create `.mdx` files in `src/content/projects/`:

```mdx
---
title: "Project Name"
description: "Project description"
image: "path/to/image.jpg"
link: "https://project-url.com"
github: "https://github.com/username/repo"
startDate: 2024-01-01
status: "completed"
tags: ["react", "typescript"]
---

Project details...
```

## 🎨 Customization

### Theme Colors
Modify in `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      'garden-primary': '#2d3a3a',
      'garden-secondary': '#5a6c6c',
      'garden-accent': '#8b5a3c',
      // ... more colors
    }
  }
}
```

### Fonts
- **Inter** for headings and UI elements
- **Source Serif 4** for body text

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel

# Add environment variables in dashboard:
# PUBLIC_POSTHOG_KEY=phc_your_key_here
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: dist
# Add PUBLIC_POSTHOG_KEY in environment variables
```

### Other Platforms
Static files in `dist/` can be hosted anywhere that supports static sites.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Analytics by [PostHog](https://posthog.com)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Fonts from [Google Fonts](https://fonts.google.com)
