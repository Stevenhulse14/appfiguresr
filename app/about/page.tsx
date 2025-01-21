"use client";

import ThreeDTitle from "@/components/ThreeDTitle";

export default function About() {
  return (
    <div className="text-xs min-h-screen bg-gradient-to-r from-gradient-start to-gradient-end py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <ThreeDTitle>About Appfigures</ThreeDTitle>
            <p className="mt-2 text-gray-600">
              Learn how to make the most of your review management system
            </p>
          </div>

          {/* Video Section */}
          <div className="bg-orange-lighter rounded-lg p-5 shadow-lg mb-8">
            <div className="relative w-full mx-auto">
              <div className="aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/kp8C-1XOF-Y"
                  title="AppFigures Review Tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Key Features Card */}
            <div className="bg-orange-lighter rounded-lg p-5 shadow-lg flex flex-col min-h-[250px] relative group hover:animate-pulse-slow">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Key Features
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span>
                    Real-time review monitoring with instant notifications
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span>Advanced sentiment analysis and trend tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span>Smart response templates with AI suggestions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">✓</span>
                  <span>Comprehensive analytics dashboard</span>
                </li>
              </ul>
            </div>

            {/* Benefits Card */}
            <div className="bg-orange-lighter rounded-lg p-5 shadow-lg flex flex-col min-h-[250px] relative group hover:animate-pulse-slow">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Benefits
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">→</span>
                  <span>Streamline your review management process</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">→</span>
                  <span>Boost your app ratings with timely responses</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">→</span>
                  <span>Enhance user engagement and satisfaction</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">→</span>
                  <span>Make data-driven product decisions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technologies Used Section */}
          <div className="mt-8 bg-orange-lighter rounded-lg p-5 relative group hover:animate-pulse-slow">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Technologies Used
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Next.js */}
              <div className="h-32 flex items-end p-4 rounded-lg  hover:shadow-lg transition-all duration-300 bg-white bg-[url('/images/icons/next.webp')] bg-no-repeat bg-center bg-[length:70%] hover:bg-[length:75%] group">
                <span className="text-sm font-semibold bg-white/80 px-2 py-1 rounded backdrop-blur-sm w-full text-center group-hover:bg-white/90 transition-all">
                  Next.js 14
                </span>
              </div>

              {/* TypeScript */}
              <div className="h-32 flex items-end p-4 rounded-lg hover:shadow-lg transition-all duration-300 bg-white bg-[url('/images/icons/typescript.webp')] bg-no-repeat bg-center bg-[length:70%] hover:bg-[length:75%] group">
                <span className="text-sm font-semibold bg-white/80 px-2 py-1 rounded backdrop-blur-sm w-full text-center group-hover:bg-white/90 transition-all">
                  TypeScript
                </span>
              </div>

              {/* Redux Toolkit */}
              <div className="h-32 flex items-end p-4 rounded-lg hover:shadow-lg transition-all duration-300 bg-white bg-[url('/images/icons/redux.webp')] bg-no-repeat bg-center bg-[length:70%] hover:bg-[length:75%] group">
                <span className="text-sm font-semibold bg-white/80 px-2 py-1 rounded backdrop-blur-sm w-full text-center group-hover:bg-white/90 transition-all">
                  Redux Toolkit
                </span>
              </div>

              {/* Tailwind CSS */}
              <div className="h-32 flex items-end p-4 rounded-lg  hover:shadow-lg transition-all duration-300 bg-white bg-[url('/images/icons/tailwind.webp')] bg-no-repeat bg-center bg-[length:70%] hover:bg-[length:75%] group">
                <span className="text-sm font-semibold bg-white/80 px-2 py-1 rounded backdrop-blur-sm w-full text-center group-hover:bg-white/90 transition-all">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
