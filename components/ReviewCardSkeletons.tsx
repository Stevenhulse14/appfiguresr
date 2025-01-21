export const ReviewItemSkeleton = () => (
  <div className="bg-white/50 rounded-lg shadow-sm p-4 animate-pulse">
    {/* Header with rating */}
    <div className="flex items-center gap-2 mb-3">
      <div className="h-4 w-24 bg-gray-100 rounded-full" /> {/* Username */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 w-4 bg-gray-100 rounded-full" />
        ))}
      </div>
    </div>
    {/* Review content */}
    <div className="space-y-2 mb-3">
      <div className="h-4 bg-gray-100 rounded-full w-full" />
      <div className="h-4 bg-gray-100 rounded-full w-5/6" />
    </div>
    {/* Footer */}
    <div className="flex justify-between items-center pt-2 border-t border-gray-100">
      <div className="h-4 w-20 bg-gray-100 rounded-full" /> {/* Date */}
      <div className="h-4 w-16 bg-gray-100 rounded-full" /> {/* Version */}
    </div>
  </div>
);

export const ReviewListSkeleton = () => (
  <div className="space-y-4">
    {[...Array(5)].map((_, i) => (
      <ReviewItemSkeleton key={i} />
    ))}
  </div>
);

export const ReviewSidebarSkeleton = () => (
  <div className="w-64 bg-white/50 p-4 rounded-lg shadow-sm animate-pulse">
    {/* Filter groups */}
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="h-5 w-24 bg-gray-100 rounded-full" />{" "}
          {/* Filter title */}
          <div className="space-y-1">
            {[...Array(4)].map((_, j) => (
              <div key={j} className="h-4 w-full bg-gray-100 rounded-full" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ReviewPageSkeleton = () => (
  <div className="container mx-auto px-1 py-2">
    {/* Title */}
    <div className="h-6 w-48 bg-gray-100 rounded-full mx-auto mb-2" />
    {/* Content */}
    <div className="flex gap-4 mt-4">
      <ReviewSidebarSkeleton />
      <div className="flex-1">
        <ReviewListSkeleton />
      </div>
    </div>
  </div>
);
