# FitClass - Fitness Class Booking & Management Platform

A modern, AI-powered fitness class booking and management platform built with Next.js and Sanity CMS.

## 🚀 Features

- **Class Booking System**: Browse and book fitness classes at various venues
- **Venue Management**: Manage multiple fitness venues with location data
- **Class Sessions**: Schedule and manage fitness class sessions
- **Activity Categories**: Organize classes by activity type (yoga, pilates, etc.)
- **User Profiles**: Personalized user profiles and booking history
- **Subscription Management**: Flexible subscription plans for users
- **AI Integration**: AI-powered agents and tools for intelligent features
- **Admin Dashboard**: Comprehensive admin panel for managing classes, bookings, and users
- **Distance Calculation**: Find nearby fitness venues based on user location
- **Live Content**: Real-time content updates with Sanity Live
- **Responsive Design**: Mobile-optimized UI with responsive components

## 🛠️ Tech Stack

### Frontend
- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

### Backend & CMS
- **Sanity CMS** - Headless CMS for content management
- **Sanity Studio** - Visual content editor
- **GROQ** - Query language for Sanity

### Utilities & Libraries
- **pnpm** - Fast, disk space efficient package manager
- **Biome** - Fast formatter and linter

### Key Integrations
- **Mapbox** - Location services for venue mapping
- **AI Agents** - Custom AI tools for intelligent features

## 📁 Project Structure

```
fitclass/
├── app/                          # Next.js app directory
│   ├── (app)/                    # Main app routes
│   ├── {admin}/                  # Admin section
│   ├── studio/                   # Sanity Studio routes
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── admin/                    # Admin-specific components
│   ├── app/                      # App-specific components
│   ├── loaders/                  # Loading state components
│   ├── providers/                # Context providers
│   └── ui/                       # Reusable UI components
├── lib/                          # Utility functions & hooks
│   ├── actions/                  # Server actions
│   │   ├── bookings.ts           # Booking-related actions
│   │   └── profile.ts            # Profile-related actions
│   ├── ai/                       # AI integration
│   │   ├── agents.ts             # AI agents
│   │   └── tools.ts              # AI tools
│   ├── constants/                # Constants
│   ├── hooks/                    # Custom React hooks
│   ├── store/                    # State management
│   ├── utils/                    # Utility functions
│   └── subscription.ts           # Subscription logic
├── public/                       # Static assets
├── sanity/                       # Sanity CMS configuration
│   ├── env.ts                    # Environment config
│   ├── structure.ts              # Studio structure
│   ├── lib/                      # Sanity utilities
│   │   ├── client.ts             # Sanity client
│   │   ├── writeClient.ts        # Write client
│   │   ├── image.ts              # Image utilities
│   │   ├── live.ts               # Live content
│   │   └── queries/              # GROQ queries
│   └── schemaTypes/              # Content type schemas
├── biome.json                    # Biome config
├── next.config.ts                # Next.js config
├── sanity.config.ts              # Sanity config
├── tsconfig.json                 # TypeScript config
└── pnpm-workspace.yaml           # Workspace config
```

## 🎯 Content Types (Sanity Schema)

- **Activity Types** - Fitness class categories (Yoga, Pilates, etc.)
- **Booking** - User bookings for class sessions
- **Category** - Activity categories
- **Class Session** - Individual fitness classes
- **Venue** - Fitness studios and gyms with location data

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- pnpm 8+

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd fitclass
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

4. **Deploy Sanity schema (if needed)**
```bash
pnpm sanity schema deploy
```

### Development

Start the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

Access Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio).

### Build

Build for production:
```bash
pnpm build
```

Start production server:
```bash
pnpm start
```

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter
- `pnpm format` - Format code with Biome
- `pnpm type-check` - Check TypeScript types

## 🔑 Key Files

- [sanity.config.ts](sanity.config.ts) - Sanity CMS configuration
- [next.config.ts](next.config.ts) - Next.js configuration
- [tsconfig.json](tsconfig.json) - TypeScript configuration
- [lib/subscription.ts](lib/subscription.ts) - Subscription management logic
- [lib/ai/agents.ts](lib/ai/agents.ts) - AI agent implementations
- [sanity/lib/client.ts](sanity/lib/client.ts) - Sanity client setup

## 🔐 Security

- API tokens are stored securely in environment variables
- Public and private Sanity clients are separated
- Type-safe queries with TypeScript and GROQ

## 📚 Documentation

For Sanity CMS documentation, visit: [sanity.io/docs](https://www.sanity.io/docs)

For Next.js documentation, visit: [nextjs.org/docs](https://nextjs.org/docs)

## 📦 Dependencies

Main dependencies include:
- `next` - React framework
- `sanity` - CMS client library
- `next-sanity` - Sanity + Next.js integration
- `react` & `react-dom` - UI library

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

[Add your license information here]

## 👥 Authors

[Add author information here]

---

**Note**: This is a modern, full-featured fitness booking platform. For specific feature documentation or API details, refer to the inline code comments and schema definitions in the respective directories.
