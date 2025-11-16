# Smart Waste Management System

A modern, responsive React web application designed to improve waste collection efficiency and promote sustainable recycling habits. The system integrates with IoT-enabled smart bins to monitor waste levels in real-time, alert municipal authorities for timely collection, and provides citizens with comprehensive information about nearby recycling centers and proper waste segregation practices.

## 🎯 Project Overview

The Smart Waste Management System addresses critical urban waste management challenges by:

- **Optimizing Collection Routes**: Real-time monitoring of bin fill levels enables efficient collection scheduling
- **Promoting Recycling**: Easy access to recycling center information encourages proper waste disposal
- **Educating Citizens**: Comprehensive waste segregation guide helps users make informed decisions
- **Improving Efficiency**: Automated alerts reduce manual monitoring and improve response times

## ✨ Key Features

### 📊 Dashboard

- **Real-time Bin Monitoring**: View all smart bins with current fill levels (0-100%)
- **Status Indicators**: Color-coded alerts (Green: Normal, Yellow: Getting Full, Red: Needs Collection)
- **Statistics Overview**:
  - Total smart bins in the network
  - Bins requiring immediate collection
  - Collection rate percentage
  - Recycling rate percentage
- **Detailed Bin Information**: Location, waste type, last collection date, and fill level progress bars
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🗺️ Recycling Centers

- **Search Functionality**: Find centers by name or address
- **Comprehensive Details**:
  - Full address and contact information
  - Operating hours
  - Distance from user location
  - Star ratings
- **Material Types**: Display of accepted waste materials (Plastic, Paper, Metal, Glass, Electronics, etc.)
- **Interactive Map**: Placeholder for Google Maps or Mapbox integration
- **Directions**: Quick access to navigation (ready for map API integration)

### 📚 Waste Segregation Guide

- **Category Filtering**: Filter by waste type (All, Recyclable, Organic, Hazardous, General)
- **8 Waste Types Covered**:
  - Plastic Bottles
  - Paper & Cardboard
  - Glass Containers
  - Food Scraps
  - Batteries
  - Electronics
  - Textiles
  - Mixed Waste
- **Step-by-Step Instructions**: Clear disposal guidelines for each waste type
- **Visual Indicators**: Color-coded categories for easy identification
- **Pro Tips**: Helpful hints for proper waste handling
- **Educational Content**: Information about why proper segregation matters

### 🔔 Alerts & Notifications

- **Alert Types**:
  - Urgent (bins needing immediate collection)
  - Warning (high fill levels)
  - Info (scheduled collections)
  - Success (completed collections)
- **Status Filtering**: Filter by Pending, Scheduled, or Completed
- **Statistics Dashboard**: Overview of alert counts by status
- **Action Buttons**: Schedule collection and view details for pending alerts
- **Location Information**: Bin location and timestamp for each alert

## 🛠️ Tech Stack

### Core Technologies

- **React 18.2.0** - Modern React with hooks and functional components
- **Vite 5.0.8** - Next-generation frontend build tool for fast development
- **React Router DOM 6.20.0** - Declarative routing for single-page applications

### Styling & UI

- **Tailwind CSS 3.3.6** - Utility-first CSS framework for rapid UI development
- **PostCSS 8.4.32** - CSS transformation tool
- **Autoprefixer 10.4.16** - Automatic vendor prefixing
- **Lucide React 0.294.0** - Beautiful, customizable icon library

### Development Tools

- **@vitejs/plugin-react 4.2.1** - Vite plugin for React support
- **@types/react 18.2.43** - TypeScript definitions for React
- **@types/react-dom 18.2.17** - TypeScript definitions for React DOM

## 📁 Project Structure

```
smart-waste-management-system/
├── public/                    # Static assets (if any)
├── src/
│   ├── components/
│   │   └── Layout.jsx         # Main application layout with navigation
│   │                          # - Header with logo and branding
│   │                          # - Desktop navigation menu
│   │                          # - Mobile bottom navigation bar
│   │                          # - Active route highlighting
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx     # Smart bin monitoring dashboard
│   │   │                     # - Bin status cards
│   │   │                     # - Statistics overview
│   │   │                     # - Real-time fill level indicators
│   │   │
│   │   ├── RecyclingCenters.jsx  # Recycling center finder
│   │   │                          # - Search functionality
│   │   │                          # - Center listings with details
│   │   │                          # - Map placeholder
│   │   │
│   │   ├── WasteGuide.jsx    # Waste segregation guide
│   │   │                     # - Category filtering
│   │   │                     # - Waste type cards
│   │   │                     # - Disposal instructions
│   │   │
│   │   └── Alerts.jsx        # Alerts and notifications
│   │                         # - Alert filtering
│   │                         # - Status management
│   │                         # - Statistics display
│   │
│   ├── App.jsx               # Main application component
│   │                         # - Router configuration
│   │                         # - Route definitions
│   │
│   ├── main.jsx              # Application entry point
│   │                         # - React DOM rendering
│   │                         # - Strict mode enabled
│   │
│   └── index.css             # Global styles
│                             # - Tailwind directives
│                             # - Base styles
│
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
│                             # - Custom primary color palette
│                             # - Content paths
├── postcss.config.js         # PostCSS configuration
└── .gitignore                # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 16.0.0 or higher
- **npm**: Version 7.0.0 or higher (comes with Node.js)
- **Modern Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

### Installation

1. **Clone the repository** (or navigate to the project directory):

   ```bash
   git clone <repository-url>
   cd smart-waste-management-system
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   If you encounter network issues:

   ```bash
   npm cache clean --force
   npm install --prefer-offline --no-audit
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser**:
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)
   - The application will automatically reload when you make changes

### Available Scripts

| Command           | Description                                               |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Start development server with hot module replacement      |
| `npm run build`   | Build the application for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally                      |

## 🏗️ Build for Production

1. **Create production build**:

   ```bash
   npm run build
   ```

   This creates an optimized production build in the `dist/` directory.

2. **Preview production build**:

   ```bash
   npm run preview
   ```

   This serves the production build locally for testing.

3. **Deploy**:
   - The `dist/` folder contains all static files ready for deployment
   - Deploy to any static hosting service:
     - **Vercel**: `vercel --prod`
     - **Netlify**: Drag and drop `dist/` folder
     - **GitHub Pages**: Configure to serve from `dist/`
     - **AWS S3**: Upload `dist/` contents to S3 bucket

## 📱 Responsive Design

The application is fully responsive with breakpoints optimized for:

- **Mobile**: < 768px (bottom navigation bar)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px (top navigation menu)

### Mobile Features

- Bottom navigation bar for easy thumb access
- Touch-friendly button sizes
- Optimized card layouts
- Collapsible sections

### Desktop Features

- Top navigation menu
- Multi-column layouts
- Hover effects and transitions
- Expanded information displays

## 🎨 Design System

### Color Palette

The application uses a custom green color scheme for the primary brand:

- **Primary Green**: `#22c55e` (Tailwind's green-500)
- **Status Colors**:
  - Success/Green: `#16a34a` (green-600)
  - Warning/Yellow: `#ca8a04` (yellow-600)
  - Error/Red: `#dc2626` (red-600)
  - Info/Blue: `#2563eb` (blue-600)

### Typography

- **Font Family**: System font stack (San Francisco, Segoe UI, Roboto, etc.)
- **Headings**: Bold, large sizes for hierarchy
- **Body**: Regular weight, readable sizes

### Components

- **Cards**: White background with subtle shadows
- **Buttons**: Rounded corners, hover states, primary/secondary variants
- **Icons**: Lucide React icons, consistent sizing
- **Status Badges**: Color-coded, rounded pills

## 🔌 API Integration (Future)

Currently, the application uses mock data. To integrate with a backend API:

### Expected Data Structures

**Smart Bins**:

```javascript
{
  id: number,
  location: string,
  level: number,        // 0-100
  status: string,       // 'low' | 'medium' | 'full'
  lastCollection: string,
  type: string          // 'General' | 'Recyclable'
}
```

**Recycling Centers**:

```javascript
{
  id: number,
  name: string,
  address: string,
  phone: string,
  hours: string,
  distance: string,
  types: string[],
  rating: number
}
```

**Alerts**:

```javascript
{
  id: number,
  type: string,         // 'urgent' | 'warning' | 'info' | 'success'
  title: string,
  message: string,
  location: string,
  timestamp: string,
  status: string,       // 'pending' | 'scheduled' | 'completed'
  binId: number
}
```

### Integration Points

1. **Dashboard**: Replace `useEffect` mock data with API calls
2. **Recycling Centers**: Connect to location-based API
3. **Alerts**: Implement WebSocket for real-time updates
4. **Map Integration**: Add Google Maps or Mapbox API

## 🧪 Development Guidelines

### Code Style

- Use functional components with hooks
- Follow React best practices
- Use descriptive variable and function names
- Keep components focused and reusable

### File Naming

- Components: PascalCase (e.g., `Dashboard.jsx`)
- Utilities: camelCase (e.g., `formatDate.js`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_BASE_URL.js`)

### Component Structure

```javascript
// 1. Imports
import React, { useState, useEffect } from "react";
import { Icon } from "lucide-react";

// 2. Component definition
const Component = () => {
  // 3. State and hooks
  const [state, setState] = useState();

  // 4. Effects
  useEffect(() => {}, []);

  // 5. Helper functions
  const helper = () => {};

  // 6. Render
  return <div>...</div>;
};

export default Component;
```

## 🐛 Troubleshooting

### Common Issues

**Port already in use**:

```bash
# Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- --port 3000
```

**Module not found errors**:

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Tailwind styles not applying**:

- Ensure `tailwind.config.js` includes all content paths
- Check that `index.css` imports Tailwind directives
- Restart the dev server

**Network/Connection errors during install**:

```bash
# Clear npm cache
npm cache clean --force

# Use offline mode
npm install --prefer-offline

# Or use a different registry
npm config set registry https://registry.npmjs.org/
```

## 🚧 Future Enhancements

### Phase 1: Backend Integration

- [ ] RESTful API integration for real-time data
- [ ] WebSocket support for live bin updates
- [ ] User authentication and authorization
- [ ] Role-based access (Admin, Municipal, Citizen)

### Phase 2: Advanced Features

- [ ] Google Maps integration for recycling centers
- [ ] Interactive map with bin locations
- [ ] Route optimization for collection trucks
- [ ] Historical data and analytics dashboard
- [ ] Push notifications for mobile devices

### Phase 3: Mobile & PWA

- [ ] Progressive Web App (PWA) support
- [ ] Offline functionality
- [ ] Mobile app (React Native)
- [ ] QR code scanning for bin identification

### Phase 4: AI & Analytics

- [ ] Predictive analytics for collection scheduling
- [ ] Machine learning for waste pattern recognition
- [ ] Carbon footprint tracking
- [ ] Gamification and rewards system

### Phase 5: Community Features

- [ ] User reporting system
- [ ] Community challenges
- [ ] Educational content and quizzes
- [ ] Multi-language support (i18n)

## 📊 Performance Considerations

- **Code Splitting**: Implemented via React Router
- **Lazy Loading**: Can be added for route-based code splitting
- **Image Optimization**: Use WebP format and lazy loading
- **Bundle Size**: Current bundle is optimized with Vite
- **Caching**: Implement service worker for PWA

## 🔒 Security Considerations

- **Input Validation**: Implement for search and form inputs
- **XSS Protection**: React automatically escapes content
- **API Security**: Use HTTPS and authentication tokens
- **Environment Variables**: Store sensitive data in `.env` files

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📞 Support

For issues, questions, or suggestions:

- Open an issue on GitHub
- Contact the development team
- Check the documentation

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the blazing-fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library

---

**Built with ❤️ for a cleaner, more sustainable future**
