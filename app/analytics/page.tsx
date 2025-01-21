"use client";

import Image from "next/image";

export default function Analytics() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-12 rounded-lg shadow-2xl text-center max-w-4xl mx-auto">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpolygon points='0 0 20 0 10 10'/%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Title with animated border */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <h1 className="relative bg-yellow-400 px-8 py-3 rounded-full text-3xl font-bold text-gray-800 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              🚧 Under Construction 🚧
            </h1>
          </div>

          {/* Image with glow effect */}
          <div className="relative group transform hover:scale-105 transition-transform duration-300">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white p-6 rounded-lg shadow-xl">
              <Image
                src="/images/construction-worker.svg"
                alt="Construction Worker"
                width={250}
                height={250}
                className="animate-bounce-slow"
                priority
              />
            </div>
          </div>

          {/* Content section */}
          <div className="space-y-6 max-w-2xl">
            <p className="text-xl text-gray-700 leading-relaxed animate-fade-in">
              We're building something amazing! Our analytics dashboard is under
              construction.
            </p>
            <div className="bg-white/50 p-6 rounded-lg shadow-inner">
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Coming Soon:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center justify-center gap-2 hover:text-orange-600 transition-colors">
                  📊 View detailed review statistics
                </li>
                <li className="flex items-center justify-center gap-2 hover:text-orange-600 transition-colors">
                  📈 Track review trends over time
                </li>
                <li className="flex items-center justify-center gap-2 hover:text-orange-600 transition-colors">
                  🔍 Analyze user sentiment
                </li>
              </ul>
            </div>
          </div>

          {/* Return Home button */}
          <a
            href="/"
            className="mt-4 px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold shadow-lg transform hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
          >
            ← Return Home
          </a>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-yellow-200 rounded-full blur-xl opacity-50" />
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-32 h-32 bg-orange-200 rounded-full blur-xl opacity-50" />
      </div>
    </div>
  );
}
