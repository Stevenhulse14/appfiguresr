import { Review } from "@/types/reviews";

/**
 * Filters reviews based on keyword and star rating
 * @param reviews - Array of reviews to filter
 * @param filters - Object containing keyword and stars filter criteria
 * @returns Filtered array of reviews
 */
export function filterReviews(
  reviews: Review[],
  filters: { keyword: string; stars: number }
) {
  let filtered = [...reviews];

  if (filters.keyword) {
    const searchTerm = filters.keyword.toLowerCase();
    filtered = filtered.filter(
      (review) =>
        review.review.toLowerCase().includes(searchTerm) ||
        review.title.toLowerCase().includes(searchTerm) ||
        review.author.toLowerCase().includes(searchTerm)
    );
  }

  if (filters.stars > 0) {
    filtered = filtered.filter(
      (review) => Number(review.stars) === filters.stars
    );
  }

  return filtered;
}

/**
 * Groups reviews into time-based categories (Today, Yesterday, This Week, etc.)
 * Uses the review's date to determine which group it belongs to
 * @param reviews - Array of reviews to group
 * @returns Object with reviews grouped by time period
 */
export function groupReviewsByDate(reviews: Review[]) {
  const groups = {
    Today: [] as Review[],
    Yesterday: [] as Review[],
    "This Week": [] as Review[],
    "Last Week": [] as Review[],
    "This Month": [] as Review[],
    "Last Month": [] as Review[],
    "Two Months Ago": [] as Review[],
    "Three Months Ago": [] as Review[],
  };

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const thisWeekStart = new Date(today);
  thisWeekStart.setDate(today.getDate() - today.getDay());

  const lastWeekStart = new Date(thisWeekStart);
  lastWeekStart.setDate(thisWeekStart.getDate() - 7);

  const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const twoMonthsAgoStart = new Date(
    today.getFullYear(),
    today.getMonth() - 2,
    1
  );
  const threeMonthsAgoStart = new Date(
    today.getFullYear(),
    today.getMonth() - 3,
    1
  );

  reviews.forEach((review) => {
    const reviewDate = new Date(review.date);

    if (reviewDate.toDateString() === today.toDateString()) {
      groups["Today"].push(review);
    } else if (reviewDate.toDateString() === yesterday.toDateString()) {
      groups["Yesterday"].push(review);
    } else if (reviewDate >= thisWeekStart && reviewDate < today) {
      groups["This Week"].push(review);
    } else if (reviewDate >= lastWeekStart && reviewDate < thisWeekStart) {
      groups["Last Week"].push(review);
    } else if (reviewDate >= thisMonthStart) {
      groups["This Month"].push(review);
    } else if (reviewDate >= lastMonthStart && reviewDate < thisMonthStart) {
      groups["Last Month"].push(review);
    } else if (reviewDate >= twoMonthsAgoStart && reviewDate < lastMonthStart) {
      groups["Two Months Ago"].push(review);
    } else if (
      reviewDate >= threeMonthsAgoStart &&
      reviewDate < twoMonthsAgoStart
    ) {
      groups["Three Months Ago"].push(review);
    }
  });

  return groups;
}
