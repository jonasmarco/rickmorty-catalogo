import React from 'react';

interface UseInfiniteScrollProps {
  hasNextPage?: boolean;
  isLoading: boolean;
  loadMore: () => void;
}

export function useInfiniteScroll({hasNextPage, isLoading, loadMore}: UseInfiniteScrollProps) {
  const sentinelRef = React.useRef<HTMLDivElement | null>(null);

  const handleObserver = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasNextPage && !isLoading) {
        loadMore();
      }
    },
    [hasNextPage, isLoading, loadMore],
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '200px',
      threshold: 0.1,
    });

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current);
    };
  }, [handleObserver]);

  return sentinelRef;
}
