"use client";

import { Star, Share2, MessageCircle, Languages } from "lucide-react";
import { Review } from "@/types/reviews";

/**
 * Props interface for ReviewItem component
 */
interface ReviewItemProps {
  review: Review;
}

/**
 * ReviewItem Component
 * Displays a single review card with rating, content, and interactive elements
 *
 * @param {ReviewItemProps} props - Component props containing review data
 */
export default function ReviewItem({ review }: ReviewItemProps) {
  return (
    <div
      className="bg-orange-lighter rounded-lg p-5 shadow-lg flex flex-col min-h-[250px] relative group hover:animate-pulse-slow"
      style={{
        // Background styling with Appfigures logo watermark
        backgroundImage:
          'linear-gradient(rgba(255, 212, 173, 0.7), rgba(255, 212, 173, 0.7)), url("/images/logos/appfiguresLogo.png")',
        backgroundPosition: "95% 5%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50px auto",
      }}
    >
      {/* Rating and Title Section */}
      <div className="flex flex-col items-start mb-1">
        {/* Star Rating Display */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-8 h-8 ${
                i < Number(review.stars)
                  ? "text-blue-400 fill-current" // Filled star for ratings
                  : "text-gray-700" // Empty star
              }`}
            />
          ))}
        </div>
        {/* Review Title with truncation */}
        <h3 className="text-lg font-semibold text-primary line-clamp-1">
          {review.title}
        </h3>
      </div>

      {/* Review Content Section */}
      <div className="flex-1 flex flex-col">
        <p className="text-gray-700 mb-auto text-xxs line-clamp-3">
          {review.review}
        </p>
      </div>

      {/* Footer Section */}
      <div className="space-y-2">
        {/* Author and Date Information */}
        <div className="text-xxs text-gray-500 flex gap-1 items-center">
          <span>By {review.author} ·</span>
          <span>{formatDate(review.date)}</span>
        </div>
        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-2 border-t border-orange-light">
          {/* Translate Button */}
          <ActionButton icon={Languages} label="Translate" />
          {/* Share Button */}
          <ActionButton icon={Share2} label="Share" />
          {/* Reply Button */}
          <ActionButton icon={MessageCircle} label="Reply" />
        </div>
      </div>
    </div>
  );
}

/**
 * Helper component for action buttons
 */
const ActionButton = ({
  icon: Icon,
  label,
}: {
  icon: typeof Languages;
  label: string;
}) => (
  <button className="flex flex-col items-center gap-1 text-xs text-gray-600 hover:text-blue-500">
    <Icon className="w-3 h-3" />
    <span className="text-xxs">{label}</span>
  </button>
);

/**
 * Formats a date string into a localized, readable format
 *
 * @param {string} dateString - ISO date string to format
 * @returns {string} Formatted date (e.g., "January 1, 2024")
 */
function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}
