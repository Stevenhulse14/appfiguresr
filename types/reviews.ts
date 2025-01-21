// Defines possible time periods for grouping reviews
export type TimePeriod =
  | "Today"
  | "Yesterday"
  | "This Week"
  | "Last Week"
  | "This Month"
  | "Last Month"
  | "Two Months Ago"
  | "Three Months Ago";

/**
 * Represents a single review with all its properties
 * Includes both original and possibly translated content
 * Contains metadata about the review and product
 */
export interface Review {
  author: string; // Name of the reviewer
  title: string; // Review title (possibly translated)
  review: string; // Review content (possibly translated)
  original_title: string; // Original review title
  original_review: string; // Original review content
  stars: string; // Rating given by reviewer
  iso: string; // Language ISO code
  version: string; // App version reviewed
  date: string; // Review submission date
  deleted: boolean; // Whether review was deleted
  has_response: boolean; // Whether vendor responded
  product: number; // Product identifier
  product_id: number; // Alternative product identifier
  product_name: string; // Name of the product
  vendor_id: string; // Vendor identifier
  store: string; // App store identifier
  weight: number; // Review weight/importance
  id: string; // Unique review identifier
  predicted_langs: string[]; // Detected languages in review
}

/**
 * Defines possible filters that can be applied to reviews
 */
export type ReviewFilters = {
  minRating?: number; // Minimum star rating filter
  appName?: string; // Filter by app name
  dateRange?: {
    // Filter by date range
    start: string;
    end: string;
  };
};
