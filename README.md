# Appfigures Reviews

## Appfigures Reviews Product Demo

[![Watch the Demo](https://img.youtube.com/vi/kp8C-1XOF-Y/maxresdefault.jpg)](https://youtu.be/kp8C-1XOF-Y)

Click the image above to watch the demo video on YouTube.

# Appfigures Reviews Explorer

A modern web application built with Next.js, TypeScript, and React for exploring and analyzing user reviews of the Twitter iOS app. This project provides an intuitive interface to explore, analyze, and understand user feedback from the App Store through the Appfigures API.

## Project Overview

### Key Features

#### Review Management

- **Real-time Review Display**: Browse through the latest Twitter app reviews with a clean, responsive interface
- **Metadata Display**: Comprehensive app information and metadata from the Appfigures API
- **Dynamic Totals**: Real-time count of reviews based on active filters
- **Date-Based Grouping**: Intelligent organization of reviews into categories:
  - Today
  - Yesterday
  - This Week
  - Last Week
  - This Month

#### User Interface

- **Advanced Filtering**: Filter by keyword, star rating, and date
- **Responsive Design**: Fully responsive layout across all devices
- **Loading States**: Elegant loading skeletons for smooth user experience
- **Modern UI**: Clean interface with subtle animations and transitions
- **3D Title Effects**: Interactive animated title component

#### Technical Features

- **Pagination**: Initial load of 25 reviews with "Load more" functionality
- **Error Handling**: Graceful error boundaries and user feedback
- **Dynamic Updates**: Real-time filter updates without page reload

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React Hooks for local state Redux for global state
- **Data Fetching**: Server-side data fetching with Next.js
- **Animations**: Custom animations and transitions

## Project Structure

```bash
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   └── reviews/           # Reviews page
├── components/
│   ├── ReviewList.tsx     # List of reviews
│   ├── ReviewItem.tsx     # Single review component
│   ├── FilterOptions.tsx  # Filter controls
│   ├── ThreeDTitle.tsx    # 3D animated title
│   └── ErrorBoundary.tsx  # Error handling
├── lib/
│   └── api.ts            # API interaction logic
├── utils/
│   ├── formatDate.ts     # Date formatting helpers
│   └── filterReviews.ts  # Review filtering logic
└── styles/               # Global styles
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/appfigures-reviews.git
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file with:

```env
NEXT_PUBLIC_API_BASE_URL=https://appfigures.com/{missing}/jobs/twitter-reviews
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Core Features Implementation

### Review Display

- Comprehensive review information including:
  - Star rating
  - Review title and body
  - Author information
  - Submission date
  - Version information

### Filtering System

- Keyword-based search
- Star rating filters
- Date range selection
- Real-time filter updates

### Loading States

- Skeleton loading for reviews
- Smooth transitions between states
- Placeholder content during data fetch

## Future Enhancements

- [ ] Advanced sentiment analysis
- [ ] Export functionality
- [ ] User authentication
- [ ] Detailed analytics dashboard
- [ ] Review response tracking
- [ ] Comparative analysis features

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- Data provided by AppFigures API
- Built with modern web technologies
- Inspired by contemporary analytics dashboards
