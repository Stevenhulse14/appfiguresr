import { createAsyncThunk } from "@reduxjs/toolkit";
import { Review } from "@/types/reviews";

/**
 * Async thunk for fetching paginated reviews from the API
 * Includes error handling for API configuration and response
 * @param page - Current page number
 * @param count - Number of reviews per page
 * @returns Object containing reviews array, total count, and total pages
 */
export const fetchReviews = createAsyncThunk<
  { reviews: Review[]; total: number; pages: number },
  { page: number; count: number }
>("reviews/fetchReviews", async ({ page, count }) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) {
    throw new Error("API base URL not configured");
  }

  const response = await fetch(
    `${baseUrl}?page=${page}&count=${count}&sort=-date&products=56556`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch reviews");
  }
  return response.json();
});
