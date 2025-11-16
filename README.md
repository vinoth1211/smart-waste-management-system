# Smart Waste Management System

A modern React web application designed to improve waste collection efficiency and promote recycling habits. The system uses IoT-enabled smart bins to monitor waste levels and alert municipal authorities for timely collection. It also provides users with information about nearby recycling centers and encourages proper waste segregation.

## Features

- **Dashboard**: Real-time monitoring of smart bin status, fill levels, and collection statistics
- **Recycling Centers**: Find nearby recycling centers with detailed information and directions
- **Waste Guide**: Comprehensive guide on proper waste segregation and disposal
- **Alerts & Notifications**: Stay informed about bin collection schedules and urgent alerts

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
smart-waste-management-system/
├── src/
│   ├── components/
│   │   └── Layout.jsx          # Main layout with navigation
│   ├── pages/
│   │   ├── Dashboard.jsx        # Smart bin monitoring dashboard
│   │   ├── RecyclingCenters.jsx # Recycling center finder
│   │   ├── WasteGuide.jsx       # Waste segregation guide
│   │   └── Alerts.jsx           # Alerts and notifications
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Features Overview

### Dashboard
- View all smart bins and their current fill levels
- Monitor collection statistics
- Track recycling rates
- Real-time status updates

### Recycling Centers
- Search for nearby recycling centers
- View center details (address, hours, accepted materials)
- Get directions to centers
- Filter by location

### Waste Guide
- Learn about different waste categories
- Step-by-step disposal instructions
- Tips for proper segregation
- Color-coded categories for easy understanding

### Alerts
- View all bin-related alerts
- Filter by status (pending, scheduled, completed)
- Track collection schedules
- Urgent notifications for full bins

## Future Enhancements

- Integration with Google Maps or Mapbox for interactive maps
- Real-time IoT data from smart bins via WebSocket
- User authentication and profiles
- Mobile app version
- Analytics and reporting dashboard
- Push notifications
- Multi-language support

## License

MIT
