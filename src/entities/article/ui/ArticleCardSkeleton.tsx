export const ArticleCardSkeleton = () => {
  return (
    <div className="animate-pulse p-4 border rounded mb-4 mt-4">
      <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-8"></div>
      <div className="flex justify-between items-center w-full">
        <div className="h-8 bg-gray-300 rounded w-1/6"></div>
        <div className="h-8 bg-gray-300 rounded w-1/6"></div>
      </div>
    </div>
  );
};
