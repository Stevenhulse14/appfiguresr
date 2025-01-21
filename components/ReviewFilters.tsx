"use client";

import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft, ChevronRight, Search, Star } from "lucide-react";
import { RootState } from "@/redux/store";
import {
  setKeywordFilter,
  setStarFilter,
  setPage,
  setCount,
} from "@/redux/reviewSlice";

/**
 * ReviewFilters Component
 *
 * Provides filtering and pagination controls for the reviews list including:
 * - Keyword search
 * - Star rating filter
 * - Items per page selection
 * - Pagination controls
 * - Results count display
 */
export default function ReviewFilters() {
  const dispatch = useDispatch();
  // Get current filter state from Redux
  const {
    count,
    loading,
    page,
    totalPages,
    totalReviews,
    keywordFilter,
    starFilter,
  } = useSelector((state: RootState) => state.reviews);

  return (
    <div className="bg-orange-lighter rounded-lg p-4">
      <div className="flex flex-wrap items-center gap-4">
        {/* Search Bar with icon */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-700" />
          <input
            type="text"
            value={keywordFilter}
            onChange={(e) => dispatch(setKeywordFilter(e.target.value))}
            placeholder="Search reviews..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg text-xxs bg-white/10 text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Star Rating Filter Buttons */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() =>
                // Toggle star filter: if already selected, clear it (0), otherwise set it
                dispatch(setStarFilter(rating === starFilter ? 0 : rating))
              }
              className={`px-3 py-2 rounded-lg text-xxs flex items-center gap-1 ${
                rating === starFilter
                  ? "bg-primary text-blue-500"
                  : "bg-white/10 text-gray-700 hover:bg-orange-lighter"
              }`}
            >
              {rating}
              <Star
                className="w-4 h-4"
                fill={rating === starFilter ? "currentColor" : "none"}
              />
            </button>
          ))}
        </div>

        {/* Results Per Page Selector */}
        <select
          value={count}
          onChange={(e) => {
            dispatch(setCount(Number(e.target.value) as 25 | 50 | 100 | 500));
            dispatch(setPage(1)); // Reset to first page when changing items per page
          }}
          className="px-3 py-2.5 rounded-lg text-xxs bg-white/10 text-gray-700"
        >
          <option value={25}>25 per page</option>
          <option value={50}>50 per page</option>
          <option value={100}>100 per page</option>
          <option value={500}>500 per page</option>
        </select>

        {/* Pagination Navigation */}
        <div className="flex items-center gap-2">
          {/* Previous Page Button */}
          <button
            onClick={() => dispatch(setPage(Math.max(1, page - 1)))}
            disabled={page === 1 || loading}
            className="p-2.5 rounded-lg bg-white/10 text-gray-700 hover:bg-orange-lighter disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          {/* Page Information */}
          <span className="text-xxs text-gray-700">
            Page {page} of {totalPages}
          </span>
          {/* Next Page Button */}
          <button
            onClick={() => dispatch(setPage(Math.min(totalPages, page + 1)))}
            disabled={page === totalPages || loading}
            className="p-2.5 rounded-lg bg-white/10 text-gray-700 hover:bg-orange-lighter disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Total Results Counter */}
        <span className="text-xxs text-gray-700">
          Showing {Math.min(page * count, totalReviews)} of {totalReviews}{" "}
          reviews
        </span>
      </div>
    </div>
  );
}
