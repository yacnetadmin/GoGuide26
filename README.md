# 2026 Mission Trips Guide

A modern, interactive mission trips guide for York Alliance Family of Churches featuring 10 different mission opportunities with accordion-style navigation.

## Overview

This repository contains an embeddable HTML page that displays mission trip information for the York Alliance Family of Churches 2026 mission season. The page features a clean, modern design with Squarespace-style accordion functionality.

## Features

- **Accordion Navigation**: Click to expand/collapse each mission trip for detailed information
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Accessible**: Includes keyboard navigation and ARIA labels for screen readers
- **Clean Design**: Modern CSS with smooth transitions and hover effects
- **Easy to Embed**: Can be embedded as an iframe in any website

## Mission Trips Included

### Global Missions
1. **Brittany Manor House Renovation Trip (France)** - October
2. **Macedonia - Retreat for Roma Christian Church Leaders** - Mid-June
3. **Macedonia - ANA Regional Center Support** - June 2-10
4. **Rocky Road - Co-Working Space Workshop Team** - Fall (flexible dates)
5. **El Salvador - Church of Faith & Worship** - July 31 - August 8
6. **El Salvador - Prison Ministry Outreach** - July 15-20
7. **El Salvador - Kingdom Leaders Camp** - July 18-25

### Local Missions
8. **York City - Urban Exchange** - June 28 - July 4; Aug 2-8
9. **York City - Connect** - June 24-28
10. **Hope's Haven** - July 6-10

## Files

- `mission-trips.html` - Main HTML structure
- `mission-trips.css` - Stylesheet with all visual styling
- `mission-trips.js` - JavaScript for accordion functionality and interactions
- `README.md` - This file

## How to Use

### Standalone Page
Simply open `mission-trips.html` in any modern web browser.

### Embed in Website
Use an iframe to embed the page:

```html
<iframe src="mission-trips.html" width="100%" height="800" frameborder="0"></iframe>
```

### GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Select your main branch as the source
4. Your page will be available at: `https://[username].github.io/[repository-name]/mission-trips.html`

## Customization

### Colors
Edit CSS variables in `mission-trips.css`:
```css
:root {
    --primary-color: #999999;
    --accent-color: #4a90e2;
    /* Add more custom colors */
}
```

### Content
Edit the HTML in `mission-trips.html` to update:
- Trip details
- Dates
- Costs
- Contact information

### Accordion Behavior
Modify `mission-trips.js` to change:
- Animation speed
- Multiple accordions open at once
- Default opened accordion

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- ARIA labels for screen readers
- Keyboard navigation (Arrow keys, Enter, Space, Home, End)
- Focus indicators
- Reduced motion support for users with motion sensitivity

## Development

No build process required! This is vanilla HTML, CSS, and JavaScript.

To make changes:
1. Edit the relevant files
2. Refresh your browser to see changes
3. Test on multiple devices/browsers

## License

Copyright © 2026 York Alliance Family of Churches. All rights reserved.

## Contact

For questions about mission trips:
- Michael Carletti: mcarletti@yorkalliance.org
- Taylor Sharp: tsharp@yorkalliance.org

## Vision Statement

*"We pursue the transformational love of Jesus and seek to build communities that share this love with all people."*

---

**Built with ❤️ for the York Alliance Family of Churches**
