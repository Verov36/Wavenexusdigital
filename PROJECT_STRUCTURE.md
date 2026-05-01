# WaveNexus Digital Invest - Project Structure

This project follows Next.js-style patterns and best practices while running in a React/Vite environment.

## Directory Structure

```
src/
├── app/
│   ├── components/          # React components
│   │   ├── ui/             # UI component library (shadcn/ui)
│   │   └── WaveNexusWebsite.tsx  # Main website component
│   ├── lib/                # Utilities and helpers
│   │   ├── utils/          # Utility functions
│   │   │   └── scroll.ts   # Smooth scrolling utilities
│   │   ├── analytics.ts    # Google Analytics setup
│   │   └── constants.ts    # App-wide constants and data
│   ├── metadata.ts         # SEO metadata configuration
│   └── App.tsx             # Root application component
├── imports/                # Imported assets (images, logos)
└── styles/                 # Global styles and themes
```

## Key Files

### `/src/app/App.tsx`
Root component that initializes the application, sets up metadata, and loads analytics.

### `/src/app/lib/constants.ts`
Central location for all app data:
- Company information (name, contact details, calendar link)
- Services offered
- Pricing tiers
- Portfolio items
- FAQs
- Process steps

### `/src/app/lib/analytics.ts`
Google Analytics 4 integration with helper functions for:
- Initializing GA4
- Tracking page views
- Tracking custom events

### `/src/app/lib/utils/scroll.ts`
Smooth scrolling utilities for internal navigation.

### `/src/app/metadata.ts`
SEO metadata configuration including:
- Page title
- Meta description
- Keywords
- Open Graph tags

## Next.js-Style Patterns Used

1. **Separation of Concerns**: Data, logic, and UI are separated into dedicated files
2. **Utility Functions**: Helper functions are organized in `/lib` directory
3. **Constants Management**: All configuration and data in centralized constants file
4. **Metadata Handling**: Dedicated metadata configuration similar to Next.js metadata API
5. **Analytics Integration**: Modular analytics setup with tracking utilities
6. **Component Organization**: Clean component structure with proper imports

## Adding New Content

### Add a New Service
Edit `/src/app/lib/constants.ts` and add to the `services` array.

### Add a New Pricing Tier
Edit `/src/app/lib/constants.ts` and add to the `pricing` array.

### Add a Portfolio Item
Edit `/src/app/lib/constants.ts` and add to the `portfolio` array with optional `url` field.

### Update Company Information
Edit `/src/app/lib/constants.ts` in the `COMPANY_INFO` object.

### Track Custom Events
Import `trackEvent` from `/src/app/lib/analytics.ts` and call:
```typescript
trackEvent("action", "category", "label", value);
```

## Performance Optimizations

- Preconnect to Google Analytics domains
- Lazy loading of analytics scripts
- Optimized animations with GPU acceleration
- Image optimization with proper loading attributes
- CSS containment for better rendering

## Development

This project runs in Figma Make environment:
- Vite dev server runs automatically
- Hot module reloading enabled
- Do NOT run `vite build` manually
- Entry point is auto-generated

## Tech Stack

- **Framework**: React 18.3
- **Build Tool**: Vite 6.3
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Analytics**: Google Analytics 4
