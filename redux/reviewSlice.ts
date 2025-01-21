import { createSlice } from "@reduxjs/toolkit";
import type { Review, TimePeriod } from "@/types/reviews";
import { filterReviews, groupReviewsByDate } from "./helpers/reviewHelpers";
import { fetchReviews } from "./thunks/reviewThunks";

/**
 * Defines the shape of the review state in Redux store
 */
interface ReviewState {
  reviews: Review[]; // All fetched reviews
  loading: boolean; // Loading state for async operations
  error: string | null; // Error message if any
  keywordFilter: string; // Current keyword filter
  starFilter: number; // Current star rating filter
  selectedPeriod: TimePeriod; // Selected time period for grouping
  page: number; // Current page number
  count: 25 | 50 | 100 | 500; // Items per page
  totalPages: number; // Total number of pages
  totalReviews: number; // Total number of reviews
  filteredReviews: Review[]; // Reviews after applying filters
  groupedReviews: Record<TimePeriod, Review[]>; // Reviews grouped by time period
}

/**
 * Initial state for the review slice
 * Sets default values for all state properties
 */
const initialState: ReviewState = {
  reviews: [],
  loading: false,
  error: null,
  keywordFilter: "",
  starFilter: 0,
  selectedPeriod: "Today",
  page: 1,
  count: 25,
  totalPages: 1,
  totalReviews: 0,
  filteredReviews: [],
  groupedReviews: {
    Today: [],
    Yesterday: [],
    "This Week": [],
    "Last Week": [],
    "This Month": [],
    "Last Month": [],
    "Two Months Ago": [],
    "Three Months Ago": [],
  },
};

/**
 * Review slice containing reducers and actions for managing review state
 */
const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    /**
     * Updates keyword filter and recalculates filtered/grouped reviews
     */
    setKeywordFilter: (state, action) => {
      state.keywordFilter = action.payload;
      state.page = 1;
      state.filteredReviews = filterReviews(state.reviews, {
        keyword: action.payload,
        stars: state.starFilter,
      });
      state.groupedReviews = groupReviewsByDate(state.filteredReviews);
    },
    /**
     * Updates star rating filter and recalculates filtered/grouped reviews
     */
    setStarFilter: (state, action) => {
      state.starFilter = action.payload;
      state.page = 1;
      state.filteredReviews = filterReviews(state.reviews, {
        keyword: state.keywordFilter,
        stars: action.payload,
      });
      state.groupedReviews = groupReviewsByDate(state.filteredReviews);
    },
    /**
     * Updates the selected time period for viewing reviews
     */
    setSelectedPeriod: (state, action) => {
      state.selectedPeriod = action.payload;
    },
    /**
     * Updates the current page number for pagination
     */
    setPage: (state, action) => {
      state.page = action.payload;
    },
    /**
     * Updates items per page and resets to first page
     */
    setCount: (state, action) => {
      state.count = action.payload;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      /**
       * Handle pending state of fetchReviews
       */
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      /**
       * Handle successful fetchReviews response
       * Updates reviews and recalculates derived state
       */
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.reviews = action.payload.reviews;
        state.filteredReviews = filterReviews(action.payload.reviews, {
          keyword: state.keywordFilter,
          stars: state.starFilter,
        });
        state.groupedReviews = groupReviewsByDate(state.filteredReviews);
        state.totalReviews = action.payload.total;
        state.totalPages = Math.ceil(action.payload.total / state.count);

        // If current period has no reviews, select first period with reviews
        if (state.groupedReviews[state.selectedPeriod].length === 0) {
          const firstPeriodWithReviews = Object.entries(
            state.groupedReviews
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          ).find(([_, reviews]) => reviews.length > 0);
          if (firstPeriodWithReviews) {
            state.selectedPeriod = firstPeriodWithReviews[0] as TimePeriod;
          }
        }
      })
      /**
       * Handle fetchReviews error state
       * Resets reviews and sets error message
       */
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch reviews";
        state.reviews = [];
        state.filteredReviews = [];
        state.groupedReviews = initialState.groupedReviews;
      });
  },
});

// Re-export fetchReviews thunk for component use
export { fetchReviews };

// Export all actions
export const {
  setKeywordFilter,
  setStarFilter,
  setSelectedPeriod,
  setPage,
  setCount,
} = reviewSlice.actions;

// Export the reducer
export default reviewSlice.reducer;
