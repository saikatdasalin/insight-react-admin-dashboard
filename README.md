# Insight - React Admin Dashboard

A modern, fully-featured admin dashboard built with React, TypeScript, and Tailwind CSS. Insight provides a clean, responsive interface for managing users, orders, products, analytics, and more.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.16-06B6D4?logo=tailwindcss&logoColor=white)

## Features

- **Dashboard** - KPI metrics overview with interactive revenue, traffic, and user activity charts
- **Analytics** - Revenue trends, traffic sources, sales by category, user growth, and performance tracking
- **User Management** - Search, filter, and manage users with role-based access (admin, manager, user)
- **Order Management** - Track orders with status workflow (pending, processing, completed, cancelled)
- **Product Catalog** - Manage products with inventory tracking and stock status indicators
- **Reports** - Generate financial, analytics, performance, marketing, and sales reports
- **Calendar** - Event scheduling with month navigation and event type categorization
- **Messages** - Real-time messaging interface with conversation list and online status
- **Settings** - Profile editing, appearance (light/dark theme), notification preferences, and security settings
- **Authentication** - Login system with protected routes and role-based access
- **Dark Mode** - Full light/dark theme support with system preference detection
- **Responsive Design** - Mobile-first layout with collapsible sidebar and adaptive components

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 3 + CSS Variables |
| UI Components | shadcn/ui (Radix UI primitives) |
| Charts | Recharts |
| Routing | React Router DOM 7 |
| Forms | React Hook Form + Zod validation |
| Icons | Lucide React |
| Notifications | Sonner (toast) |
| Date Utilities | date-fns + React Day Picker |

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/saikat-das-alin/insight-react-admin-dashboard.git
cd insight-react-admin-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## Demo Credentials

| Role | Email | Password |
|---|---|---|
| Admin | admin@example.com | admin123 |
| User | user@example.com | user123 |

## Project Structure

```
src/
├── assets/              # Static assets
├── components/
│   ├── layout/          # MainLayout, Sidebar, Header
│   ├── dashboard/       # Dashboard-specific widgets (MetricCard, charts)
│   ├── ui/              # 53 shadcn/ui components
│   └── common/          # Shared reusable components
├── context/             # AuthContext, ThemeContext, SidebarContext
├── data/                # Mock data for all pages
├── hooks/               # Custom hooks (use-mobile, use-toast)
├── lib/                 # Utility functions
├── pages/               # All page components (13 pages)
├── types/               # TypeScript interfaces
├── App.tsx              # Root component with routing
├── main.tsx             # Entry point
└── index.css            # Tailwind base styles + CSS variables
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## License

This project is open source and available under the [MIT License](LICENSE).
