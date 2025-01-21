import Link from "next/link";
import Image from "next/image";

/**
 * NavigationBar Component
 *
 * Main navigation component for the application featuring:
 * - Responsive layout (mobile-first design)
 * - Gradient background
 * - Appfigures logo with "Reviews" subtitle
 * - Navigation links with hover effects
 */
const NavigationBar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-700 p-5">
      {/* Container with responsive flex layout */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        {/* Logo and branding section */}
        <Link
          href="/"
          className="text-white font-bold flex items-center relative"
        >
          {/* Optimized logo image with priority loading */}
          <Image
            src="/images/logos/appfigures-logo-full.svg"
            alt="Appfigures Logo"
            width={120}
            height={24}
            className="h-5 sm:h-6"
            priority // Ensures early loading of logo
          />
          {/* "Reviews" subtitle with positioning */}
          <span className="absolute -bottom-3 right-0 text-xs text-blue-500 translate-x-4 sm:translate-x-6">
            Reviews
          </span>
        </Link>

        {/* Navigation links section */}
        <div className="flex flex-wrap justify-center gap-5 sm:space-x-8">
          {/* Home link */}
          <Link href="/" className="text-primary hover:text-gray-300 text-base">
            Home
          </Link>
          {/* Reviews link */}
          <Link
            href="/reviews"
            className="text-primary hover:text-gray-300 text-base"
          >
            Reviews
          </Link>
          {/* Analytics link */}
          <Link
            href="/analytics"
            className="text-primary hover:text-gray-300 text-base"
          >
            Analytics
          </Link>
          {/* About link */}
          <Link
            href="/about"
            className="text-primary hover:text-gray-300 text-base"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
