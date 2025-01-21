"use client";

import { ReviewPageSkeleton } from "@/components/ReviewCardSkeletons";
import { useEffect, useState } from "react";
import ReviewList from "@/components/ReviewList";
import ReviewSidebar from "@/components/ReviewSidebar";
import ReviewFilters from "@/components/ReviewFilters";
import ThreeDTitle from "@/components/ThreeDTitle";

export default function Reviews() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Your data fetching logic here
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <ReviewPageSkeleton />;

  return (
    <main className="container mx-auto px-1 py-2">
      <ThreeDTitle>Reviews</ThreeDTitle>
      <ReviewFilters />
      <div className="flex gap-4 mt-4">
        <ReviewSidebar />
        <div className="flex-1 min-w-0">
          <ReviewList />
        </div>
      </div>
    </main>
  );
}
